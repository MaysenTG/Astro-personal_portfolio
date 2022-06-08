import Styles from "./styles.module.scss";

function PortfolioPreview({ project }) {
  const frontmatter = project;
  return (
    <>
      <h1 class="text-center">Projects</h1>
      <nav>
        <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
          <button
            class="nav-link active"
            id="nav-app-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-app"
            type="button"
            role="tab"
            aria-controls="nav-app"
            aria-selected="true"
          >
            Apps
          </button>
          <button
            class="nav-link"
            id="nav-websites-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-websites"
            type="button"
            role="tab"
            aria-controls="nav-websites"
            aria-selected="false"
          >
            Websites
          </button>
          <button
            class="nav-link"
            id="nav-automation-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-automation"
            type="button"
            role="tab"
            aria-controls="nav-automation"
            aria-selected="false"
          >
            Automation
          </button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-app"
          role="tabpanel"
          aria-labelledby="nav-app-tab"
        ></div>
        <div
          class="tab-pane fade"
          id="nav-websites"
          role="tabpanel"
          aria-labelledby="nav-websites-tab"
        ></div>
        <div
          class="tab-pane fade"
          id="nav-automation"
          role="tabpanel"
          aria-labelledby="nav-automation-tab"
        ></div>
      </div>
    </>
  );
}

export default PortfolioPreview;
