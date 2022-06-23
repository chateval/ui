import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Header from '../components/Header';
import Footer from '../components/Footer';

const API_URL = process.env.API_URL;

class DSTC11 extends Component {
  render() {
    return (
      <div>
        <Header/>
        <main role="main" className="container">
          <h1 className="mt-5 font-weight-bold">DSTC11: Dialogue System Technology Challenge 11</h1>
          <h2 className="mt-5 font-weight-bold">Robust and Multilingual Automatic Evaluation Metrics for Open-Domain Dialogue Systems</h2>
            <br/>
            {/* <p>Click <a href="https://my.chateval.org/dstc11_data/">here</a> to download DSTC11 data.</p>
            <p>Click <a href="https://my.chateval.org/dstc11submit/">here</a> to submit.</p> */}
            <hr/>
          
          <br/>
          <h3 className="font-weight-bold">Task Overview</h3>
            <br/>
            <ul>
              <li><b>Track Details</b></li>
            </ul>
            <p style={{marginLeft: 60 + 'px'}} align='justify'>
              This track consists of two tasks which are explained in more detail below:
              <br/><br/>
              <ol>
                <li>Participants will develop effective automatic open-ended and multilingual dialogue evaluation metrics that perform similarly when evaluated over a new language.</li>
                <li>Participants will develop effective automatic open-ended dialogue evaluation metrics that perform robustly when evaluated over back-translated/paraphrased sentences in English.</li>
              </ol>
              For both tasks, proposed metrics are expected to show the following two important properties as indicated in (Deriu et al., 2019):
              <br/><br/>
              <ul>
                <li>Correlated to human judgments - the metrics should produce evaluation scores that well correlate to human judgments (scores) across multiple languages or alternative responses (i.e., back-translated or paraphrased).</li>
                <li>Explainable - the metrics should provide constructive and explicit feedback to the generative models in terms of the quality of their generated responses. For instance, if a generative model is contradicting itself, the evaluation metrics should signal such behavior to the generative models.</li>
              </ul>
              Participants can propose their own metric or optionally improve two baseline evaluation metrics: MDD-Eval (Zhang et al, 2021) or deep AM-FM (Zhang et al, 2020). A leaderboard in the ChatEval platform will be provided allowing participants to check their progress.
              <br/><br/>
              For each evaluation task, Spearman correlation will be computed to compare the proposed evaluation metrics against human judgments. A final average score will be calculated to rank the submitted evaluation metrics.
            </p>
            <hr/>

            <ul>
              <li><b>Provided datasets</b></li>
            </ul>
            <p style={{marginLeft: 60 + 'px'}} align='justify'>
              As development set, organizers will provide the following datasets (<a href="#annex-datasets">details in the dataset section</a>) identified during the DSTC10 Track 5 (Zhang et al, 2021), that sum up more than 35k turn-level human-annotations, which have been automatically translated to Spanish and Chinese, and back-translated both to English using MS Azure services:
              <br/><br/>
              <ul>
                <li><b>DSTC6 human evaluation data</b> (Hori et al., 2017)</li>
                <li><b>DSTC7 human evaluation data</b> (Galley et al., 2019)</li>
                <li><b>Persona-Chatlog dataset</b> (See et al., 2019)</li>
                <li><b>ChatEval dataset</b> (Sedoc et al., 2019)</li>
                <li><b>USR dataset</b> (Mehri & Eskenazi, 2020)</li>
                <li><b>FED dataset</b> (Mehri & Eskenazi, 2020)</li>
                <li><b>DSTC10 dataset</b> (Zhang et al., 2021)</li>
              </ul>
              This development data can help participants to check the multilingualism or robustness capabilities of their trained models in terms of correlations with human-annotations. Additional databases, not mentioned here, will be added when available to increase the size of the benchmarking.
              <br/><br/>
              Additionally, after the organizers' participation in the CHANEL@JSALT2020 workshop (Rudnicky et al., 2020) at John Hopkins University, they have automatically translated back-and-forth (using the same MS Azure translation service)a total of 19 well-known human-human dialogue <a href="https://github.com/CHANEL-JSALT-2020/datasets">datasets</a>:
              <br/><br/>
              <ul>
                <li><b>DBDC</b> (Higashinaka et al., 2016)</li>
                <li><b>CMU_DoG</b> (Zhou et al., 2018)</li>
                <li><b>Cornell Movie-Dialogs</b> (Danescu-Niculescu-Mizil & Lee, 2011)</li>
                <li><b>DailyDialog</b> (Li et al., 2017)</li>
                <li><b>DECODE</b> (Nie et al., 2020)</li>
                <li><b>EmotionLines</b> (Chen et al., 2018)</li>
                <li><b>EmpathicDialogues</b> (Rashkin et al., 2018)</li>
                <li><b>Holl-E</b> (Moghe et al., 2018)</li>
                <li><b>KvPI</b> (Song et al., 2020)</li>
                <li><b>MEENA</b> (Adiwardana et al., 2020)</li>
                <li><b>MELD</b> (Poria et al., 2019)</li>
                <li><b>MetalWOz</b> (Lee et al., 2019)</li>
                <li><b>Movie-DiC</b> (Banchs, 2012)</li>
                <li><b>PersonaChat</b> (Zhang et al., 2018)</li>
                <li><b>SentimentLIAR</b> (Upadhayay & Behzadan, 2020)</li>
                <li><b>Switchboard Coherence</b> (Cervone & Riccardi, 2020)</li>
                <li><b>Topical-Chat</b> (Gopalakrishnan et al., 2019)</li>
                <li><b>Wizard of Wikipedia</b> (Dinan et al., 2019)</li>
                <li><b>Wochat</b> (D'Haro et al., 2016)</li>
              </ul>
              The total amount of dialogues is 393k (approx. 3M turns). In addition, we will provide the same datasets translated into Chinese using the SotA Tencent MT system. These datasets will be provided to participants, together with automatic meta-data information (machine translation Quality Estimation (QE), toxicity, and sentiment analysis) for filtering and dialogue curation purposes, so the participants have a better reference of the dataset quality, being of great help for them to decide whether or not to use these translations/paraphrases in the training of their evaluation models, and optionally fine-tune multilingual pre-trained models allowing better performance on the proposed dialogue-oriented tasks.
              <br/><br/>
              Since the quality of the back-translated sentences can play an important role in estimating the metric scores. QE metric scores will be given to the participants using our QE system and other existing models (e.g., <a href="https://github.com/Unbabel/OpenKiwi">Openkiwi</a>). This information will be given to participants so they can optionally use it for discarding dialogues or turns that do not show high quality when training their metrics. Participants will be welcome to use the data and ideas from the MT field to propose QE metrics that can, optionally, be included to provide final scores. Finally, the organizers may provide new translated dialogue datasets to allow participants to create more robust and better-trained systems.
              <br/><br/>
              During the test phase, a new set of 2k turn-level manually curated multilingual corpus (Spanish and Chinese) together with their human-evaluation annotations will be provided to participants to test models for both tasks. This corpus will be manually checked to guarantee its quality and high correlation with the original dialogues. Besides, in order to check the generalization capabilities of the proposed metrics from the participant, the test data will include a new dataset of human-chatbot interactions and their annotations.
            </p>
            <hr/>

            <ul>
              <li><b>Subtask 1: Metrics for multilingual data</b></li>
            </ul>
            <p style={{marginLeft: 60 + 'px'}} align='justify'>
              In this task, the goal for participants is to propose effective automatic dialogue evaluation metrics that exhibit previously mentioned properties (section 2) and perform well on a multilingual setup (English, Spanish and Chinese). In concrete, participants will propose a single multilingual model obtaining high correlations with human-annotations when evaluated on multilingual dialogues (development set in section 2.1) and perform well on the hidden multilingual test set. Participants are expected to use pre-trained multilingual language models and train them to predict multidimensional quality metrics by using self-supervised techniques and optionally fine-tune their system over a subset of the development data.
              <br/><br/>
              Finally, participants will then evaluate their models over the development and test sets, and expect to show similar performance, in terms of correlations with human-annotations on the English, Spanish and Chinese utterances. (Note: only dev and test sets will have human-annotations, and only test sets will be manually translated or back-translated/paraphrased to guarantee the correlations with the original human-annotations on the English data).
              </p>
            <hr/>


            <ul>
              <li><b>Subtask 2: Robust metrics</b></li>
            </ul>
            <p style={{marginLeft: 60 + 'px'}} align='justify'>
              In this task, the goal for participants is to propose robust metrics for automatic evaluation of just English dialogues that exhibit previously mentioned properties (section 2) while being robust when dealing with back-translated/paraphrased English sentences. The expected performance must be on par with the correlations with human-annotations obtained over the original sentences. As robustness criteria proposed, back-translated/paraphrased sentences should have the same semantic meaning as the original sentence, but different wording.
              <br/><br/>
              Additionally, participants will have the opportunity of testing robustness over alternative machine translations that the organizers will provide. Finally, the influence on the metric will be also evaluated when providing the back-translated/paraphrased current turn sentences instead of the original ones, always along with their respective back-translated/paraphrased context.
              <br/><br/>
              During the test phase, hidden and manually curated back-translated test data will be provided to participants to evaluate their proposed metrics.
              </p>
            <hr/>

          <br/>
          <h3 className="font-weight-bold">Schedule</h3>
            <br/>
            <ul>
              <li><b>Training/Validation data release</b>: From November to December in 2022</li>
              <li><b>Test data release</b>: Middle of March in 2023</li>
              <li><b>Entry submission deadline</b>: Middle of March in 2023</li>
              <li><b>Submission of final results</b>: End of March in 2023</li>
              <li><b>Final result announcement</b>: Early of April in 2023</li>
              <li><b>Paper submission</b>: From March to May in 2023</li>
              <li><b>Workshop</b>: July, August or September in 2023</li>
            </ul>
            <hr/>
          
          <br/>
          <h3 className="font-weight-bold">Baselines and Data Description</h3>
            <br/>
            <p><a href="https://github.com/Mario-RC/dstc11_robust_multilingual_metrics">Track: Subtask 1 and Subtask 2</a></p>
            <hr/>
          
          <br/>
          <h3 className="font-weight-bold">Registration Details</h3>
            <br/>
            <p>You can register at <a href="https://my.chateval.org/accounts/login/">https://my.chateval.org/accounts/login/</a>, once registered, you will be able to download the datasets and readme documents as well as submit your results at <a href="#">https://chateval.org/dstc11</a></p>
            <p>Any updates and information about the tracks will be posted on the official website at <a href="https://dstc11.dstc.community/home/">https://dstc11.dstc.community/home/</a></p>
          <hr/>

          <br/>
          <h3 className="font-weight-bold">Organizers</h3>
          <br/>
          <ul>
            <li>Mario Rodr&iacute;guez-Cantelar (Universidad Polit&eacute;cnica de Madrid, Spain)</li>
            <li>Chen Zhang (National University of Singapore, Singapore)</li>
            <li>Chengguang Tang (Tencent AI Lab, China)</li>
            <li>Ke Shi (Tencent AI Lab, China)</li>
            <li>Jo&atilde;o Sedoc (New York University, USA)</li>
            <li>Luis F. D'Haro (Universidad Polit&eacute;cnica de Madrid, Spain)</li>
            <li>Alexander Rudnicky (Carnegie Mellon University, USA)</li>
          </ul>
          <hr/>

          <br/>
          <h3 className="font-weight-bold">Contact</h3>
          <br/>
          <p>If you have further questions regarding the data, please let us know by the following email address at <a href="mailto:dstc11-robust-multilingual-automatic-evaluation@googlegroups.com">dstc11-robust-multilingual-automatic-evaluation@googlegroups.com</a></p>
          <hr/>

          {/* <br/>
          <h3 className="font-weight-bold" id="annex-datasets">FAQ</h3>
            <br/>
            <ul>
              <li><p>Question/Answering</p></li>
            </ul>
            <hr/> */}

          <br/>
          <h3 className="font-weight-bold">References</h3>
            <br/>
            <ul>
              <li>Deriu, J., Rodrigo, A., Otegi, A., Echegoyen, G., Rosset, S., Agirre, E., & Cieliebak, M. (2020). Survey on evaluation methods for dialogue systems. Artificial Intelligence Review, 1-56.</li>
              <li>Zhang, C., D'Haro, L. F., Friedrichs, T., & Li, H. (2021). MDD-Eval: Self-Training on Augmented Data for Multi-Domain Dialogue Evaluation. arXiv preprint arXiv:2112.07194.</li>
              <li>Zhang, C., D'Haro, L. F., Banchs, R. E., Friedrichs, T., & Li, H. (2020). Deep AM-FM: Toolkit for Automatic Dialogue Evaluation. In Conversational Dialogue Systems for the Next Decade (pp. 53-69). Springer, Singapore.</li>
              <li>Zhang, C., Sadoc, J., D'Haro, L. F., Banchs, R., & Rudnicky, A. (2021). Automatic Evaluation and Moderation of Open-domain Dialogue Systems. arXiv preprint arXiv:2111.02110.</li>
              <li>Hori, C., & Hori, T. (2017). End-to-end conversation modeling track in DSTC6. arXiv preprint arXiv:1706.07440.</li>
              <li>Galley, M., Brockett, C., Gao, X., Gao, J., & Dolan, B. (2019). Grounded response generation task at dstc7. In AAAI Dialog System Technology Challenges Workshop.</li>
              <li>See, A., Roller, S., Kiela, D., & Weston, J. (2019). What makes a good conversation? how controllable attributes affect human judgments. arXiv preprint arXiv:1902.08654.</li>
              <li>Sedoc, J., Ippolito, D., Kirubarajan, A., Thirani, J., Ungar, L., & Callison-Burch, C. (2019, June). Chateval: A tool for chatbot evaluation. In Proceedings of the 2019 conference of the North American chapter of the association for computational linguistics (demonstrations) (pp. 60-65).</li>
              <li>Vinyals, O., & Le, Q. (2015). A neural conversational model. arXiv preprint arXiv:1506.05869.</li>
              <li>Lee, S., Lim, H., & Sedoc, J. (2020). An evaluation protocol for generative conversational systems. arXiv preprint arXiv:2010.12741.</li>
              <li>Mehri, S., & Eskenazi, M. (2020). USR: An Unsupervised and Reference Free Evaluation Metric for Dialog Generation. arXiv preprint arXiv:2005.00456.</li>
              <li>Mehri, S., & Eskenazi, M. (2020, July). Unsupervised Evaluation of Interactive Dialog with DialoGPT. In Proc. of the 21th Annual Meeting of the Special Interest Group on Discourse and Dialogue (pp. 225-235).</li>
              <li>Rudnicky, A., Banchs, R., D'Haro, L. F., Sedoc, J., Chen, Z., Rodríguez-Cantelar, M., Koh, A., & others. (2020). CHANEL-Metrics: Chat/Dialogue Modeling and Evaluation report. In 2020 Seventh Frederick Jelinek Memorial Summer Workshop.</li>
              <li>Higashinaka, R., Funakoshi, K., Kobayashi, Y., & Inaba, M. (2016, May). The dialogue breakdown detection challenge: Task description, datasets, and evaluation metrics. In Proceedings of the Tenth International Conference on Language Resources and Evaluation (LREC'16) (pp. 3146-3150).</li>
              <li>Zhou, K., Prabhumoye, S., & Black, A. W. (2018). A dataset for document grounded conversations. arXiv preprint arXiv:1809.07358.</li>
              <li>Danescu-Niculescu-Mizil, C., & Lee, L. (2011). Chameleons in imagined conversations: A new approach to understanding coordination of linguistic style in dialogs. arXiv preprint arXiv:1106.3077.</li>
              <li>Li, Y., Su, H., Shen, X., Li, W., Cao, Z., & Niu, S. (2017). Dailydialog: A manually labelled multi-turn dialogue dataset. arXiv preprint arXiv:1710.03957.</li>
              <li>Nie, Y., Williamson, M., Bansal, M., Kiela, D., & Weston, J. (2020). I like fish, especially dolphins: Addressing Contradictions in Dialogue Modeling. arXiv preprint arXiv:2012.13391.</li>
              <li>Chen, S. Y., Hsu, C. C., Kuo, C. C., & Ku, L. W. (2018). Emotionlines: An emotion corpus of multi-party conversations. arXiv preprint arXiv:1802.08379.</li>
              <li>Rashkin, H., Smith, E. M., Li, M., & Boureau, Y. L. (2018). Towards empathetic open-domain conversation models: A new benchmark and dataset. arXiv preprint arXiv:1811.00207.</li>
              <li>Moghe, N., Arora, S., Banerjee, S., & Khapra, M. M. (2018). Towards exploiting background knowledge for building conversation systems. arXiv preprint arXiv:1809.08205.</li>
              <li>Song, H., Wang, Y., Zhang, W. N., Zhao, Z., Liu, T., & Liu, X. (2020). Profile consistency identification for open-domain dialogue agents. arXiv preprint arXiv:2009.09680.</li>
              <li>Adiwardana, D., Luong, M. T., So, D. R., Hall, J., Fiedel, N., Thoppilan, R., ... & Le, Q. V. (2020). Towards a human-like open-domain chatbot. arXiv preprint arXiv:2001.09977.</li>
              <li>Poria, S., Hazarika, D., Majumder, N., Naik, G., Cambria, E., & Mihalcea, R. (2018). Meld: A multimodal multi-party dataset for emotion recognition in conversations. arXiv preprint arXiv:1810.02508.</li>
              <li>Lee, S., Schulz, H., Atkinson, A., Gao, J., Suleman, K., El Asri, L., ... & Li, X. (2019). Multi-domain task-completion dialog challenge. Dialog system technology challenges, 8(9).</li>
              <li>Banchs, R. E. (2012, July). Movie-DiC: a movie dialogue corpus for research and development. In Proceedings of the 50th Annual Meeting of the Association for Computational Linguistics (Volume 2: Short Papers) (pp. 203-207).</li>
              <li>Zhang, S., Dinan, E., Urbanek, J., Szlam, A., Kiela, D., & Weston, J. (2018). Personalizing dialogue agents: I have a dog, do you have pets too?. arXiv preprint arXiv:1801.07243.</li>
              <li>Upadhayay, B., & Behzadan, V. (2020, November). Sentimental LIAR: Extended Corpus and Deep Learning Models for Fake Claim Classification. In 2020 IEEE International Conference on Intelligence and Security Informatics (ISI) (pp. 1-6). IEEE.</li>
              <li>Cervone, A., & Riccardi, G. (2020). Is this dialogue coherent? learning from dialogue acts and entities. arXiv preprint arXiv:2006.10157.</li>
              <li>Gopalakrishnan, K., Hedayatnia, B., Chen, Q., Gottardi, A., Kwatra, S., Venkatesh, A., ... & AI, A. A. (2019, January). Topical-Chat: Towards Knowledge-Grounded Open-Domain Conversations. In INTERSPEECH (pp. 1891-1895).</li>
              <li>Dinan, E., Roller, S., Shuster, K., Fan, A., Auli, M., & Weston, J. (2018). Wizard of wikipedia: Knowledge-powered conversational agents. arXiv preprint arXiv:1811.01241.</li>
              <li>D'Haro, L. F., Shawar, B. A., & Yu, Z. (2016). REWOCHAT 2016–Shared task description report. In Proceedings of the workshop on collecting and generating resources for chatbots and conversational agents-development and evaluation (RE-WOCHAT) (p. 39).</li>
            </ul>

          <p>&nbsp;</p>

        </main>
        <Footer />
      </div>
    )
  }
}

export default DSTC11;
