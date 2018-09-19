import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Select from 'react-select'
import makeAnimated from 'react-select/lib/animated';
import AutomaticEvaluationTable from '../components/AutomaticEvaluationTable';

class Models extends Component {
  constructor(props) {
    super(props);
    this.state = { models: [] };
  }

  handleModelChange = models => {
    
  }

  render() {
    return (
      <div>
        <Header />
        <main role="main" class="container">
          <h1 class="mt-5">Models</h1>
          <p>Compare multiple models at once.</p>
          <Select
            closeMenuOnSelect={false}
            components={makeAnimated()}
            isMulti
            placeholder="Select Models"
            options={this.props.models}
            onChange={this.handleModelChange}
          />    
          </main>

          <div class="row">
            {this.state.models.map(model =>
              <div className="col-md-6">
                <div className="card">
                  <div class="card-body">
                    <h5 class="card-title">{model.name}</h5>
                    {model.evaluations.map(evaluation => <AutomaticEvaluationTable evaluation={evaluation} />)}
                  </div>
                </div>
              </div>
            )};
          </div>

        <Footer />
      </div>
    );
  }
}

Models.getInitialProps = async function() {
  let models = [];

  const modelRequest = await fetch('http://localhost:8000/api/models');
  const modelData = await modelRequest.json();
  
  modelData.models.forEach(model => {
    models.push({ 'value': model.model_id, 'label': model.name})
  });

  return { models };
};

export default Models;