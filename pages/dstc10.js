import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Header from '../components/Header';
import Footer from '../components/Footer';

const API_URL = process.env.API_URL;

class DSTC10 extends Component {
  render() {
    return (
      <div>
        <Header />
        <main role="main" className="container">
          <h1 className="mt-5 font-weight-bold">DSTC10: Dialogue System Technology Challenge 10</h1>
          <h2 className="mt-5 font-weight-bold">Automatic Evaluation and Moderation of Open-domain Dialogue Systems</h2>
            <br />
            <p>Click <a href="#">here</a> to download DSTC10 data.</p>
            <p>Click <a href="#">here</a> to submit.</p>
            <hr />
            <p>There are two subtasks in this track:</p>

          <h3 className="font-weight-bold">Task Overview</h3>
            <br />
            <ul>
              <li><b>Subtask 1: Automatic Open-domain Dialogue Evaluation</b></li>
            </ul>
            <p style={{marginLeft: 60 + 'px'}} align='justify'>Effective automatic dialogue evaluation metrics possess the following two important properties as indicated in (Deriu et al., 2019): 
                <br /> <br />
                <ul>
                  <li>Correlated to human judgements - the metrics should produce evaluation scores that well correlate to human judgements (scores) across multiple dialogue evaluation aspects. </li>
                  <li>Explainable - the metrics should provide constructive and explicit feedback to the generative models in terms of the quality of their generated responses. For instance, if a generative model is contradicting itself, the evaluation metrics should signal such behavior to the generative models.</li>
                </ul>
                In this task, our goal is to seek effective automatic dialogue evaluation metrics that exhibit the above properties. These metrics can serve as a proxy to human evaluation for fast prototyping of open-domain chatbots. We have identified the following datasets to test the effectiveness of the proposed evaluation metrics: 
                <br /> <br />
                <ul>
                  <li>DSTC6 human evaluation data (Hori et al., 2017)</li>
                  <li>DSTC7 human evaluation data (Galley et al., 2019)</li>
                  <li>Persona-Chatlog dataset (See et al., 2019)</li>
                  <li>USR dataset (Mehri & Eskenazi, 2020)</li>
                  <li>FED dataset (Mehri & Eskenazi, 2020)</li>
                </ul>
                During the development phase, the participants need to propose different evaluation metrics. participants can submit their metric scores via ChatEval. The Pearson and Spearman correlations between the submitted scores and corresponding human scores will be computed per evaluation category per dataset. The correlation results will be reported in the leaderboard on the evaluation category basis. The submissions will be ranked by the average correlation scores across all the categories of all the datasets.</p>
            <p style={{marginLeft: 60 + 'px'}} align='justify'>During the final evaluation phase, we will release a hidden evaluation set and all the submitted metrics will be evaluated with the hidden evaluation set. The final ranking will be based on the performance on both the development set and the hidden test set.</p>
            <p style={{marginLeft: 60 + 'px'}} align='justify'>Note: The above datasets are only allowed for testing the proposed metrics, not for training the evaluation systems. The performance on the hidden test set has higher importance on the final ranking of the submissions.</p>
            <hr />
            <ul>
              <li><b>Subtask 2: Moderation of Open-domain Dialogue Systems</b></li>
            </ul>
            <p style={{marginLeft: 60 + 'px'}} align='justify'>In this task, our goal is to evaluate the capability of generative dialogue systems to generate appropriate answers that can go beyond detecting toxicity and moderate the conversation by producing appropriate and correct answers that allow the system to continue with the dialogue. For this task a dataset of pairs of 100K messages (training and validation set) with the following characteristics will be provided for development:
                <br /> <br />
                <ul>
                  <li>A toxic user sends a Tweet message using one or several of the most common swear words found on the Internet. The Tweet message must be directed to one of the customer service channels.</li>
                  <li>A toxic user writes a Tweet message using one or several swear words and the message is replied by another user.</li>
                  <li>A toxic user posts a message in Reddit using one or several swear words and the message is replied by another user.</li>
                </ul>
            </p>
            <p style={{marginLeft: 60 + 'px'}} align='justify'>During the development phase, participants need to come up with systems that are capable of generating polite, specific and semantically appropriate responses in such scenarios.</p>
            <p style={{marginLeft: 60 + 'px'}} align='justify'>During the evaluation phase, a hidden test set will be provided to the participants for them to generate system responses, which will be evaluated based on the objective similarity between the generated response and the original response (e.g. sentence embedding similarity, Deep AM-FM (Zhang et al., 2021), BLEU, ROUGE, etc). For the top-3 submitted systems in the objective evaluation, a set of 100 responses will be manually evaluated for politeness, specificity, semantically appropriateness and fluency.</p> 
            <hr />
            <p>How to register, download data and submit results</p>
            <p>You can register at <a href="https://my.chateval.org/accounts/login/">https://my.chateval.org/accounts/login/</a>, once registered, you will be able to download the datasets and readme documents as well as submit your results at <a href="https://chateval.org/dstc10">https://chateval.org/dstc10</a></p>
            <hr />
            <p>Information about the tracks</p>
            <p>Any updates will be posted at the official website:</p>
            <p><a href="https://sites.google.com/dstc.community/dstc10/">https://sites.google.com/dstc.community/dstc10/</a></p>
<hr />
<p>Contact</p>
<p>If you have further questions regarding the data, please let us know by the following email address: <a href="mailto:dstc10-track-5@googlegroups.com">dstc10-track-5@googlegroups.com</a></p>
<hr />
<p>Organizers:</p>
<ul>
  <li>Chen Zhang (National University of Singapore, Singapore)</li>
  <li>Haizhou Li (National University of Singapore, Singapore)</li>
  <li>Jo&atilde;o Sedoc (New York University, USA)</li>
  <li>Luis F. D'Haro (Universidad Polit&eacute;cnica de Madrid, Spain)</li>
  <li>Rafael Banchs (Intapp Inc., USA)</li>
  <li>Alexander Rudnicky (Carnegie Mellon University, USA)</li>
</ul>
<hr />
<p>References</p>
<p>[1] Deriu, J., Rodrigo, A., Otegi, A., Echegoyen, G., Rosset, S., Agirre, E., & Cieliebak, M. (2020). Survey on evaluation methods for dialogue systems. Artificial Intelligence Review, 1-56.</p>
<p>[2] Hori, C., & Hori, T. (2017). End-to-end conversation modeling track in DSTC6. arXiv preprint arXiv:1706.07440.</p>
<p>[3] Galley, M., Brockett, C., Gao, X., Gao, J., & Dolan, B. (2019). Grounded response generation task at dstc7. In AAAI Dialog System Technology Challenges Workshop.</p>
<p>[4] See, A., Roller, S., Kiela, D., & Weston, J. (2019, June). What makes a good conversation? How controllable attributes affect human judgments. In Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume 1 (Long and Short Papers) (pp. 1702-1723).</p>
<p>[5] Mehri, S., & Eskenazi, M. (2020). USR: An Unsupervised and Reference Free Evaluation Metric for Dialog Generation. arXiv preprint arXiv:2005.00456.</p>
<p>[6] Mehri, S., & Eskenazi, M. (2020, July). Unsupervised Evaluation of Interactive Dialog with DialoGPT. In Proceedings of the 21th Annual Meeting of the Special Interest Group on Discourse and Dialogue (pp. 225-235).</p>
<p>[7] Zhang C., D’Haro L.F., Banchs R.E., Friedrichs T., Li H. (2021) Deep AM-FM: Toolkit for Automatic Dialogue Evaluation. In Conversational Dialogue Systems for the Next Decade. Lecture Notes in Electrical Engineering, vol 704. Springer, Singapore.</p>
<p>&nbsp;</p>
          <br />

          <h3 className="font-weight-bold">Schedule (Coming Soon)</h3>

          <br />
          
          <h3 className="font-weight-bold">Automatic Evaluation Leaderboard (Coming Soon)</h3>

          {this.props.automatic_evaluation.map(evaluation => (
            <div>
              <h5 className="card-title"> {evaluation.evalset.name} </h5>
              <p> {evaluation.evalset.description} </p>
              <table class="table">
                <thead>
                    <tr>
                      <th scope="col">System</th>
                      <th scope="col">D6 (&rho;)</th>
                      <th scope="col">D6 (&pi;)</th>
                      <th scope="col">D7 (&rho;)</th>
                      <th scope="col">D7 (&pi;)</th>
                      <th scope="col">PC (&rho;)</th>
                      <th scope="col">PC (&pi;)</th>
                      <th scope="col">UP (&rho;)</th>
                      <th scope="col">UP (&pi;)</th>
                      <th scope="col">UT (&rho;)</th>
                      <th scope="col">UT (&pi;)</th>
                      <th scope="col">FT (&rho;)</th>
                      <th scope="col">FT (&pi;)</th>
                      <th scope="col">FC (&rho;)</th>
                      <th scope="col">FC (&pi;)</th>
                      <th scope="col">AVG (&rho;)</th>
                      <th scope="col">AVG (&pi;)</th>
                    </tr>
                </thead>
                <tbody>
                  {evaluation.results.map(result => (
                      <tr>
                        <td>{result.sys}</td>
                        <td>{result.d6r}</td>
                        <td>{result.d6s}</td>
                        <td>{result.d7r}</td>
                        <td>{result.d7s}</td>
                        <td>{result.pcr}</td>
                        <td>{result.pcs}</td>
                        <td>{result.upr}</td>
                        <td>{result.ups}</td>
                        <td>{result.utr}</td>
                        <td>{result.uts}</td>
                        <td>{result.ftr}</td>
                        <td>{result.fts}</td>
                        <td>{result.fcr}</td>
                        <td>{result.fcs}</td>
                        <td>{result.avgr}</td>
                        <td>{result.avgs}</td>
                      </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}

        </main>
        <Footer />
      </div>
    )
  }
}

DSTC10.getInitialProps = async function() {
  // const dstc10Request = await fetch(API_URL + 'dstc10');
  // const sharedTaskData = await sharedTaskRequest.json();
  // console.log(sharedTaskData)

  const automatic_evaluation = [
      {
        evalset: { 
          name: "Open-domain Dialogue Evaluation",
          description: "The leaderboard showing names of submissions and their corresponding Pearson & Spearman Correlation for each evaluation dataset. (Explanation of abbreviations: D6 - DSTC6, D7 - DSTC7, PC - Persona-Chatlog, UP - USR-Persona, UT - USR-Topical, FT - FED-Turn, FC - FED-Conversation, AVG - Average, ρ - Pearson score, π - Spearman score)"
        },
        results: [
          {
            sys: 'BLEU',
            d6r: '-',
            d6s: '-',
            d7r: '-',
            d7s: '-',
            pcr: '-',
            pcs: '-',
            upr: '-',
            ups: '-',
            utr: '-',
            uts: '-',
            ftr: '-',
            fts: '-',
            fcr: '-',
            fcs: '-',
            avgr: '-',
            avgs: '-'
          }
        ]
      }
  ]

  return { automatic_evaluation }
};

export default DSTC10;
