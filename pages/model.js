import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TurnList from '../components/TurnList';
import AutomaticEvaluationTable from '../components/AutomaticEvaluationTable';
import fetch from 'isomorphic-unfetch';
import Select from 'react-select';
import Chart from 'react-google-charts';
import { CSVLink } from "react-csv";

const API_URL = process.env.API_URL;

// returns CSV formatted array for each dataset's evaluation metrics
function getCSVArray(evaluations, model_name) {
  // for (const auto_eval of auto_evals) { csv.push([auto_eval.name, auto_eval.value]) };
  const data = parseData(evaluations, model_name)
  return data;
}

const options = {
  title: 'Human evaluation',
  chartArea: {width: '50%', height:'100%'},
  isStacked: 'percent',
  legend:'right',
  annotations: {
    alwaysOutside: false,
    textStyle: {
      fontSize: 12,
      auraColor: 'none',
      color: '#555'
    },
    boxStyle: {
      stroke: '#ccc',
      strokeWidth: 1,
      gradient: {
        color1: '#f3e5f5',
        color2: '#f3e5f5',
        x1: '0%', y1: '0%',
        x2: '100%', y2: '100%'
      }
    }
  },
  bar: {groupWidth: '100px'},
  hAxis: {
    title: 'Fraction of Votes',
    minValue: 0,
  },
  vAxis: {
    title: 'Competing Model'
  }
};


function parseData(data, targetModel) {
  const datasetTasks = data['evaluations']
  var output = [];
  output.push(['Model',
    targetModel  + ' wins',
    {type: 'string', role: 'annotation'},
    'Compteting model wins',
    {type: 'string', role: 'annotation'},
    'Tie',
    {type: 'string', role: 'annotation'}])
  for (let task of datasetTasks) {
    if (task['model1'] == targetModel) {
      output.push([task['model2'],
       parseFloat(task['m1win']),
       task['m1win'].toString(),
       parseFloat(task['m2win']),
       task['m2win'].toString(),
       parseFloat(task['tie']),
       task['tie'].toString()]);
    }
    else if (task['model2'] == targetModel) { 
      output.push([task['model1'],
       parseFloat(task['m2win']),
       task['m2win'].toString(),
       parseFloat(task['m1win']),
       task['m1win'].toString(),
       parseFloat(task['tie']),
       task['tie'].toString()]);    }
    }
    output = output.sort(function(a,b){return a[1]<b[1];});
    return output
}


