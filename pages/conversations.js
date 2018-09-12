import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Select from 'react-select'
import makeAnimated from 'react-select/lib/animated';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Turn from '../components/Turn';

class Conversations extends Component {
  constructor(props) {
    super(props)
    this.handleEvaluationDatasetChange = this.handleEvaluationDatasetChange.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
    this.state = { turns: [] }
  }

  async handleEvaluationDatasetChange(selectedOption) {
    this.setState({ evalset: selectedOption.value });
  }

  handleModelChange = models => {
    this.setState({ models });
    this.setTurns();
  }

  async setTurns(models) {
    let turns = [];

    this.state.prompts.forEach(prompt => {
      let turn = { prompt: prompt.prompt_text, responses: [] };
      turns.push(turn);  
      this.setState({ turns });
    });

    for (let i = 0; i < models.length; i += 1) {
      const model = { name: models[i].label, model_id: models[i].value }
      const route = "http://localhost:8000" + '/responses?evalset=' + this.state.evalset + '&model_id=' + models[i].value;
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
        <h1 className="mt-5">View Conversations</h1>
        <p className="lead">Model responses for a given dataset are available to view and compare against other models. 
          First, select an evaluation dataset and add the model you wish to compare (you can compare multiple models at once). 
          Automatic evaluations can be similarly viewed <a href="evaluations">here</a> or as a leaderboard (per metric) <a href="/leaderboard">here</a>.
        </p>
      
          <div classNameName="columns">
            <div classNameName="column">
            <h2>Dataset</h2>
              <Select 
                options={this.props.evalsets} 
                placeholder="Select Evaluation Dataset"
                onChange={this.handleEvaluationDatasetChange}
              />
            <h2 className="vmargin">Model</h2>
            <Select
                closeMenuOnSelect={false}
                components={makeAnimated()}
                isMulti
                placeholder="Select Models"
                options={this.props.models}
                onChange={this.handleModelChange}
              />
              <button className="btn btn-primary vmargin">View</button>
              <div classNameName="columns is-multiline">
                {this.state.turns.map(turn => <Turn turn={turn} />)}
              </div>
            </div>
          </div>
        </div>
        <Footer />

      </div>
    );
  }
}

Conversations.getInitialProps = async function() {
  let evalsets = [], models = [];

  const modelRequest = await fetch('http://localhost:8000/api/models');
  const evalsetRequest = await fetch('http://localhost:8000/api/evaluationdatasets');
  const modelData = await modelRequest.json();
  const evalsetData = await evalsetRequest.json();
 
  modelData.models.forEach(model => {
    models.push({ 'value': model.model_id, 'label': model.name})
  });

  evalsetData.evaluationdatasets.forEach(evalset => {
    evalsets.push({ 'value': evalset.evalset_id, 'label': evalset.name})
  });

  return { evalsets, models }
};

export default Conversations;