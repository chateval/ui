import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Select from 'react-select'
import makeAnimated from 'react-select/lib/animated';

class Models extends Component {
  async handleModelChange() {

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