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
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href=" https://learningcenter.realestatesalessolutions.com/order?ct=1a5f66ca-bdef-4cf2-9bc4-5742bd78e5ce">
            Subscribe
          </a>
        </li>
        <li>
          <a href="https://learningcenter.realestatesalessolutions.com/users/sign_in">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}
