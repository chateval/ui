const Turn = (props) => (
  <div className="col-md-6 vmargin">
    <div className="card">
      <div className="card-body">
        <h6 className="card-title mb-2 text-muted">{props.prompt.prompt_text}</h6>
        {props.responses.map((response, index) => <div key={index}> <a className="badge badge-light font-weight-normal"> {response.name} </a> {response.response.response_text} </div> )}
      </div>
    </div>
  </div>
)
export default Turn;
