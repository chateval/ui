const Turn = (props) => (
  <div class="col-md-3">
    <div class="card">
      <div class="card-body">
        <h6 class="card-subtitle mb-2 text-muted vmargin">{props.prompt.prompt_text}</h6>
        {props.responses.map(response => <div> <a class="badge badge-light"> {response.name} </a>: {response.response.response_text} </div> )}
      </div>
    </div>
    <br />
  </div>
)
export default Turn;