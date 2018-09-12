import React, { Component } from 'react';

class Turn extends Component {
  render() {
    const renderResponses = Array.from(this.props.turn.responses).map(response => 
      <p> <span className="tag is-success" > {response.model.name} </span> {response.text} </p>
    );

    return (
      <div className="column is-half">
        <div className="card">
          <div className="card-content">
            <strong> <p> {this.props.turn.prompt} </p> </strong>
            {renderResponses}
          </div>
        </div>  
      </div>
    );
  }
}

export default Turn;