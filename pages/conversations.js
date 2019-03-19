import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TurnList from '../components/TurnList';

class Conversations extends Component {
  constructor(props) {
    super(props)
    this.state = { prompts: [], responses: [], show: false, model_options: props.models, models: [] };
    this.updateTurns = this.updateTurns.bind(this);
  }

  handleEvaluationDatasetChange = (selectedOption) => {
    this.setState({ evalset: selectedOption.value });
    let filtered = [];
    for (const model of this.props.models) {
      for (const evalset of model.evalsets) {
        if (evalset.evalset_id == selectedOption.value) {
          filtered.push(model)
        }
      }
    }

    this.setState({ model_options: filtered });
  }

  handleModelChange = models => {
    console.log(models)
    this.setState({ models: models });
  }

  async updateTurns() {
    console.log(this.state.models)
    const promptsRequest = await fetch('https://api.chateval.org/api/prompts?evalset=' + this.state.evalset);
    const promptsData = await promptsRequest.json();
    const prompts = promptsData.prompts.slice(0, 200);

    let responses = [];
    for (const model of this.state.models) {
      const responsesRequest = await fetch('https://api.chateval.org/api/responses?evalset=' + this.state.evalset + "&model_id=" + model.value);
      const responsesData = await responsesRequest.json();
      responses.push({ model_id: model.value, responses: responsesData.responses.slice(0, 200), name: model.label });
    };

    this.setState({ prompts });
    this.setState({ responses });
  }

  render() {
    return (
      <main role="main">
        <Header />
        <div className="container">
          <h1 className="mt-5 font-weight-bold">View Conversations</h1>
          <p className="lead">Model responses for a given dataset are available to view and compare against other models. 
            First, select an evaluation dataset and add the model you wish to compare (you can compare multiple models at once). 
            Human and automatic evaluations can be similarly viewed <a href="models">here</a> or as a leaderboard (per metric) <a href="/leaderboard">here</a>.
          </p>
        
          <div className="row">
            <div className="col-md-6">
              <h2>Dataset</h2>
              <Select 
                options={this.props.evalsets} 
                className="vmargin"
                placeholder="Select Evaluation Dataset"
                onChange={this.handleEvaluationDatasetChange}
              />
            </div>
            <div className="col-md-6">
              <h2>Model</h2>
              <Select
                closeMenuOnSelect={false}
                components={makeAnimated()}
                className="vmargin"
                isMulti
                placeholder="Add Model"
                options={this.state.model_options}
                onChange={this.handleModelChange}
              />
            </div>
          </div>
          
          <button className="btn btn-primary vmargin" onClick={this.updateTurns}>Update Conversation</button>

          <br /> <br />
          <TurnList prompts={this.state.prompts} responses={this.state.responses} />
          </div>
        <Footer />
      </main>
    );
  }
}

Conversations.getInitialProps = async function() {
  let evalsets = [], models = [];
  const modelRequest = await fetch('http://localhost:8000/api/models');
  const evalsetRequest = await fetch('https://api.chateval.org/api/evaluationdatasets');
  const modelData = await modelRequest.json();
  const evalsetData = await evalsetRequest.json();
 
  modelData.models.forEach(model => {
    models.push({ 'value': model.id, 'label': model.name, 'evalsets': model.evalsets})
  });

  evalsetData.evaluationdatasets.forEach(evalset => {
    evalsets.push({ 'value': evalset.evalset_id, 'label': evalset.name})
  });

  return { evalsets, models }
};

export default Conversations;
