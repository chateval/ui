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
          <h1 className="mt-5 font-weight-bold">DBDC5:Dialogue Breakdown Detection Challenge 5</h1>
          <p> Following the success of <a href="https://sites.google.com/site/dialoguebreakdowndetection4/">DBDC4</a>, we are please to organize DBDC5 as part of the WOCHAT workshop held in Madrid, Spain in conjunction with <a href="https://www.iwsds.tech/">IWSDS2020</a>.</p>
<p>&nbsp;</p>
<p>There are three tracks in this edition of DBDC:</p>
<p>l&nbsp; Dialogue breakdown detection</p>
<p>&Oslash;&nbsp; The task of dialogue breakdown detection is to detect whether the system utterance causes dialogue breakdown (a situation in a dialogue where users cannot proceed with the conversation) in a given dialogue context. The participants of this challenge will develop a dialogue breakdown detector that outputs a dialogue breakdown label (B: breakdown, PB: possible breakdown, or NB: Not a breakdown) and a distribution of these labels. The challenge includes dialogue breakdown detection for English and Japanese data.</p>
<p>l&nbsp; Error category classification</p>
<p>&Oslash;&nbsp; The task of error category classification is to classify system utterances that led to dialogue breakdowns into one or more error categories that describe the causes of dialogue breakdowns. We defined 16 categories [1], where multiple categories can be annotated for an utterance. There is no English data for this track, only Japanese. Five annotators annotated each system utterance (annotated with a majority of PB/B labels) with the error categories. As evaluation metrics, we will use exact match (EM) and F1.</p>
<p>l&nbsp; Recovery response generation</p>
<p>&Oslash;&nbsp; In this track, participants are required to build a response generator/selector. The system should be able to provide new responses aiming at correcting or recovering from a dialogue breakdown event. This track includes 600 dialogues in English from past Dialogue Breakdown Detection Challenges.</p>

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
