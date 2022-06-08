import MainProject from "./_main-project";

function ProjectBase({ myProjects }) {
  return (
    <section id="projects">
      <div class="projects__container">
        <div class="row">
          <ul class="project__list">
            { myProjects.map((project,i) => 
                <MainProject myProject={project} />
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProjectBase;
