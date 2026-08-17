function Home({ onStartTest, onLogin, onBuyPremium, isPremium }) {
  const premiumClick = () => {
    if (isPremium) {
      alert("✅ Premium Feature Open");
    } else {
      alert("🔒 Please Buy Premium Membership");
    }
  };

  return (
    <>
      <h2>Welcome</h2>

      <p>
        Prepare Smart. Score High. Achieve Your Railway LDCE Mechanical JE Goal.
      </p>

      <p>India's Best Railway LDCE Mechanical JE Test Series</p>

      <button onClick={onStartTest}>
        📝 Start Free Mock Test
      </button>

      <button onClick={onLogin}>
        🔐 Login
      </button>

      <a
        href="/app-debug-google.apk"
        download="SAINI-LDCE-Mechanical-JE.apk"
        style={{
          display: "inline-block",
          margin: "10px",
          padding: "12px 18px",
          borderRadius: "8px",
          background: "#1976d2",
          color: "white",
          textDecoration: "none",
          fontWeight: "600"
        }}
      >
        📱 Download Android App
      </a>

      <button
        onClick={onBuyPremium}
        style={{
          margin: "10px",
          padding: "12px 18px",
          borderRadius: "8px",
          background: "#f5a623",
          color: "white",
          border: "none",
          fontWeight: "600"
        }}
      >
        💎 {isPremium ? "Premium Active ✅" : "Buy Premium Test Series"}
      </button>

      <div className="features">

        <div
          className="card"
          onClick={premiumClick}
          style={{ cursor: "pointer" }}
        >
          <h3>
            📚 Topic Wise Tests {isPremium ? "✅" : "🔒"}
          </h3>
          <p>
            {isPremium ? "Unlimited Access" : "Premium Members Only"}
          </p>
        </div>

        <div
          className="card"
          onClick={premiumClick}
          style={{ cursor: "pointer" }}
        >
          <h3>
            📝 Full Mock Tests {isPremium ? "✅" : "🔒"}
          </h3>
          <p>
            {isPremium ? "Unlimited Access" : "Premium Members Only"}
          </p>
        </div>

        <div
          className="card"
          onClick={premiumClick}
          style={{ cursor: "pointer" }}
        >
          <h3>
            📄 Previous Year Papers {isPremium ? "✅" : "🔒"}
          </h3>
          <p>
            {isPremium ? "Unlimited Access" : "Premium Members Only"}
          </p>
        </div>

        <div
          className="card"
          onClick={premiumClick}
          style={{ cursor: "pointer" }}
        >
          <h3>
            📖 PDF Notes {isPremium ? "✅" : "🔒"}
          </h3>
          <p>
            {isPremium ? "Unlimited Download" : "Premium Members Only"}
          </p>
        </div>

      </div>
    </>
  );
}

export default Home;
