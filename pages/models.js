import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Select from 'react-select'
import makeAnimated from 'react-select/lib/animated';
import AutomaticEvaluationTable from '../components/AutomaticEvaluationTable';

const API_URL = process.env.API_URL;

class Models extends Component {
  constructor(props) {
    super(props);
    this.state = { help_text: '',
                   filtered_models: [],
                   evalset: null};
  }

  handleEvaluationDatasetChange = async (selectedOption) => {
    if (selectedOption.value === this.state.evalset) {
      return
    }

    // Temporarily clear the model list and specify we are loading.
    this.setState({ help_text: 'Loading...'});
    this.setState({ evalset: selectedOption.value });
    this.setState({filtered_models: []});

    // Update the filtered model list.
    let filtered_model_list = [];
    for (const model of this.props.models) {
      for (const evalset of model.evalsets) {
        if (evalset.evalset_id == selectedOption.value) {
          const modelRequest = await fetch('https://api.chateval.org/api/model?id=' + model.value);
          const modelData = await modelRequest.json();
          filtered_model_list.push(modelData.model);
        }
      }
    }

    this.setState({help_text: ''})
    this.setState({filtered_models: filtered_model_list})
  }

  render() {
    return (
      <div>
        <Header />
        <main role="main" className="container">
          <h1 className="mt-5 font-weight-bold">Methods</h1>
          <p>Select a dataset to see all the methods available for it.</p>
					<div className="row">
            <div className="col-md-6">
              <Select 
                options={this.props.evalsets} 
                className="vmargin"
                placeholder="Select Evaluation Dataset"
                onChange={this.handleEvaluationDatasetChange}
              />
            </div>
          </div>
          <div className="row"><p>{this.state.help_text}</p></div>
          <div className="row">
            {this.state.filtered_models.map(model =>
              <div className="col-md-6">
                <br />
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title vmargin">{model.name}</h5>
                    <div className="card-text">
                      <p><b>Type:</b> {model.is_baseline}</p>
                      <p><b>Description:</b> {model.description}</p>
                    </div>
                    <a href={"/model?id=" + model.id}>View More Details</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

Models.getInitialProps = async function() {
  let models = [];
  let evalsets = [];

  const modelRequest = await fetch(API_URL + 'models');
  const modelData = await modelRequest.json();

  const evalsetRequest = await fetch('https://api.chateval.org/api/evaluationdatasets');
  const evalsetData = await evalsetRequest.json();


  modelData.models.forEach(model => {
		models.push({ 'value': model.id, 'label': model.name, 'evalsets': model.evalsets})
  });

  evalsetData.evaluationdatasets.forEach(evalset => {
    evalsets.push({ 'value': evalset.evalset_id, 'label': evalset.name})
  });

  return { evalsets, models, API_URL }
};

export default Models;
