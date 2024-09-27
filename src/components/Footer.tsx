import "../styles.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {currentYear} Moviedux, All rights reserved</p>
    </footer>
  );
}

export default Footer;
