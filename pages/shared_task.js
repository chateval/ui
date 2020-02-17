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
<p>Click <a href="https://my.chateval.org/dbdc5_data/">here</a> to download DBDC5 data.</p>
<hr />
<p>Following the success of <a href="https://sites.google.com/site/dialoguebreakdowndetection4/">DBDC4</a>, we are please to organize DBDC5 as part of the WOCHAT workshop held in Madrid, Spain in conjunction with <a href="https://www.iwsds.tech/">IWSDS2020</a>.</p>
<p>There are three tracks in this edition of DBDC:</p>
<ul>
<li>&nbsp;Dialogue breakdown detection</li>
</ul>
<p style="padding-left: 60px;">The task of dialogue breakdown detection is to detect whether the system utterance causes dialogue breakdown (a situation in a dialogue where users cannot proceed with the conversation) in a given dialogue context. The participants of this challenge will develop a dialogue breakdown detector that outputs a dialogue breakdown label (B: breakdown, PB: possible breakdown, or NB: Not a breakdown) and a distribution of these labels. The challenge includes dialogue breakdown detection for English and Japanese data.</p>
<ul>
<li>Error category classification</li>
</ul>
<p style="padding-left: 60px;">The task of error category classification is to classify system utterances that led to dialogue breakdowns into one or more error categories that describe the causes of dialogue breakdowns. We defined 16 categories [1], where multiple categories can be annotated for an utterance. There is no English data for this track, only Japanese. Five annotators annotated each system utterance (annotated with a majority of PB/B labels) with the error categories. As evaluation metrics, we will use exact match (EM) and F1.</p>
<ul>
<li>Recovery response generation</li>
</ul>
<p style="padding-left: 60px;">In this track, participants are required to build a response generator/selector. The system should be able to provide new responses aiming at correcting or recovering from a dialogue breakdown event. This track includes 600 dialogues in English from past Dialogue Breakdown Detection Challenges.</p>
<hr />
<p>How to register, download data and submit results</p>
<p>You can register at <a href="https://my.chateval.org/accounts/login/">https://my.chateval.org/accounts/login/</a>, once registered, you will be able to download the datasets and readme documents as well as submit your results at <a href="https://chateval.org/shared_task">https://chateval.org/shared_task</a></p>
<hr />
<p>Information about the tracks</p>
<p>Any updates will be posted at the official website:</p>
<p><a href="http://workshop.colips.org/wochat/@iwsds2020/index.html">http://workshop.colips.org/wochat/@iwsds2020/index.html</a></p>
<hr />
<p><strong>Timeline</strong></p>
<hr />
<p>Contact</p>
<p>If you have further questions regarding the data, please let us know by the following email address: <a href="mailto:dbdc5-admin@googlegroups.com">dbdc5-admin@googlegroups.com</a></p>
<hr />
<p>Organizers:</p>
<ul>
<li>Ryuichiro Higashinaka (NTT)</li>
<li>Yuiko Tsunomori (NTT Docomo)</li>
<li>Tetsuro Takahashi (Fujitsu Laboratories, LTD)</li>
<li>Hiroshi Tsukahara (Denso IT Laboratories)</li>
<li>Masahiro Araki (Kyoto Institute of Technology)</li>
<li>Jo&atilde;o Sedoc (University of Pennsylvania)</li>
<li>Rafael Banchs (NTU)</li>
<li>Luis F. D'Haro (Universidad Polit&eacute;cnica de Madrid)</li>
</ul>
<hr />
<p>References</p>
<p>[1] Higashinaka R., Araki M., Tsukahara H., Mizukami M. (2019) Improving Taxonomy of Errors in Chat-Oriented Dialogue Systems. In: D'Haro L., Banchs R., Li H. (eds) 9th International Workshop on Spoken Dialogue System Technology. Lecture Notes in Electrical Engineering, vol 579. Springer, Singapore</p>
<p>&nbsp;</p>
          <br />
          <h2 className="font-weight-bold">Shared Task Overview</h2>
          <p> Description of task </p>

          <br />
          <h2 className="font-weight-bold">Schedule</h2>
          <p>- Feb/15 development data distribution @ <a href="http://chateval.com">chateval.com</a></p>
          <p>- Mar/31 (Tue) registration deadline</p>
          <p>- Apr/10 test data distribution</p>
          <p>- Apr/15 (Wed) run submission deadline</p>
          <p>- Apr/15-4/20 (Mon) evaluation</p>
          <p>- Apr/20 notification</p>
          <p>- May/18-20 event (online proceedings)</p>

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
