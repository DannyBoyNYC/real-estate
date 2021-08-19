export default function Nav() {
  return (
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className="mobile-btn" href="#home" title="Hide navigation">
        Hide navigation
      </a>
      <ul id="nav" className="nav">
        <li className="current">
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#section">About</a>
        </li>
        <li>
          <a href="#portfolio">Why It Works</a>
        </li>
        <li>
          <a href="#resume">Subscriber Login</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}
