export default function EducationCV({ educationData }) {
  return (
    <div class="item">
      <div class="row" style="margin: 0 auto; width: 80%;">
        <span class="title-tenure col-10">
          <h4>{educationData.position}Student</h4>
          <p style="font-size: 0.85rem; font-weight: bold; width: max-content; color: white; padding: 2px 6px; background-color: #20c997" class="rounded-pill">
            <span>{educationData.location}</span>
          </p>
        </span>
        <div class="col-md-2">
          <p id="tenure" class="text-muted">{educationData.tenure}</p>
        </div>
        <p class="text-muted">{educationData.description}</p>
        <hr />
      </div>
    </div>
  );
}
