import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Header from '../components/Header';
import Footer from '../components/Footer';

const API_URL = process.env.API_URL;

class SharedTask extends Component {
  render() {
    return (
      <div>
        <Header />
        <main role="main" className="container">
          <h1 className="mt-5 font-weight-bold">Next Utterance Recovery</h1>
          <p> Some words about who/what/where/when/why </p>

          <br />
          <h2 className="font-weight-bold">Shared Task Overview</h2>
          <p> Description of task </p>

          <br />
          <h2 className="font-weight-bold">Schedule</h2>
          <p> Description of task </p>

          <br />
          <h2 className="font-weight-bold">Human Evaluation Results</h2>

          {this.props.human_evaluation.map(evaluation => (
            <div>
              <h5 className="card-title"> {evaluation.evalset.name} </h5>
              <p> {evaluation.evalset.description} </p>
              <table class="table">
                <thead>
                    <tr>
                      <th scope="col">System</th>
                      <th scope="col">Score</th>
                      <th scope="col">Link</th>
                    </tr>
                </thead>
                <tbody>
                  {evaluation.results.map(result => (
                      <tr>
                        <td>{result.name}</td>
                        <td>{result.score}</td>
                        <td> <a href={"/System?id=" + result.id}>View System</a> </td>
                      </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}

          <h2 className="font-weight-bold">Automatic Evaluation Results</h2>

          {this.props.human_evaluation.map(evaluation => (
            <div>
              <h5 className="card-title"> {evaluation.evalset.name} </h5>
              <p> {evaluation.evalset.description} </p>
              <table class="table">
                <thead>
                    <tr>
                      <th scope="col">System</th>
                      <th scope="col">Score</th>
                      <th scope="col">Link</th>
                    </tr>
                </thead>
                <tbody>
                  {evaluation.results.map(result => (
                      <tr>
                        <td>{result.name}</td>
                        <td>{result.score}</td>
                        <td> <a href={"/model?id=" + result.id}>View System</a> </td>
                      </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}

          <br />
          <h2 className="font-weight-bold">Metrics Description</h2>
          <p> Description of task </p>

        </main>
        <Footer />
      </div>
    )
  }
}

SharedTask.getInitialProps = async function() {
  // const sharedTaskRequest = await fetch(API_URL + 'shared_task');
  // const sharedTaskData = await sharedTaskRequest.json();
  // console.log(sharedTaskData)

  const human_evaluation = [
    {
      evalset: { 
        name: "Dialogue Breakdown Detection Challenge",
        description: "The DBDC dataset consists of a series of text-based conversations between a human and a chatbot where the human was aware they were chatting with a computer (Higashinaka et al. 2016)."
      },
      results: [
        {
          id: 1,
          name: "System 1",
          score: 0.4
        },
        {
          id: 1,
          name: "System 2",
          score: 0.6
        }
      ]
    }
  ]

  const automatic_evaluation = [
      {
        evalset: { 
          name: "Dialogue Breakdown Detection Challenge",
          description: "The DBDC dataset consists of a series of text-based conversations between a human and a chatbot where the human was aware they were chatting with a computer (Higashinaka et al. 2016)."
        },
        results: [
          {
  
          }
        ]
      }
  ]

  return { human_evaluation, automatic_evaluation }
};

export default SharedTask;