class Model extends Component {
  constructor(props) {
    super(props);
    this.state = { models: [], prompts: [], responses: [], humanEvaluationData: {evaluations: []} };
    this.handleEvaluationDatasetChange.bind(this);

    this.chart = this.chart.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  handleEvaluationDatasetChange = async(evalset) => {
    this.updateToNewEvalset(evalset)
  }

  updateToNewEvalset = async(evalsetFromSelector) => {
    const evalset = this.props.model.evaluationdatasets[evalsetFromSelector.value]

    // Update prompts data.
    this.setState({currentEvalset: evalset})
    const promptsRequest = await fetch(API_URL+ 'prompts?evalset=' + evalset.evalset_id);
    const promptsData = await promptsRequest.json();
    const prompts = promptsData.prompts.slice(0, 200);
    this.setState({ prompts });

    // Update response data.
    const requestURL = API_URL + 'responses?evalset=' + evalset.evalset_id + "&model_id=" + this.props.model.model_id
    const responsesRequest = await fetch(requestURL);
    const responsesData = await responsesRequest.json();
    const responses = [{ model_id: this.props.model.model_id, responses: responsesData.responses.slice(0, 200), name: this.props.model.name }];
    this.setState({ responses });

    // Update automatic evaluation data.
		const autoEvalRequest = await fetch(API_URL + 'automatic-evaluation?model_id=' + this.props.model.model_id + "&evaluationdataset_id=" + evalset.evalset_id);
    const autoEvaluationData = await autoEvalRequest.json();
    let evaluations = []
    autoEvaluationData.forEach(evaluation => {
      evaluations.push({
        id: evaluation.metric.metric_id,
        name: evaluation.metric.name,
        value: evaluation.value
      });
    });
    this.setState({evaluations})

    // Update human evaluation data.
		const humanEvalRequest = await fetch(API_URL + 'human_evaluations?model_id=' + this.props.model.model_id + "&evaluationdataset_id=" + evalset.evalset_id);
		var humanEvaluationData = await humanEvalRequest.json();
    if (humanEvaluationData == 'INVALID_QUERY') {
      humanEvaluationData = { evaluations: [] };
    }
    this.setState({humanEvaluationData: humanEvaluationData})
  }

  chart() {
    // Renders bar graph with human evaluation results.
    if (this.state.humanEvaluationData.evaluations.length == 0) {
		  return (<p>No human evaluation results available.</p>)
    } else {
      const data = parseData(this.state.humanEvaluationData, this.props.model.name)
      return ( 
				<Chart chartType="BarChart" width="100%" height="400px" options={options} data={data}/>
			);
    }
  }

  componentDidMount() {
		this.updateToNewEvalset(this.props.evalsetsForSelector[0]);
  }

  render() {
    var autoEvalResults = (<p>Loading...</p>);
    if (this.state.evaluations !== undefined) {
      autoEvalResults = (<AutomaticEvaluationTable autoEval={this.state.evaluations} csvFileName={this.state.currentEvalset.name}
/>);
    }

    var evalsetNameAddition = "";
    if (this.state.currentEvalset !== undefined) {
      evalsetNameAddition = " for " + this.state.currentEvalset.name;
    }

    return (
      <div>
        <Header />
        <main role="main" className="container">
          <h1 className="mt-5 font-weight-bold"> {this.props.model.name}</h1>
          <p className="lead">{this.props.model.description}</p>
          <p>
            <b> Institution: </b> {this.props.model.institution}
            <br />
            <b>Source code: </b>
            <a href={this.props.model.repo_location}>{this.props.model.repo_location}</a>
            <br />
            <b>Model weights: </b>
            <a href={this.props.model.cp_location}>{this.props.model.cp_location}</a>
          </p>
          <hr />
          <Select 
            options={this.props.evalsetsForSelector} 
            className="vmargin"
            placeholder="Select Evaluation Dataset"
            onChange={this.handleEvaluationDatasetChange}
            selected="0"
          />
          <br/>
          <h2 className="font-weight-bold">Automatic Evaluations{evalsetNameAddition}</h2>
          <div className="row">
            {autoEvalResults}
          </div>
          <hr />
          <h2 className="font-weight-bold">Human Evaluations{evalsetNameAddition}</h2>
          <div className="HumanEvalChart">
            <this.chart />
            <p>
              <CSVLink 
              data={getCSVArray(this.state.humanEvaluationData, this.props.model.name)}
              filename={"human_evaluation.csv"}>
                Export Human Evaluation Results
              </CSVLink>
            </p>
          </div>
          <hr />
          <h2 className="font-weight-bold">Conversations{evalsetNameAddition}</h2>
          <TurnList prompts={this.state.prompts} responses={this.state.responses} />
        </main>
        <Footer />
      </div>
    );
  }
}

Model.getInitialProps = async function(props) {
  const { query } = props;
  const modelRequest = await fetch(API_URL + 'model/' + query.id);
  const modelData = await modelRequest.json();

  // Create list of evalsets that users should be able to select from in dropdown.
  var evalsetsForSelector = []  
  modelData.evaluationdatasets.forEach(evalset => {
    evalsetsForSelector.push({ 'value': evalset.evalset_id, 'label': evalset.name})
  });

  // Convert the eval sets from a list to a dictionary where the key is the evalset_id
  const evalsetDict = {}
  var evalset
  for (var i = 0; i < modelData.evaluationdatasets.length; i++) {
    evalset = modelData.evaluationdatasets[i]
    evalsetDict[evalset.evalset_id] = evalset;
  }
  modelData.evaluationdatasets = evalsetDict;
  return { evalsetsForSelector, model: modelData, API_URL };
};


export default Model;
