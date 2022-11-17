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
            <p>Click <a href="https://my.chateval.org/dstc10submit/">here</a> to submit.</p>
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

          <h3 className="font-weight-bold">Automatic Evaluation Leaderboard</h3>
          <br />    
          {this.props.automatic_evaluation.map(evaluation => (
            <div key={evaluation.id}>
              <h5 className="card-title"> {evaluation.evalset.name} </h5>
              <p> {evaluation.evalset.description} </p>
              <table className="table">
                <thead>
                    <tr>
                      <th scope="col">System</th>
                      <th scope="col">D6</th>
                      <th scope="col">D7</th>
                      <th scope="col">PC</th>
                      <th scope="col">UP</th>
                      <th scope="col">TP</th>
                      <th scope="col">FT</th>
                      <th scope="col">FC</th>
                      <th scope="col">ZD</th>
                      <th scope="col">ZP</th>
                      <th scope="col">GD</th>
                      <th scope="col">ED</th>
                      <th scope="col">EC</th>
                      <th scope="col">EE</th>
                      <th scope="col">HU</th>
                      <th scope="col">AVG</th>
                      <th scope="col">Rank</th>
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
                        <td key="td17">{result.rank}</td>
                      </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}


          <br />    
          {this.props.automatic_evaluation_test.map(evaluation => (
            <div key={evaluation.id}>
              <h5 className="card-title"> {evaluation.evalset.name} </h5>
              <p> {evaluation.evalset.description} </p>
              <table className="table">
                <thead>
                    <tr>
                      <th scope="col">System</th>
                      <th scope="col">JSALT</th>
                      <th scope="col">ESL</th>
                      <th scope="col">NCM</th>
                      <th scope="col">DSTC10-Topical</th>
                      <th scope="col">DSTC10-Persona</th>
                      <th scope="col">AVG</th>
                      <th scope="col">Rank</th>
                    </tr>
                </thead>
                <tbody>
                  {evaluation.results.map(result => (
                      <tr key={result.id}>
                        <td key="td30">{result.sys}</td>
                        <td key="td31">{result.jsalt}</td>
                        <td key="td32">{result.esl}</td>
                        <td key="td33">{result.ncm}</td>
                        <td key="td34">{result.dst}</td>
                        <td key="td35">{result.dsp}</td>
                        <td key="td36">{result.avg}</td>
                        <td key="td37">{result.rank}</td>
                      </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
      <p>
        More results for Task 1 can be found <a href="https://docs.google.com/spreadsheets/d/10yl4-tDFEroa_qZsC4Fv_NO2TWjHO31Xv847rWVhPQ8/edit?usp=sharing">here</a>
      </p>

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
                      <th scope="col">BERT-score</th>
                      <th scope="col">BLEURT</th>
                      <th scope="col">Win Ratio</th>
                    </tr>
                </thead>
                <tbody>
                  {evaluation.results.map(result => (
                      <tr key={result.id}>
                        <td key="td21">{result.sys}</td>
                        <td key="td22">{result.ble}</td>
                        <td key="td23">{result.rol}</td>
                        <td key="td25">{result.bts}</td>
                        <td key="td26">{result.blt}</td>
                        <td key="td27">{result.ratio}</td>
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
          name: "Open-domain Dialogue Evaluation (Development)",
          description: "The leaderboard shows names of submissions and their corresponding Spearman Correlation Coefficients for each development dataset."
        },
        results: [
          {
            id: 'am_result',
            sys: 'AM',
            d6s: '0.112',
            d7s: '0.016',
            pcs: '0.090',
            ups: '0.054',
            uts: '0.070',
            fts: '0.080',
            fcs: '0.165',
            zds: '0.054',
            zps: '0.246',
            gds: '0.150',
            eds: '0.015',
            ecs: '0.080',
            ees: '0.100',
            hus: '0.100',
            avgs: '0.095',
            rank: '21'
          },
          {
            id: 'fm_result',
            sys: 'FM',
            d6s: '0.062',
            d7s: '0.032',
            pcs: '0.091',
            ups: '0.151',
            uts: '0.188',
            fts: '0.080',
            fcs: '0.092',
            zds: '0.226',
            zps: '0.446',
            gds: '0.136',
            eds: '0.170',
            ecs: '0.072',
            ees: '0.050',
            hus: '0.097',
            avgs: '0.135',
            rank: '16'
          },
          {
            id: 'amfm_result',
            sys: 'AM-FM',
            d6s: '0.100',
            d7s: '0.027',
            pcs: '0.081',
            ups: '0.144',
            uts: '0.141',
            fts: '0.051',
            fcs: '0.112',
            zds: '0.223',
            zps: '0.468',
            gds: '0.177',
            eds: '0.155',
            ecs: '0.094',
            ees: '0.025',
            hus: '0.117',
            avgs: '0.137',
            rank: '15'
          },
          {
            id: 't1s1',
            sys: 'T1S1',
            d6s: '0.249',
            d7s: '0.076',
            pcs: '0.050',
            ups: '0.083',
            uts: '0.046',
            fts: '0.194',
            fcs: '0.358',
            zds: '0.146',
            zps: '0.123',
            gds: '0.040',
            eds: '0.085',
            ecs: '0.159',
            ees: '0.184',
            hus: '0.060',
            avgs: '0.132',
            rank: '17'
          },
          {
            id: 't1s2',
            sys: 'T1S2',
            d6s: '0.203',
            d7s: '0.099',
            pcs: '0.091',
            ups: '0.118',
            uts: '0.043',
            fts: '0.123',
            fcs: '0.151',
            zds: '0.187',
            zps: '0.385',
            gds: '0.158',
            eds: '0.355',
            ecs: '0.366',
            ees: '0.328',
            hus: '0.124',
            avgs: '0.195',
            rank: '14'
          },
          {
            id: 't1s3',
            sys: 'T1S3',
            d6s: '0.222',
            d7s: '0.073',
            pcs: '0.082',
            ups: '0.144',
            uts: '0.025',
            fts: '0.186',
            fcs: '0.187',
            zds: '0.219',
            zps: '0.414',
            gds: '0.183',
            eds: '0.361',
            ecs: '0.362',
            ees: '0.360',
            hus: '0.133',
            avgs: '0.211',
            rank: '13'
          },
          {
            id: 't1s4',
            sys: 'T1S4',
            d6s: '0.245',
            d7s: '0.340',
            pcs: '0.057',
            ups: '0.273',
            uts: '0.218',
            fts: '0.239',
            fcs: '0.269',
            zds: '0.369',
            zps: '0.552',
            gds: '0.568',
            eds: '0.363',
            ecs: '0.504',
            ees: '0.395',
            hus: '0.329',
            avgs: '0.337',
            rank: '05'
          },
          {
            id: 't1s5',
            sys: 'T1S5',
            d6s: '0.279',
            d7s: '0.349',
            pcs: '0.032',
            ups: '0.307',
            uts: '0.196',
            fts: '0.220',
            fcs: '0.321',
            zds: '0.349',
            zps: '0.512',
            gds: '0.504',
            eds: '0.236',
            ecs: '0.524',
            ees: '0.384',
            hus: '0.305',
            avgs: '0.323',
            rank: '06'
          },
          {
            id: 't2s1',
            sys: 'T2S1',
            d6s: '0.009',
            d7s: '0.215',
            pcs: '0.051',
            ups: '0.156',
            uts: '0.277',
            fts: '0.099',
            fcs: '0.269',
            zds: '0.205',
            zps: '0.217',
            gds: '0.021',
            eds: '0.026',
            ecs: '0.060',
            ees: '0.075',
            hus: '0.008',
            avgs: '0.120',
            rank: '20'
          },
          {
            id: 't2s2',
            sys: 'T2S2',
            d6s: '0.081',
            d7s: '0.198',
            pcs: '0.035',
            ups: '0.122',
            uts: '0.296',
            fts: '0.095',
            fcs: '0.252',
            zds: '0.210',
            zps: '0.242',
            gds: '0.028',
            eds: '0.035',
            ecs: '0.072',
            ees: '0.064',
            hus: '0.019',
            avgs: '0.125',
            rank: '19'
          },
          {
            id: 't3s1',
            sys: 'T3S1/T3S3',
            d6s: '0.481',
            d7s: '0.244',
            pcs: '0.068',
            ups: '0.252',
            uts: '0.224',
            fts: '0.147',
            fcs: '0.042',
            zds: '0.335',
            zps: '0.518',
            gds: '0.343',
            eds: '0.074',
            ecs: '0.332',
            ees: '0.175',
            hus: '0.292',
            avgs: '0.252',
            rank: '11'
          },
          {
            id: 't3s2',
            sys: 'T3S2/T3S5',
            d6s: '0.502',
            d7s: '0.260',
            pcs: '0.062',
            ups: '0.251',
            uts: '0.304',
            fts: '0.143',
            fcs: '0.045',
            zds: '0.317',
            zps: '0.500',
            gds: '0.355',
            eds: '0.035',
            ecs: '0.372',
            ees: '0.182',
            hus: '0.300',
            avgs: '0.259',
            rank: '09'
          },
          {
            id: 't3s4',
            sys: 'T3S4',
            d6s: '0.480',
            d7s: '0.258',
            pcs: '0.070',
            ups: '0.216',
            uts: '0.171',
            fts: '0.120',
            fcs: '0.057',
            zds: '0.331',
            zps: '0.502',
            gds: '0.382',
            eds: '0.112',
            ecs: '0.410',
            ees: '0.226',
            hus: '0.311',
            avgs: '0.260',
            rank: '08'
          },
          {
            id: 't4s1',
            sys: 'T4S1',
            d6s: '0.004',
            d7s: '0.007',
            pcs: '0.033',
            ups: '0.053',
            uts: '0.096',
            fts: '0.126',
            fcs: '0.273',
            zds: '0.056',
            zps: '0.049',
            gds: '0.047',
            eds: '0.021',
            ecs: '0.074',
            ees: '0.059',
            hus: '0.010',
            avgs: '0.065',
            rank: '23'
          },
          {
            id: 't4s2',
            sys: 'T4S2',
            d6s: '0.068',
            d7s: '0.017',
            pcs: '0.082',
            ups: '0.104',
            uts: '0.213',
            fts: '0.092',
            fcs: '0.067',
            zds: '0.113',
            zps: '0.188',
            gds: '0.068',
            eds: '0.146',
            ecs: '0.043',
            ees: '0.056',
            hus: '0.024',
            avgs: '0.092',
            rank: '22'
          },
          {
            id: 't4s3',
            sys: 'T4S3',
            d6s: '0.043',
            d7s: '0.004',
            pcs: '0.017',
            ups: '0.042',
            uts: '0.088',
            fts: '0.085',
            fcs: '0.109',
            zds: '0.044',
            zps: '0.004',
            gds: '0.019',
            eds: '0.068',
            ecs: '0.052',
            ees: '0.100',
            hus: '0.005',
            avgs: '0.049',
            rank: '24'
          },
          {
            id: 't4s5',
            sys: 'T4S5',
            d6s: '0.043',
            d7s: '0.121',
            pcs: '0.037',
            ups: '0.267',
            uts: '0.278',
            fts: '0.193',
            fcs: '0.059',
            zds: '0.199',
            zps: '0.052',
            gds: '0.114',
            eds: '0.199',
            ecs: '0.173',
            ees: '0.047',
            hus: '0.042',
            avgs: '0.130',
            rank: '18'
          },
          {
            id: 't5s1',
            sys: 'T5S1',
            d6s: '0.179',
            d7s: '0.325',
            pcs: '0.088',
            ups: '0.404',
            uts: '0.391',
            fts: '0.304',
            fcs: '0.469',
            zds: '0.480',
            zps: '0.613',
            gds: '0.633',
            eds: '0.334',
            ecs: '0.584',
            ees: '0.306',
            hus: '0.332',
            avgs: '0.389',
            rank: '04'
          },
          {
            id: 't6s1',
            sys: 'T6S1',
            d6s: '0.184',
            d7s: '0.342',
            pcs: '0.129',
            ups: '0.355',
            uts: '0.387',
            fts: '0.330',
            fcs: '0.493',
            zds: '0.530',
            zps: '0.642',
            gds: '0.614',
            eds: '0.300',
            ecs: '0.604',
            ees: '0.246',
            hus: '0.338',
            avgs: '0.392',
            rank: '03'
          },
          {
            id: 't7s1',
            sys: 'T7S1',
            d6s: '0.616',
            d7s: '0.313',
            pcs: '0.275',
            ups: '0.479',
            uts: '0.455',
            fts: '0.352',
            fcs: '0.774',
            zds: '0.545',
            zps: '0.764',
            gds: '0.789',
            eds: '0.644',
            ecs: '0.570',
            ees: '0.501',
            hus: '0.225',
            avgs: '0.522',
            rank: '01'
          },
          {
            id: 't8s1',
            sys: 'T8S1',
            d6s: '0.183',
            d7s: '0.341',
            pcs: '0.129',
            ups: '0.362',
            uts: '0.402',
            fts: '0.329',
            fcs: '0.493',
            zds: '0.528',
            zps: '0.646',
            gds: '0.608',
            eds: '0.301',
            ecs: '0.604',
            ees: '0.247',
            hus: '0.338',
            avgs: '0.394',
            rank: '02'
          },
          {
            id: 't9s1',
            sys: 'T9S1',
            d6s: '0.185',
            d7s: '0.332',
            pcs: '0.063',
            ups: '0.226',
            uts: '0.137',
            fts: '0.199',
            fcs: '0.403',
            zds: '0.287',
            zps: '0.557',
            gds: '0.467',
            eds: '0.419',
            ecs: '0.531',
            ees: '0.365',
            hus: '0.223',
            avgs: '0.314',
            rank: '07'
          },
        ]
      }
  ]

  const automatic_evaluation_test = [
      {
        id: 'automatic_evaluation_test',
        evalset: { 
          name: "Open-domain Dialogue Evaluation (Test)",
          description: "The leaderboard shows names of submissions and their corresponding Spearman Correlation Coefficients for each hidden test dataset."
        },
        results: [
          {
            id: 'am_result_test',
            sys: 'AM',
            jsalt: '0.011',
            esl: '0.032',
            ncm: '0.037',
            dst: '0.085',
            dsp: '0.076',
            avg: '0.066',
            rank: '33'
          },
          {
            id: 'fm_result_test',
            sys: 'FM',
            jsalt: '0.046',
            esl: '0.343',
            ncm: '0.162',
            dst: '0.171',
            dsp: '0.186',
            avg: '0.180',
            rank: '22'
          },
          {
            id: 'am_fm_result_test',
            sys: 'AM-FM',
            jsalt: '0.051',
            esl: '0.323',
            ncm: '0.165',
            dst: '0.175',
            dsp: '0.196',
            avg: '0.184',
            rank: '21'
          },
          {id: 't1s1', sys: 'T1S1', jsalt: '0.041', esl: '0.130', ncm: '0.049', dst: '0.049', dsp: '0.086', avg: '0.069', rank: '31'},
          {id: 't1s2', sys: 'T1S2', jsalt: '0.057', esl: '0.041', ncm: '0.053', dst: '0.041', dsp: '0.020', avg: '0.036', rank: '34'},
          {id: 't1s3', sys: 'T1S3', jsalt: '0.049', esl: '0.281', ncm: '0.025', dst: '0.067', dsp: '0.151', avg: '0.112', rank: '26'},
          {id: 't1s4', sys: 'T1S4', jsalt: '0.277', esl: '0.420', ncm: '0.299', dst: '0.213', dsp: '0.303', avg: '0.278', rank: '07'},
          {id: 't1s5', sys: 'T1S5', jsalt: '0.164', esl: '0.432', ncm: '0.262', dst: '0.192', dsp: '0.307', avg: '0.259', rank: '18'},
          {id: 't2s1', sys: 'T2S1', jsalt: '0.031', esl: '0.119', ncm: '0.014', dst: '0.100', dsp: '0.078', avg: '0.080', rank: '29'},
          {id: 't2s2', sys: 'T2S2', jsalt: '0.031', esl: '0.199', ncm: '0.020', dst: '0.109', dsp: '0.075', avg: '0.090', rank: '28'},
          {id: 't3s1', sys: 'T3S1', jsalt: '0.042', esl: '0.008', ncm: '0.016', dst: '0.018', dsp: '0.017', avg: '0.019', rank: '38'},
          {id: 't3s2', sys: 'T3S2', jsalt: '0.105', esl: '0.253', ncm: '0.183', dst: '0.120', dsp: '0.224', avg: '0.174', rank: '23'},
          {id: 't3s3', sys: 'T3S3', jsalt: '0.099', esl: '0.288', ncm: '0.221', dst: '0.146', dsp: '0.258', avg: '0.202', rank: '20'},
          {id: 't3s4', sys: 'T3S4', jsalt: '0.043', esl: '0.200', ncm: '0.174', dst: '0.133', dsp: '0.231', avg: '0.170', rank: '24'},
          {id: 't4s1', sys: 'T4S1', jsalt: '0.026', esl: '0.088', ncm: '0.036', dst: '0.010', dsp: '0.016', avg: '0.023', rank: '36'},
          {id: 't4s2', sys: 'T4S2', jsalt: '0.050', esl: '0.062', ncm: '0.028', dst: '0.075', dsp: '0.093', avg: '0.074', rank: '30'},
          {id: 't4s3', sys: 'T4S3', jsalt: '0.023', esl: '0.047', ncm: '0.065', dst: '0.083', dsp: '0.166', avg: '0.103', rank: '27'},
          {id: 't4s4', sys: 'T4S4', jsalt: '0.020', esl: '0.093', ncm: '0.035', dst: '0.022', dsp: '0.013', avg: '0.026', rank: '35'},
          {id: 't4s5', sys: 'T4S5', jsalt: '0.006', esl: '0.030', ncm: '0.082', dst: '0.041', dsp: '0.119', avg: '0.069', rank: '32'},
          {id: 't5s1', sys: 'T5S1', jsalt: '0.098', esl: '0.348', ncm: '0.269', dst: '0.225', dsp: '0.373', avg: '0.283', rank: '03'},
          {id: 't5s2', sys: 'T5S2', jsalt: '0.117', esl: '0.400', ncm: '0.296', dst: '0.237', dsp: '0.375', avg: '0.296', rank: '01'},
          {id: 't5s3', sys: 'T5S3', jsalt: '0.095', esl: '0.354', ncm: '0.271', dst: '0.227', dsp: '0.371', avg: '0.283', rank: '02'},
          {id: 't5s4', sys: 'T5S4', jsalt: '0.091', esl: '0.348', ncm: '0.269', dst: '0.220', dsp: '0.369', avg: '0.278', rank: '06'},
          {id: 't5s5', sys: 'T5S5', jsalt: '0.094', esl: '0.350', ncm: '0.270', dst: '0.225', dsp: '0.369', avg: '0.281', rank: '05'},
          {id: 't6s1', sys: 'T6S1', jsalt: '0.127', esl: '0.328', ncm: '0.265', dst: '0.193', dsp: '0.355', avg: '0.265', rank: '14'},
          {id: 't6s2', sys: 'T6S2', jsalt: '0.127', esl: '0.328', ncm: '0.265', dst: '0.200', dsp: '0.357', avg: '0.268', rank: '12'},
          {id: 't6s3', sys: 'T6S3', jsalt: '0.127', esl: '0.301', ncm: '0.251', dst: '0.200', dsp: '0.357', avg: '0.264', rank: '15'},
          {id: 't6s4', sys: 'T6S4', jsalt: '0.125', esl: '0.301', ncm: '0.251', dst: '0.189', dsp: '0.356', avg: '0.260', rank: '17'},
          {id: 't6s5', sys: 'T6S5', jsalt: '0.127', esl: '0.329', ncm: '0.266', dst: '0.200', dsp: '0.358', avg: '0.269', rank: '11'},
          {id: 't7s1', sys: 'T7S1', jsalt: '0.041', esl: '0.034', ncm: '0.020', dst: '0.014', dsp: '0.025', avg: '0.023', rank: '37'},
          {id: 't8s1', sys: 'T8S1', jsalt: '0.066', esl: '0.321', ncm: '0.256', dst: '0.204', dsp: '0.360', avg: '0.264', rank: '16'},
          {id: 't8s2', sys: 'T8S2', jsalt: '0.088', esl: '0.323', ncm: '0.256', dst: '0.224', dsp: '0.368', avg: '0.276', rank: '08'},
          {id: 't8s3', sys: 'T8S3', jsalt: '0.065', esl: '0.332', ncm: '0.249', dst: '0.205', dsp: '0.363', avg: '0.265', rank: '13'},
          {id: 't8s4', sys: 'T8S4', jsalt: '0.078', esl: '0.330', ncm: '0.249', dst: '0.222', dsp: '0.371', avg: '0.275', rank: '09'},
          {id: 't8s5', sys: 'T8S5', jsalt: '0.085', esl: '0.361', ncm: '0.255', dst: '0.228', dsp: '0.372', avg: '0.282', rank: '04'},
          {id: 't9s1', sys: 'T9S1', jsalt: '0.056', esl: '0.162', ncm: '0.117', dst: '0.132', dsp: '0.156', avg: '0.135', rank: '25'},
          {id: 't9s2', sys: 'T9S2', jsalt: '0.262', esl: '0.456', ncm: '0.191', dst: '0.174', dsp: '0.338', avg: '0.269', rank: '10'},
          {id: 't9s3', sys: 'T9S3', jsalt: '0.264', esl: '0.419', ncm: '0.138', dst: '0.155', dsp: '0.301', avg: '0.241', rank: '19'},
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
          {id: 'dialogpt_result', sys: 'DialoGPT-base (baseline)', ble: '0.008', rol: '0.072', bts: '0.832', blt: '-1.180', ratio:0.179},
          {id: 'blenderbot', sys: 'BlenderBot 2.0', ble: '0.009', rol: '0.097', bts: '0.836', blt: '-1.183', ratio:0.443},
          {id: 'gpt3', sys: 'GPT-3', ble: '0.008', rol: '0.065', bts: '0.831', blt: '-1.201',  ratio: 0.273},
        ]
      }
  ]

  return { automatic_evaluation, automatic_evaluation_test, dialogue_moderation }
};

export default DSTC10;
