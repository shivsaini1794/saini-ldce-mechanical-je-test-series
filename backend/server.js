const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const { getAuth } = require("firebase-admin/auth");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

function getFirebaseCredential() {
  const raw =
    process.env.FIREBASE_SERVICE_ACCOUNT_JSON ||
    process.env.FIREBASE_SERVICE_ACCOUNT;

  if (!raw) {
    throw new Error("Firebase Admin credentials missing");
  }

  const serviceAccount = JSON.parse(raw);

  if (serviceAccount.private_key) {
    serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, "\n");
  }

  return cert(serviceAccount);
}

initializeApp({
  credential: getFirebaseCredential(),
});

const db = getFirestore();
const firebaseAuth = getAuth();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

async function requireAuth(req, res, next) {
  try {
    const header = req.headers.authorization || "";

    if (!header.startsWith("Bearer ")) {
      return res.status(401).json({
        verified: false,
        message: "Login required",
      });
    }

    const token = header.substring(7);
    req.firebaseUser = await firebaseAuth.verifyIdToken(token);
    next();
  } catch (error) {
    console.error("Auth verification failed:", error.message);
    return res.status(401).json({
      verified: false,
      message: "Login required",
    });
  }
}

app.get("/", (req, res) => {
  res.send("LDCE Backend Running 🚀");
});

app.get("/health", (req, res) => {
  res.json({
    ok: true,
    firebaseAdmin: true,
  });
});

app.post("/create-order", requireAuth, async (req, res) => {
  try {
    const amount = Math.round(
      Number(process.env.PREMIUM_AMOUNT || 199) * 100
    );

    const order = await razorpay.orders.create({
      amount,
      currency: "INR",
      receipt: "LDCE_" + Date.now(),
      notes: {
        userId: req.firebaseUser.uid,
      },
    });

    res.json(order);
  } catch (error) {
    console.error("Order create failed:", error);
    res.status(500).json({
      success: false,
      message: "Order create failed",
    });
  }
});

app.post("/verify-payment", requireAuth, async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body || {};

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        verified: false,
        message: "Payment response incomplete",
      });
    }

    const expected = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    const expectedBuffer = Buffer.from(expected);
    const signatureBuffer = Buffer.from(razorpay_signature);

    if (
      expectedBuffer.length !== signatureBuffer.length ||
      !crypto.timingSafeEqual(expectedBuffer, signatureBuffer)
    ) {
      return res.status(400).json({
        verified: false,
        message: "Invalid payment signature",
      });
    }

    const order = await razorpay.orders.fetch(razorpay_order_id);

    if (order.notes?.userId !== req.firebaseUser.uid) {
      return res.status(403).json({
        verified: false,
        message: "Order user mismatch",
      });
    }

    await db.collection("users").doc(req.firebaseUser.uid).set(
      {
        premium: true,
        premiumActivatedAt: FieldValue.serverTimestamp(),
        lastPaymentId: razorpay_payment_id,
        lastOrderId: razorpay_order_id,
      },
      { merge: true }
    );

    res.json({
      verified: true,
      premium: true,
    });
  } catch (error) {
    console.error("Payment verification failed:", error);
    res.status(500).json({
      verified: false,
      message: "Payment verification failed",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
