import "../styles.css";

function Header() {
  return (
    <div className="header">
      <img className="logo" src="logo.png" alt="Moviedux" />
      <h2 className="app-subtitle">
        Time for popcorn! Find your next movie here.
      </h2>
    </div>
  );
}

export default Header;
