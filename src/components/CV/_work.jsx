export default function WorkCV({ workData }) {
  return (
    <div class="item">
      <div class="row" style="margin: 0 auto; width: 80%;">
        <span class="title-tenure col-10">
          <h4>{workData.position}</h4>
          <p class="text-muted location">{workData.location}</p>
          <p id="title-location-pill" style="font-size: 0.85rem; font-weight: bold; width: max-content; color: white; padding: 2px 6px; background-color: #0ea0ff" class="rounded-pill">
            <span>{workData.title}</span>
          </p>
        </span>
        <div class="col-md-2">
          <p id="tenure" class="text-muted">{workData.tenure}</p>
        </div>
        <p class="text-muted">{workData.description}</p>
        <hr />
      </div>
    </div>
  );
}
