export default function skills({ skillTitle, skillDescription, skillIcon }) {
  return (
    <div class="col-md-4">
      <div class="card special-skill-item border-0">
        <div
          class="card-header bg-transparent border-0"
          style="text-align: center;"
        >
          <img src={ skillIcon } height="75" alt="star icon" />
        </div>
        <div class="card-body">
          <h4 class="card-title text-center">{ skillTitle }</h4>
          <p
            class="card-text text-center text-muted"
            style="font-size: 0.85rem"
          >
            { skillDescription }
          </p>
        </div>
      </div>
    </div>
  );
}
