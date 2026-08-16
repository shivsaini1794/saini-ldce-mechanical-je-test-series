const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay");
const crypto = require("crypto");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.get("/", (req, res) => res.send("LDCE Backend Running 🚀"));

app.post("/create-order", async (req, res) => {
  try {
    const options = {
      amount: Number(process.env.PREMIUM_AMOUNT || 199) * 100,
      currency: "INR",
      receipt: "LDCE_" + Date.now(),
      notes: { userId: req.body?.userId || "" },
    };
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Order create failed" });
  }
});

app.post("/verify-payment", async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body || {};
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ verified: false, message: "Payment response incomplete" });
    }
    const expected = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");
    const verified = crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(razorpay_signature));
    if (!verified) return res.status(400).json({ verified: false });
    res.json({ verified: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ verified: false });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
