import '../projectStyles.css';

function MainProject({ myProject }) {
  return (
    <li key="" class="project">
      <div class="project__wrapper">
        <img src={"https://ik.imagekit.io/maysentg/" + myProject.projectImage.fileName } class="project__img" alt={ myProject.title } />
        <div class="project__description">
          <h3 class="project__description--title">{ myProject.title }</h3>
          <h4 class="project__description--sub-title">{ myProject.skills }</h4>
          <p class="project__description--para">{ myProject.description }</p>
          <div class="project__description--links">
            <a
              href={ myProject.githubUrl }
              rel="noreferrer"
              target="_blank"
              class="project__description--link"
            >
              <span class="icon">
                <em class="bi bi-github">
                <img alt="web preview icon" loading="lazy" src="https://ik.imagekit.io/maysentg/tr:w-30,h-30/github-logo-white.png" class="icon"/>
                </em>
              </span>
            </a>
            <a
              href={ myProject.previewUrl }
              rel="noreferrer"
              target="_blank"
              class="project__description--link"
            >
              <span class="icon">
                <img alt="web preview icon" loading="lazy" src="https://ik.imagekit.io/maysentg/tr:w-30,h-30/website-logo-white.png"/>
              </span>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

export default MainProject;
