import { h } from "preact";
import Styles from "./styles.module.scss";

function Nav() {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark"
      style="background: linear-gradient(120deg,#7f70f5,#0ea0ff); color: #fff; padding: 20px"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Maysen Greenwood
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" id="/" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="/projects" href="/projects">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="/cv" href="/cv">
                CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
