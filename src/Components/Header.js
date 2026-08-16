function Header({ user }) {
  return (
    <header className="header">
      <h1>🚂 RAILWAY LDCE MECHANICAL JE TEST SERIES</h1>
      <p>India's No.1 Railway LDCE Mechanical JE Preparation Platform</p>

      {user && (
        <h3>👋 Welcome, {user.displayName}</h3>
      )}
    </header>
  );
}

export default Header;