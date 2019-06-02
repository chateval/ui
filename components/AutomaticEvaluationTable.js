import { CSVLink } from "react-csv";

// returns CSV formatted array for each dataset's evaluation metrics
function getCSVArray(auto_evals) {
  let csv = [];
  for (const auto_eval of auto_evals) { csv.push([auto_eval.name, auto_eval.value]) };
  return csv;
}

const AutomaticEvaluationTable = (props) => {
  return (
    <div className="col-md-12">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Measure</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          {props.autoEval.map((metric, index) => 
            <tr key={index}>
              <td>{metric.name}</td>
              <td>{metric.value}</td>
            </tr>
          )}
        </tbody>
      </table>
      <CSVLink 
        data={getCSVArray(props.autoEval)}
        filename={props.csvFileName + ".csv"}
      >
        Export Automatic Evaluation Results
      </CSVLink>
    </div>
  );
}

export default AutomaticEvaluationTable;
