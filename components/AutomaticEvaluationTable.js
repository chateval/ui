const AutomaticEvaluationTable = (props) => (
  <div className="col-md-12">
    <br />
    <h3 class="card-title"> {props.evaluation.evalset.name} </h3>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Measure</th>
          <th scope="col">Value</th>
        </tr>
      </thead>
      <tbody>
        {props.evaluation.auto_evals.map(auto_eval => 
          <tr>
            <td>{auto_eval.name}</td>
            <td>{auto_eval.value}</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

export default AutomaticEvaluationTable;