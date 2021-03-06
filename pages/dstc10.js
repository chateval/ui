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
            <p>Click <a href="https://my.chateval.org/dstc10_data/">here</a> to download DSTC10 data.</p>
            <p>Click <a href="#">here</a> to submit.</p>
            <hr />
          
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
                  <li>DSTC6-Eval (D6) (Hori et al., 2017)</li>
                  <li>DSTC7-Eval (D7) (Galley et al., 2019)</li>
                  <li>Persona-Chatlog (PC) (See et al., 2019)</li>
                  <li>PersonaChat-USR (UP) (Mehri & Eskenazi, 2020a)</li>
                  <li>TopicalChat-USR (TP) (Mehri & Eskenazi, 2020a)</li>
                  <li>FED-Turn (FT) (Mehri & Eskenazi, 2020b)</li>
                  <li>FED-Conversation (FC) (Mehri & Eskenazi, 2020b)</li>
                  <li>DailyDialog-Eval (GD) (Gupta et al., 2019)</li>
                  <li>DailyDialog-Eval (ZD) (Zhao et al., 2020)</li>
                  <li>PersonaChat-Eval (ZP) (Zhao et al., 2020)</li>
                  <li>DailyDialog-Eval (ED) (Huang et al., 2020)</li>
                  <li>Empathetic-Eval (EE) (Huang et al., 2020)</li>
                  <li>ConvAI2-Eval (EC)  (Huang et al., 2020)</li>
                  <li>HUMOD (HU) (Merdivan et al., 2020)</li>
                </ul>
                During the development phase, the participants need to propose different evaluation metrics. participants can submit their metric scores via ChatEval. The Spearman correlations (&pi;) between the submitted scores and corresponding human scores will be computed per evaluation category per dataset. The correlation results will be reported in the leaderboard on the evaluation category basis. The submissions will be ranked by the average correlation scores across all the categories of all the datasets.</p>
            <p style={{marginLeft: 60 + 'px'}} align='justify'>During the final evaluation phase, we will release a hidden evaluation set and all the submitted metrics will be evaluated with the hidden evaluation set. The final ranking will be based on the performance on both the development set and the hidden test set.</p>
            <p style={{marginLeft: 60 + 'px'}} align='justify'>Note: The above datasets are only allowed for validating the proposed metrics, not for training the evaluation systems. The performance on the hidden test set has higher importance on the final ranking of the submissions.</p>
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


          <h3 className="font-weight-bold">Schedule</h3>
          <br />
          <ul>
            <li>Validation data released: Jun 14, 2021</li>
           <li>Test data released: Sep 13, 2021</li>
            <li> Entry submission deadline: Sep 21, 2021</li>
            <li>Final result announcement: Oct 1, 2021 - Oct 8, 2021</li>
          </ul>
          <hr/>
          
          <h3 className="font-weight-bold">Baselines and Data Description</h3>
          <br />
          <p><a href="https://github.com/e0397123/dstc10_metric_track">Subtask 1: Automatic Open-domain Dialogue Evaluation</a></p>
          <p><a href="https://github.com/lfdharo/DSTC10_Track5_Toxicity">Subtask 2: Moderation of Open-domain Dialogue Systems</a></p>
          <hr/>

          <h3 className="font-weight-bold">Automatic Evaluation Leaderboard (Coming Soon)</h3>

          <br />    
          {this.props.automatic_evaluation.map(evaluation => (
            <div key={evaluation.id}>
              <h5 className="card-title"> {evaluation.evalset.name} </h5>
              <p> {evaluation.evalset.description} </p>
              <table className="table">
                <thead>
                    <tr>
                      <th scope="col">System</th>
                      <th scope="col">D6 (&pi;)</th>
                      <th scope="col">D7 (&pi;)</th>
                      <th scope="col">PC (&pi;)</th>
                      <th scope="col">UP (&pi;)</th>
                      <th scope="col">UT (&pi;)</th>
                      <th scope="col">FT (&pi;)</th>
                      <th scope="col">FC (&pi;)</th>
                      <th scope="col">ZD (&pi;)</th>
                      <th scope="col">ZP (&pi;)</th>
                      <th scope="col">GD (&pi;)</th>
                      <th scope="col">ED (&pi;)</th>
                      <th scope="col">EC (&pi;)</th>
                      <th scope="col">EE (&pi;)</th>
                      <th scope="col">HU (&pi;)</th>
                      <th scope="col">AVG (&pi;)</th>
                    </tr>
                </thead>
                <tbody>
                  {evaluation.results.map(result => (
                      <tr key={result.id}>
                        <td key="td01">{result.sys}</td>
                        <td key="td02">{result.d6s}</td>
                        <td key="td03">{result.d7s}</td>
                        <td key="td04">{result.pcs}</td>
                        <td key="td05">{result.ups}</td>
                        <td key="td06">{result.uts}</td>
                        <td key="td07">{result.fts}</td>
                        <td key="td08">{result.fcs}</td>
                        <td key="td09">{result.zds}</td>
                        <td key="td10">{result.zps}</td>
                        <td key="td11">{result.gds}</td>
                        <td key="td12">{result.eds}</td>
                        <td key="td13">{result.ecs}</td>
                        <td key="td14">{result.ees}</td>
                        <td key="td15">{result.hus}</td>
                        <td key="td16">{result.avgs}</td>
                      </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}

  <br />    
          {this.props.dialogue_moderation.map(evaluation => (
            <div key={evaluation.id}>
              <h5 className="card-title"> {evaluation.evalset.name} </h5>
              <p> {evaluation.evalset.description} </p>
              <table className="table">
                <thead>
                    <tr>
                      <th scope="col">System</th>
                      <th scope="col">BLEU</th>
                      <th scope="col">ROUGE-L</th>
                      <th scope="col">Deep AM-FM</th>
                      <th scope="col">BERT-score</th>
                      <th scope="col">BLEURT</th>
                      <th scope="col">AVG</th>
                    </tr>
                </thead>
                <tbody>
                  {evaluation.results.map(result => (
                      <tr key={result.id}>
                        <td key="td21">{result.sys}</td>
                        <td key="td22">{result.ble}</td>
                        <td key="td23">{result.rol}</td>
                        <td key="td24">{result.afm}</td>
                        <td key="td25">{result.bts}</td>
                        <td key="td26">{result.blt}</td>
                        <td key="td27">{result.avgs}</td>
                      </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
           
      <hr />

          <h3 className="font-weight-bold">Registration Details</h3>
            <p>You can register at <a href="https://my.chateval.org/accounts/login/">https://my.chateval.org/accounts/login/</a>, once registered, you will be able to download the datasets and readme documents as well as submit your results at <a href="#">https://chateval.org/dstc10</a></p>
            <hr />
            <p>Information about the tracks</p>
            <p>Any updates will be posted at the official website:</p>
            <p><a href="https://sites.google.com/dstc.community/dstc10/">https://sites.google.com/dstc.community/dstc10/</a></p>
          <hr />

          <h3 className="font-weight-bold">Contact</h3>
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
          <ul>
          <li><p>Deriu, J., Rodrigo, A., Otegi, A., Echegoyen, G., Rosset, S., Agirre, E., & Cieliebak, M. (2020). Survey on evaluation methods for dialogue systems. Artificial Intelligence Review, 1-56.</p></li>
          <li><p>Hori, C., & Hori, T. (2017). End-to-end conversation modeling track in DSTC6. arXiv preprint arXiv:1706.07440.</p></li>
          <li><p>Galley, M., Brockett, C., Gao, X., Gao, J., & Dolan, B. (2019). Grounded response generation task at dstc7. In AAAI Dialog System Technology Challenges Workshop.</p></li>
          <li><p>See, A., Roller, S., Kiela, D., & Weston, J. (2019, June). What makes a good conversation? How controllable attributes affect human judgments. In Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume 1 (Long and Short Papers) (pp. 1702-1723).</p></li>
          <li><p>Mehri, S., & Eskenazi, M. (2020). USR: An Unsupervised and Reference Free Evaluation Metric for Dialog Generation. arXiv preprint arXiv:2005.00456.</p></li>
          <li><p>Mehri, S., & Eskenazi, M. (2020, July). Unsupervised Evaluation of Interactive Dialog with DialoGPT. In Proceedings of the 21th Annual Meeting of the Special Interest Group on Discourse and Dialogue (pp. 225-235).</p></li>
          <li><p>Zhang C., D’Haro L.F., Banchs R.E., Friedrichs T., Li H. (2021) Deep AM-FM: Toolkit for Automatic Dialogue Evaluation. In Conversational Dialogue Systems for the Next Decade. Lecture Notes in Electrical Engineering, vol 704. Springer, Singapore.</p></li>
          <li><p>Zhao, T., Lala, D., & Kawahara, T. (2020, July). Designing Precise and Robust Dialogue Response Evaluators. In Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics (pp. 26-33).</p></li>
          <li><p>Gupta, P., Mehri, S., Zhao, T., Pavel, A., Eskenazi, M., & Bigham, J. P. (2019, September). Investigating Evaluation of Open-Domain Dialogue Systems With Human Generated Multiple References. In Proceedings of the 20th Annual SIGdial Meeting on Discourse and Dialogue (pp. 379-391).</p></li>
          <li><p>Huang, L., Ye, Z., Qin, J., Lin, L., & Liang, X. (2020, November). GRADE: Automatic Graph-Enhanced Coherence Metric for Evaluating Open-Domain Dialogue Systems. In Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP) (pp. 9230-9240).</p></li>
          <li><p>Merdivan, E., Singh, D., Hanke, S., Kropf, J., Holzinger, A., & Geist, M. (2020). Human annotated dialogues dataset for natural conversational agents. Applied Sciences, 10(3), 762.</p></li>
          </ul>
          <p>&nbsp;</p>

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
        id: 'automatic_evaluation',
        evalset: { 
          name: "Open-domain Dialogue Evaluation",
          description: "The leaderboard showing names of submissions and their corresponding Spearman Correlation Coefficients for each evaluation dataset."
        },
        results: [
          {
            id: 'amfm_result',
            sys: 'Deep AM-FM (baseline)',
            d6s: '0.105',
            d7s: '-0.033',
            pcs: '0.082',
            ups: '0.131',
            uts: '0.269',
            fts: '0.046',
            fcs: '0.121',
            zds: '0.198',
            zps: '0.236',
            gds: '-0.046',
            eds: '0.164',
            ecs: '0.094',
            ees: '-0.027',
            hus: '0.011',
            avgs: '0.097'
          }
        ]
      }
  ]

  const dialogue_moderation = [
      {
        id: 'dialogue_moderation',
        evalset: { 
          name: "Moderation of Open-domain Dialogue Systems",
          description: "The leaderboard showing names of submissions and their corresponding automatic evaluation scores."
        },
        results: [
          {
            id: 'dialogpt_result',
            sys: 'DialoGPT-base (baseline)',
            ble: '',
            rol: '',
            afm: '',
            bts: '',
            blt: '',
            avgs: ''
          }
        ]
      }
  ]

  return { automatic_evaluation, dialogue_moderation }
};

export default DSTC10;
