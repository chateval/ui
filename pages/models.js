import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Select from 'react-select'

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

    // TODO: REFACTOR TO A SEPERATE DJANGO REST API CALL
    // Update the filtered model list.
    let filtered_model_list = [];
    for (const model of this.props.models) {
      for (const evalset of model.evalsets) {
        if (evalset.evalset_id == selectedOption.value) {
          const modelRequest = await fetch(API_URL + 'model/' + model.value);
          const modelData = await modelRequest.json();
          filtered_model_list.push(modelData);
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
          <h1 className="mt-5 font-weight-bold">Systems</h1>
          <p>Select a dataset to see all the systems available for it.</p>
          <Select 
            options={this.props.evalsets} 
            className="vmargin"
            placeholder="Select Evaluation Dataset"
            onChange={this.handleEvaluationDatasetChange}
          />
          <p style={{marginTop: "0.5rem"}}>{this.state.help_text}</p>
          <div className="row">
            {this.state.filtered_models.map(model =>
              <div className="col-md-6">
                <br />
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title"><strong>{model.name}</strong></h5>
                    <div className="card-text">
                      <p><b>Type:</b> {model.is_baseline}<br />
                      <b>Description:</b> {model.description}</p>
                    </div>
                    <a href={"/model?id=" + model.model_id}>View Details</a>
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

  const modelRequest = await fetch(API_URL + 'model');
  const modelData = await modelRequest.json();

  const evalsetRequest = await fetch(API_URL + 'evaluation-dataset');
  const evalsetData = await evalsetRequest.json();

  modelData.forEach(model => {
    models.push({ 
      'value': model.model_id,
      'label': model.name, 
      'evalsets': model.evaluationdatasets
    });
  });

  evalsetData.forEach(evalset => {
    evalsets.push({ 'value': evalset.evalset_id, 'label': evalset.name })
  });

  return { evalsets, models, API_URL }
};

export default Models;
