import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Header from '../components/Header';
import Footer from '../components/Footer';

const API_URL = process.env.API_URL;

class DSTC11 extends Component {
  render() {
    return (
      <div>
        <Header />
        <main role="main" className="container">
          <h1 className="mt-5 font-weight-bold">DSTC11: Dialogue System Technology Challenge 11</h1>
          <h2 className="mt-5 font-weight-bold">Robust and Multilingual Automatic Evaluation Metrics for Open-Domain Dialogue Systems</h2>
            {/* <br />
            <p>Click <a href="https://my.chateval.org/dstc11_data/">here</a> to download DSTC11 data.</p>
            <p>Click <a href="https://my.chateval.org/dstc11submit/">here</a> to submit.</p>
            <hr /> */}
          
          <h3 className="font-weight-bold">Task Overview</h3>
            <br />
            <ul>
              <li><b>Subtask 1: Metrics for Multilingual Data</b></li>
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
                  <li>ConvAI2-Eval (EC) (Huang et al., 2020)</li>
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
            <li>Training/Validation data release: From November to December in 2022</li>
            <li>Test data release: Middle of March in 2023</li>
            <li>Entry submission deadline: Middle of March in 2023</li>
            <li>Submission of final results: End of March in 2023</li>
            <li>Final result announcement: Early of April in 2023</li>
            <li>Paper submission: From March to May in 2023</li>
            <li>Workshop: July, August or September in 2023</li>
          </ul>
          <hr/>
          
          <h3 className="font-weight-bold">Baselines and Data Description</h3>
          <br />
          <p><a href="https://github.com/e0397123/dstc10_metric_track">Subtask 1: Automatic Open-domain Dialogue Evaluation</a></p>
          <p><a href="https://github.com/lfdharo/DSTC10_Track5_Toxicity">Subtask 2: Moderation of Open-domain Dialogue Systems</a></p>
          <hr/>

  <br />
           
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
            <li>Mario Rodr&eacute;guez-Cantelar (Universidad Polit&eacute;cnica de Madrid, Spain)</li>
            <li>Chen Zhang (National University of Singapore, Singapore)</li>
            <li>Jo&atilde;o Sedoc (New York University, USA)</li>
            <li>Luis F. D'Haro (Universidad Polit&eacute;cnica de Madrid, Spain)</li>
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

export default DSTC11;
