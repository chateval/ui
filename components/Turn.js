const Turn = (props) => (
  <div class="col-md-3 vmargin">
    <div class="card">
      <div class="card-body">
        <h6 class="card-title mb-2 text-muted">{props.prompt.prompt_text}</h6>
        {props.responses.map(response => <div> <a class="badge badge-light"> {response.name} </a>: {response.response.response_text} </div> )}
      </div>
    </div>
  </div>
)
export default Turn;