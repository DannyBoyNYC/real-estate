export default function Nav() {
  return (
    <nav>
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className="mobile-btn close" href="#home" title="Hide navigation">
        Hide navigation
      </a>
      <ul>
        <li className="current">
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#subscribe">Subscribe</a>
        </li>
        <li>
          <a href="#login">Login</a>
        </li>
      </ul>
    </nav>
  );
}
