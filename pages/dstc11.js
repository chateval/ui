import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Header from '../components/Header';
import Footer from '../components/Footer';

const API_URL = process.env.API_URL;

const STYLE = {
  cell: {
    'text-align': "center",
    'vertical-align': "middle",
    'white-space': 'pre',
  },
  td: {
    'vertical-align': "middle"
  },
};

class DSTC11 extends Component {
  render() {
    return (
      <div>
        <Header/>
        <main role="main" className="container">
          <h1 className="mt-5 font-weight-bold">DSTC11: Dialogue System Technology Challenge 11</h1>
          <h2 className="mt-5 font-weight-bold">Track 4: Robust and Multilingual Automatic Evaluation Metrics for Open-Domain Dialogue Systems</h2>
            <br/>
            <p>Click <a href="https://forms.office.com/r/rWgHUW9C8q">here</a> to register for DSTC11.T4.<span style={{color : 'green'}}> (now available)</span></p>
            <p>Click <a href="https://my.chateval.org/dstc11_data/">here</a> to download DSTC11.T4 data.<span style={{color : 'green'}}> (now available)</span></p>
            <p>Click <a href="https://my.chateval.org/dstc11submit/">here</a> to submit your model.<span style={{color : 'green'}}> (now available)</span></p>
            <p>Click <a href="https://github.com/karthik19967829/DSTC11-Benchmark">here</a> to use the baseline model.<span style={{color : 'green'}}> (now available)</span></p>
            <hr/>
          
          <br/>
          <h3 className="font-weight-bold">Track Overview</h3>
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
              <br/><br/>
              For more information check the <a href="https://drive.google.com/file/d/1B177R4_DJZ-KHu4D-E9oRELVl0G9Duu0/view">Track Proposal</a>.
              <br/><br/>
              See the <a href="https://github.com/Mario-RC/dstc11_robust_multilingual_metrics">Track GitHub</a> for more details.
            </p>
            <hr/>

            <ul>
              <li><b>Task 1: Metrics for Multilingual Data</b></li>
            </ul>
            <p style={{marginLeft: 60 + 'px'}} align='justify'>
              In this task, the goal for participants is to propose effective automatic dialogue evaluation metrics that exhibit previously mentioned properties (section 2) and perform well on a multilingual setup (English, Spanish and Chinese). In concrete, participants will propose a single multilingual model obtaining high correlations with human-annotations when evaluated on multilingual dialogues (development set in section 2.1) and perform well on the hidden multilingual test set. Participants are expected to use pre-trained multilingual models and train them to predict multidimensional quality metrics by using self-supervised techniques and optionally fine-tune their system over a subset of the development data.
              <br/><br/>
              Finally, participants will then evaluate their models over the development and test sets, and expect to show similar performance, in terms of correlations with human-annotations on the English, Spanish and Chinese utterances. (Note: only dev and test sets will have human-annotations, and only test sets will be manually translated or back-translated/paraphrased to guarantee the correlations with the original human-annotations on the English data).
            </p>
            <hr/>

            <ul>
              <li><b>Task 2: Robust Metrics</b></li>
            </ul>
            <p style={{marginLeft: 60 + 'px'}} align='justify'>
              In this task, the goal for participants is to propose robust metrics for automatic evaluation of just English dialogues that exhibit previously mentioned properties (section 2) while being robust when dealing with back-translated/paraphrased English sentences. The expected performance must be on par with the correlations with human-annotations obtained over the original sentences. As robustness criteria proposed, back-translated/paraphrased sentences should have the same semantic meaning as the original sentence, but different wording.
              <br/><br/>
              Additionally, participants will have the opportunity of testing robustness over alternative machine translations that the organizers will provide. Finally, the influence on the metric will be also evaluated when providing the back-translated/paraphrased current turn sentences instead of the original ones, always along with their respective back-translated/paraphrased context.
              <br/><br/>
              During the test phase, hidden and manually curated back-translated test data will be provided to participants to evaluate their proposed metrics.
            </p>
            <hr/>

            <ul>
              <li id="provided-datasets"><b>Provided Datasets</b></li>
            </ul>
            <p style={{marginLeft: 60 + 'px'}} align='justify'>
            After the organizers' participation in the <a href="https://github.com/CHANEL-JSALT-2020/datasets">CHANEL@JSALT2020</a> workshop (Rudnicky et al., 2020) at John Hopkins University, they have automatically translated back-and-forth (using the same MS Azure translation service) a total of 18 well-known human-human dialogue datasets. These data sets will be used as training data. The total amount of dialogues is 393k (approx. 3M turns).
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
              As development set, organizers will provide the following datasets (details in the GitHub section "<a href="https://github.com/Mario-RC/dstc11_track4_robust_multilingual_metrics/blob/main/dstc11/track4-provided-datasets.md#annex-existing-datasets-for-benchmarking">Annex: Existing Datasets for Benchmarking</a>") identified during the <a href="https://chateval.org/dstc10">DSTC10 Track 5</a> (Zhang et al, 2021), that sum up more than 35k turn-level human-annotations, which have been automatically translated to Spanish and Chinese, and back-translated both to English using <a href="https://azure.microsoft.com/en-us/products/cognitive-services/translator/">MS Azure</a> services.
              <br/><br/>
              <ul>
                <li><b>CONVAI2-GRADE (CG)</b> (Huang et al., 2020)</li>
                <li><b>DAILYDIALOG-GRADE (DH)</b> (Huang et al., 2020)</li>
                <li><b>DAILYDIALOG-GUPTA (DG)</b> (Gupta et al., 2019)</li>
                <li><b>DAILYDIALOG-ZHAO (DZ)</b> (Zhao et al., 2020)</li>
                <li><b>DSTC7 (D7)</b> (Galley et al., 2019)</li>
                <li><b>EMPATHETIC-GRADE (EG)</b> (Huang et al., 2020)</li>
                <li><b>FED-DIAL (FD)</b> (Mehri & Eskenazi, 2020a)</li>
                <li><b>FED-TURN (FT)</b> (Mehri & Eskenazi, 2020a)</li>
                <li><b>HUMOD (HM)</b> (Merdivan et al., 2020)</li>
                <li><b>PERSONA-SEE (PS)</b> (See et al., 2019)</li>
                <li><b>PERSONA-USR (PU)</b> (Mehri & Eskenazi, 2020b)</li>
                <li><b>PERSONA-ZHAO (PZ)</b> (Zhao et al., 2020)</li>
                <li><b>TOPICAL-USR (TU)</b> (Mehri & Eskenazi, 2020b)</li>
                {/*
                <li><b>JSALT (JS)</b> (Rudnicky et al., 2020)</li>
                <li><b>CHATEVAL (CS)</b> (Sedoc et al., 2019)</li>
                <li><b>DSTC10 (D10)</b> (Zhang et al., 2021)</li>
                */}
              </ul>
              This development data can help participants to check the multilingualism or robustness capabilities of their trained models in terms of correlations with human-annotations. Additional databases, not mentioned here, will be added when available to increase the size of the benchmarking.
              <br/><br/>
              Moreover, the datasets provided by <a href="https://github.com/thu-coai">THU-COAI</a> group (Conversational AI groups from Tsinghua University) will be used, naming this set of data CDial. They contain open domain human-human dialogs. They are originally in Chinese and contain of 3,470 dialogs (approx. 130k turns).
              <br/><br/>
              <ul>
                <li><b>ECM</b> (Zhou et al., 2018)</li>
                <li><b>KdConv</b> (Zhou et al., 2020)</li>
                <li><b>LCCC</b> (Wang et al., 2020)</li>
              </ul>
              In addition, we will provide the same datasets translated into Chinese using the SotA <a href="https://www.tencentcloud.com/products/tmt">Tencent MT</a> Tencent MT system. These datasets will be provided to participants, together with automatic meta-data information (machine translation Quality Estimation (QE), toxicity, and sentiment analysis) for filtering and dialogue curation purposes, so the participants have a better reference of the dataset quality, being of great help for them to decide whether or not to use these translations/paraphrases in the training of their evaluation models, and optionally fine-tune multilingual pre-trained models allowing better performance on the proposed dialogue-oriented tasks.
              <br/><br/>
              Since the quality of the back-translated sentences can play an important role in estimating the metric scores. QE metric scores will be given to the participants using our QE system and other existing models (e.g., <a href="https://github.com/Unbabel/COMET">COMET</a> (Rei et al., 2020)). This information will be given to participants so they can optionally use it for discarding dialogues or turns that do not show high quality when training their metrics. Participants will be welcome to use the data and ideas from the MT field to propose QE metrics that can, optionally, be included to provide final scores. Finally, the organizers may provide new translated dialogue datasets to allow participants to create more robust and better-trained systems.
              <br/><br/>
              Regarding the paraphrases, all the original English sentences of each dataset will have multiple paraphrases, as well as annotations so that each participant can evaluate the quality of each paraphrase. The model used will be <a href="https://github.com/jsedoc/Parrot_Paraphraser">PARROT</a> (Damodaran P., 2021).
              <br/><br/>
              Additionally, ~3k random H-H turns (~1k dialogues) of CDial in Chinese were manually annotated by Tencent AI. Also, ~5k new H-C Chinese turns (~500 dialogues) were generated with three different SotA chatbots (Tencent's model, Microsoft's Xiaoice (Zhou et al., 2020) and Baidu's Plato (Bao et al., 2019)). Both turn-level and dialog-level annotations were manually annotated by Tencent AI.
              <br/><br/>
              During the test phase, a new set of 2k turn-level (~700 dialog-level) manually curated multilingual corpus (Spanish and Chinese) along with their turn-level and dialog-level human evaluation annotations will be provided to participants to test models for both tasks. This corpus will be manually checked to guarantee its quality and high correlation with the original dialogues.
              <br/><br/>
              Furthermore, in order to check the generalization capabilities of the proposed metrics from the participant, the test data will include a new dataset of human-chatbot interactions with ~2k turns (~60 dialogues) and the following dimensions (annotations) to evaluate:
              <br/><br/>
              <ul>
                <li>Turn-level: Relevant, Appropriateness and Content Richness.</li>
                <li>Dialogue-level: Overall, Coherence and Likeability/Engageness.</li>
              </ul>
            </p>
            <hr/>

            <ul>
              <li><b>Datasets Summary</b></li>
            </ul>
            <p style={{marginLeft: 60 + 'px'}} align='justify'>
              {this.props.provided_datasets_summary.map(datasets_table => (
                <div key={datasets_table.id}>
                  <h5 className="card-title"> {datasets_table.datasets.name} </h5>
                  <p> {datasets_table.datasets.description} </p>
                  <table className="table" style={STYLE.cell}>
                    <thead>
                      <tr>
                        <th scope="col">Datasets Name</th>
                        <th scope="col">CHANEL</th>
                        <th scope="col">DSTC10</th>
                        <th scope="col">CDIAL</th>
                      </tr>
                    </thead>
                    <tbody>
                      {datasets_table.info.map(info => (
                        <tr key={info.id}>
                          <td key="td1" style={STYLE.td}>{info.name}</td>
                          <td key="td2" style={STYLE.td}>{info.chanel}</td>
                          <td key="td3" style={STYLE.td}>{info.dstc10}</td>
                          <td key="td4" style={STYLE.td}>{info.cdial}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </p>
            <hr/>
             
            <ul>
              <li><b>Datasets Information</b></li>
            </ul>
            <p style={{marginLeft: 60 + 'px'}} align='justify'>
              {this.props.provided_datasets_chanel_informtaion.map(datasets_table => (
                <div key={datasets_table.id}>
                  <h5 className="card-title"> {datasets_table.datasets.name} </h5>
                  <p> {datasets_table.datasets.description} </p>
                  <table className="table" style={STYLE.cell}>
                    <thead>
                      <tr>
                        <th scope="col">CHANEL</th>
                        <th scope="col">Spanish<br/>Translation</th>
                        <th scope="col">Chinese<br/>Translation</th>
                        <th scope="col">English<br/>Translation</th>
                        <th scope="col">English<br/>Back-translation</th>
                        <th scope="col">Paraphrases</th>
                        <th scope="col">Sentiment<br/>Analysis</th>
                        <th scope="col">Content<br/>Moderate</th>
                        <th scope="col">Human<br/>Annotations</th>
                        <th scope="col">Annotation<br/>Granularity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {datasets_table.info.map(info => (
                        <tr key={info.id}>
                          <td key="td1" style={STYLE.td}>{info.name_dataset}</td>
                          <td key="td2" style={STYLE.td}>{info.spanish_translation}</td>
                          <td key="td3" style={STYLE.td}>{info.chinese_translation}</td>
                          <td key="td4" style={STYLE.td}>{info.english_translation}</td>
                          <td key="td5" style={STYLE.td}>{info.english_Back_translation}</td>
                          <td key="td6" style={STYLE.td}>{info.paraphrases}</td>
                          <td key="td7" style={STYLE.td}>{info.sentiment_analysis}</td>
                          <td key="td8" style={STYLE.td}>{info.content_moderate}</td>
                          <td key="td9" style={STYLE.td}>{info.human_annotations}</td>
                          <td key="td10" style={STYLE.td}>{info.annotation_granularity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
              {this.props.provided_datasets_dstc10_informtation.map(datasets_table => (
                <div key={datasets_table.id}>
                  <h5 className="card-title"> {datasets_table.datasets.name} </h5>
                  <p> {datasets_table.datasets.description} </p>
                  <table className="table" style={STYLE.cell}>
                    <thead>
                      <tr>
                        <th scope="col">DSTC10</th>
                        <th scope="col">Spanish<br/>Translation</th>
                        <th scope="col">Chinese<br/>Translation</th>
                        <th scope="col">English<br/>Translation</th>
                        <th scope="col">English<br/>Back-translation</th>
                        <th scope="col">Paraphrases</th>
                        <th scope="col">Sentiment<br/>Analysis</th>
                        <th scope="col">Content<br/>Moderate</th>
                        <th scope="col">Human<br/>Annotations</th>
                        <th scope="col">Annotation<br/>Granularity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {datasets_table.info.map(info => (
                        <tr key={info.id}>
                          <td key="td1" style={STYLE.td}>{info.name_dataset}</td>
                          <td key="td2" style={STYLE.td}>{info.spanish_translation}</td>
                          <td key="td3" style={STYLE.td}>{info.chinese_translation}</td>
                          <td key="td4" style={STYLE.td}>{info.english_translation}</td>
                          <td key="td5" style={STYLE.td}>{info.english_Back_translation}</td>
                          <td key="td6" style={STYLE.td}>{info.paraphrases}</td>
                          <td key="td7" style={STYLE.td}>{info.sentiment_analysis}</td>
                          <td key="td8" style={STYLE.td}>{info.content_moderate}</td>
                          <td key="td9" style={STYLE.td}>{info.human_annotations}</td>
                          <td key="td10" style={STYLE.td}>{info.annotation_granularity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
              {this.props.provided_datasets_cdial_information.map(datasets_table => (
                <div key={datasets_table.id}>
                  <h5 className="card-title"> {datasets_table.datasets.name} </h5>
                  <p> {datasets_table.datasets.description} </p>
                  <table className="table" style={STYLE.cell}>
                    <thead>
                      <tr>
                        <th scope="col">CDIAL</th>
                        <th scope="col">Spanish<br/>Translation</th>
                        <th scope="col">Chinese<br/>Translation</th>
                        <th scope="col">English<br/>Translation</th>
                        <th scope="col">English<br/>Back-translation</th>
                        <th scope="col">Paraphrases</th>
                        <th scope="col">Sentiment<br/>Analysis</th>
                        <th scope="col">Content<br/>Moderate</th>
                        <th scope="col">Human<br/>Annotations</th>
                      </tr>
                    </thead>
                    <tbody>
                      {datasets_table.info.map(info => (
                        <tr key={info.id}>
                          <td key="td1" style={STYLE.td}>{info.name_dataset}</td>
                          <td key="td2" style={STYLE.td}>{info.spanish_translation}</td>
                          <td key="td3" style={STYLE.td}>{info.chinese_translation}</td>
                          <td key="td4" style={STYLE.td}>{info.english_translation}</td>
                          <td key="td5" style={STYLE.td}>{info.english_Back_translation}</td>
                          <td key="td6" style={STYLE.td}>{info.paraphrases}</td>
                          <td key="td7" style={STYLE.td}>{info.sentiment_analysis}</td>
                          <td key="td8" style={STYLE.td}>{info.content_moderate}</td>
                          <td key="td9" style={STYLE.td}>{info.human_annotations}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </p>
            <hr/>

            {/* <ul>
              <li><b>Datasets Statistics</b></li>
            </ul>
            <p style={{marginLeft: 60 + 'px'}} align='justify'>
              {this.props.provided_datasets_chanel_statistics.map(datasets_table => (
                <div key={datasets_table.id}>
                  <h5 className="card-title"> {datasets_table.datasets.name} </h5>
                  <p> {datasets_table.datasets.description} </p>
                  <table className="table" style={STYLE.cell}>
                    <thead>
                      <tr>
                        <th scope="col">CHANEL</th>
                        <th scope="col">Spanish<br/>Translation</th>
                        <th scope="col">Chinese<br/>Translation</th>
                        <th scope="col">English<br/>Translation</th>
                        <th scope="col">English<br/>Back-translation</th>
                        <th scope="col">Paraphrases</th>
                        <th scope="col">Sentiment<br/>Analysis</th>
                        <th scope="col">Content<br/>Moderate</th>
                        <th scope="col">Human<br/>Annotations</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {datasets_table.info.map(info => (
                        <tr key={info.id}>
                          <td key="td1" style={STYLE.td}>{info.name_dataset}</td>
                          <td key="td2" style={STYLE.td}>{info.spanish_translation}</td>
                          <td key="td3" style={STYLE.td}>{info.chinese_translation}</td>
                          <td key="td4" style={STYLE.td}>{info.english_translation}</td>
                          <td key="td5" style={STYLE.td}>{info.english_Back_translation}</td>
                          <td key="td6" style={STYLE.td}>{info.paraphrases}</td>
                          <td key="td7" style={STYLE.td}>{info.sentiment_analysis}</td>
                          <td key="td8" style={STYLE.td}>{info.content_moderate}</td>
                          <td key="td9" style={STYLE.td}>{info.human_annotations}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </p>
            <hr/> */}

            <ul>
              <li><b>Data Format</b></li>
            </ul>
            <p style={{marginLeft: 60 + 'px'}} align='justify'>
                All data given follows the <a href="https://github.com/Mario-RC/dstc11_track4_robust_multilingual_metrics/blob/main/dstc11/track4-datasets-format.md">Data Formats</a> which provides guidelines on how to store, maintain and handle dialogue corpora.
            </p>
            <hr/>

            <ul>
              <li><b>Baseline Model</b></li>
            </ul>
            <p style={{marginLeft: 60 + 'px'}} align='justify'>
              The default choice is Deep AM-FM (Zhang et al, 2020) (used for DSTC-10 and previously). This model has been adapted to be able to evaluate multilingual datasets, as well as to work with paraphrased and backtranslated sentences.
              <br/><br/>
              This project has investigated more recent approaches, based on fine-tuned large language models. Zhang et al note that their approach may be limited due to domain specificity. On the other hand, LLMs are trained from large corpora that in priciple are less domain-dependent. This is an empirical question.
              <br/><br/>
              All information related to the baseline model, such as code and data, can be found in this <a href="https://github.com/karthik19967829/DSTC11-Benchmark">GitHub</a> repository.
            </p>
            <hr/>

            <ul>
              <li><b>Automatic Evaluation Leaderboard</b></li>
            </ul>
            <p style={{marginLeft: 60 + 'px'}} align='justify'>
              {/* <b>How will we rank all the submitted metrics in the leaderboard?</b>
              <br/><br/>
              During development phase
              <br/><br/>
              We will first average the Spearman correlation scores of the submitted metric within the dataset.
              Next, all the dataset-wise average Spearman correlation scores will be averaged across all the 14 datasets.
              The submitted metrics will be ranked based on the final single Spearman correlation score.
              During the final evaluation phase
              <br/><br/>
              We will adopt a weighted average approach to determine the final ranking of the submitted metrics based on their performance on the validation set as well as the hidden test set which will be released after the development phase. A high weightage will be given to the metrics' performance on the hidden test set.
              Note that it is not necessary to have a single metric score for all the annotated dialogue qualities. Besides high correlation with human judgements, we also encourage explainability of the metrics.
              <br/><br/> */}
              The leaderboard shows names of submissions and their corresponding Spearman Correlation Coefficients for each development dataset. The name of each column corresponds to an <a href="https://chateval.org/dstc11#provided-datasets">abbreviation</a> of the development datasets respectively.
              <br/><br/>
              All the results obtained by the baseline model are very similar, proving that the metric is multilingually adequate, as well as robust when working with paraphrases or backtranslations.
              <br/><br/>
              {this.props.multilingual_dev.map(evaluation => (
                <div key={evaluation.id}>
                  <h5 className="card-title"> {evaluation.evaldev.name} </h5>
                  <p> {evaluation.evaldev.description} </p>
                  <table className="table" style={STYLE.cell}>
                    <thead>
                        <tr>
                          <th scope="col">System</th>
                          <th scope="col">CG</th>
                          <th scope="col">DH</th>
                          <th scope="col">DG</th>
                          <th scope="col">DZ</th>
                          <th scope="col">D7</th>
                          <th scope="col">EG</th>
                          <th scope="col">FD</th>
                          <th scope="col">FT</th>
                          <th scope="col">HM</th>
                          <th scope="col">PS</th>
                          <th scope="col">PU</th>
                          <th scope="col">PZ</th>
                          <th scope="col">TU</th>
                          <th scope="col">AVG</th>
                        </tr>
                    </thead>
                    <tbody>
                      {evaluation.results.map(result => (
                          <tr key={result.id}>
                            <td key="td01" style={STYLE.td}>{result.sys}</td>
                            <td key="td02" style={STYLE.td}>{result.cg}</td>
                            <td key="td03" style={STYLE.td}>{result.dh}</td>
                            <td key="td04" style={STYLE.td}>{result.dg}</td>
                            <td key="td05" style={STYLE.td}>{result.dz}</td>
                            <td key="td06" style={STYLE.td}>{result.d7}</td>
                            <td key="td07" style={STYLE.td}>{result.eg}</td>
                            <td key="td08" style={STYLE.td}>{result.fd}</td>
                            <td key="td09" style={STYLE.td}>{result.ft}</td>
                            <td key="td10" style={STYLE.td}>{result.hm}</td>
                            <td key="td11" style={STYLE.td}>{result.ps}</td>
                            <td key="td12" style={STYLE.td}>{result.pu}</td>
                            <td key="td13" style={STYLE.td}>{result.pz}</td>
                            <td key="td14" style={STYLE.td}>{result.tu}</td>
                            <td key="td15" style={STYLE.td}>{result.avgs}</td>
                          </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
              {this.props.robust_dev.map(evaluation => (
                <div key={evaluation.id}>
                  <h5 className="card-title"> {evaluation.evaldev.name} </h5>
                  <p> {evaluation.evaldev.description} </p>
                  <table className="table" style={STYLE.cell}>
                    <thead>
                        <tr>
                          <th scope="col">System</th>
                          <th scope="col">CG</th>
                          <th scope="col">DH</th>
                          <th scope="col">DG</th>
                          <th scope="col">DZ</th>
                          <th scope="col">D7</th>
                          <th scope="col">EG</th>
                          <th scope="col">FD</th>
                          <th scope="col">FT</th>
                          <th scope="col">HM</th>
                          <th scope="col">PS</th>
                          <th scope="col">PU</th>
                          <th scope="col">PZ</th>
                          <th scope="col">TU</th>
                          <th scope="col">AVG</th>
                        </tr>
                    </thead>
                    <tbody>
                      {evaluation.results.map(result => (
                          <tr key={result.id}>
                            <td key="td01" style={STYLE.td}>{result.sys}</td>
                            <td key="td02" style={STYLE.td}>{result.cg}</td>
                            <td key="td03" style={STYLE.td}>{result.dh}</td>
                            <td key="td04" style={STYLE.td}>{result.dg}</td>
                            <td key="td05" style={STYLE.td}>{result.dz}</td>
                            <td key="td06" style={STYLE.td}>{result.d7}</td>
                            <td key="td07" style={STYLE.td}>{result.eg}</td>
                            <td key="td08" style={STYLE.td}>{result.fd}</td>
                            <td key="td09" style={STYLE.td}>{result.ft}</td>
                            <td key="td10" style={STYLE.td}>{result.hm}</td>
                            <td key="td11" style={STYLE.td}>{result.ps}</td>
                            <td key="td12" style={STYLE.td}>{result.pu}</td>
                            <td key="td13" style={STYLE.td}>{result.pz}</td>
                            <td key="td14" style={STYLE.td}>{result.tu}</td>
                            <td key="td15" style={STYLE.td}>{result.avgs}</td>
                          </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
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
          <h3 className="font-weight-bold">Registration Details</h3>
            <br/>
            <p>To become an official DSTC11 Track 4 participant, you must be registered at this <a href="https://forms.office.com/r/rWgHUW9C8q">Microsoft Form</a>. Once registered, you will be able to download the datasets and readme documents as well as submit your results at <a href="#">https://chateval.org/dstc11</a>.</p>
            <p>There must be only one team per laboratory or research group. The members of the same team must be under a single registration, that is, the team leader must register his entire team by giving their e-mail addresses in addition to his own.</p>
            <p>Any updates and information about the tracks will be posted on the <a href="https://dstc11.dstc.community/">DSTC11 official website</a>, or check the <a href="https://groups.google.com/a/dstc.community/g/list">DSTC Mailing List</a>.</p>
          <hr/>

          <br/>
          <h3 className="font-weight-bold">Submission Details</h3>
            <br/>
            <p>Before submitting your model, do not forget to <a href="https://my.chateval.org/accounts/signup/">Sign Up</a> on the ChatEval website. Only the team leader must register on ChatEval, with the same name and email address entered in the Microsoft Form. Once you have signed up, you can <a href="https://my.chateval.org/accounts/login/">Log In</a> and <a href="https://my.chateval.org/dstc11submit/">Submit</a> your models.</p>
            <p>You can create and submit a single model for both tasks, or a different model for each task.</p>
            <p>You can make as many submissions as you want, but only the last 5 submitted will be valid to participate in the competition. That is, only the last 5 models submitted in ChatEval will be tested and will count in the competition ranking. Only the models submitted by the team leader registered in the Microsoft Form will be considered and tested during the competition. More precisely, if you create a single model for both tasks, only the last 5 models will be taken into account. In case of making one model for each task, the last 5 models submitted for each task will be taken into account. Please specify clearly in the model name for which task the model is intended, or if it is intended for both tasks.</p>
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
          <p>If you have further questions regarding the data, please let us know by the following email address at <a href="mailto:dstc11-robust-multilingual-automatic-evaluation@googlegroups.com">dstc11-robust-multilingual-automatic-evaluation@googlegroups.com</a>.</p>
          <hr/>

          <br/>
          <h3 className="font-weight-bold">Acknowledgement</h3>
          <br/>
          <p>This research project is supported by the Comunidad de Madrid through the call Research Grants for Young Investigators from Universidad Politécnica de Madrid (GENIUS:APOYO-JOVENES-21-TAXTYC-32-K61X37).</p>
          <p>This work is supported by project BEWORD (PID2021-126061OB-C43) funded by MCIN/AEI/10.13039/501100011033 and, as appropriate, by “ERDF A way of making Europe”, by the “European Union”, and by Programa Propio - Proyectos Semilla: Universidad Politécnica de Madrid (VSEMILLA22LFHE).</p>
          <p>We gratefully acknowledge valuable efforts from Tencent AI Lab who supports Chinese translation and annotation of datasets by funding and infrastructure.</p>
          <p>Thanks to THU-CoAI (Conversational AI groups from Tsinghua University) for providing their Chinese datasets as part of the challenge data.</p>
          <p>Thanks to Unbabel for providing the COMET MTQE scores annotations as part of the challenge data. This contribution was supported by national funds through *Fundação para a Ciência e a Tecnologia* (FCT) with references PRT/BD/152198/2021 and UIDB/50021/2020, and by the P2020 program MAIA led by Unbabel (LISBOA-01-0247-FEDER-045909).</p>
          <p>We also want to give thanks to MS Azure services (especially to Irving Kwong) for their sponsorship to continue processing new datasets that could be interesting for the dialogue community.</p>
          <p>This research project is supported by the NYU ChatEval Team led by João Sedoc.</p>
          <p>This research project is supported in part by a grant from Amazon to Alexander Rudnicky, Carnegie Mellon University.</p>
          <p>Thanks to Karthik Ganesan, Sarik Ghazarian, James Hagerty, Zhang Chen and Alex Rudnicky for developing the baseline model as part of the challenge tasks.</p>
          <p>This work is supported by the European Commission through Project ASTOUND (101071191 — HORIZON-EIC-2021-PATHFINDERCHALLENGES-01). <img src="./static/img/Logo_EC.png" alt="Logo_EC" style={{width: 375 + 'px', height : 75 + 'px'}}/>
          </p>
          <hr/>

          <br/>
          <h3 className="font-weight-bold">FAQ</h3>
            <br/>
            <h5 className="card-title">How much does participate in this Track cost?</h5>
            <p className="card-text">This Track is currently <mark>free</mark> for everyone.</p>
            <hr/>

          <br/>
          <h3 className="font-weight-bold">References</h3>
            <br/>
            <ul>
              <li>Deriu, J., Rodrigo, A., Otegi, A., Echegoyen, G., Rosset, S., Agirre, E., & Cieliebak, M. (2020). Survey on evaluation methods for dialogue systems. Artificial Intelligence Review, 1-56.</li>
              <li>Zhang, C., D'Haro, L. F., Friedrichs, T., & Li, H. (2021). MDD-Eval: Self-Training on Augmented Data for Multi-Domain Dialogue Evaluation. arXiv preprint arXiv:2112.07194.</li>
              <li>Zhang, C., D'Haro, L. F., Banchs, R. E., Friedrichs, T., & Li, H. (2020). Deep AM-FM: Toolkit for Automatic Dialogue Evaluation. In Conversational Dialogue Systems for the Next Decade (pp. 53-69). Springer, Singapore.</li>
              <li>Zhang, C., Sadoc, J., D'Haro, L. F., Banchs, R., & Rudnicky, A. (2021). Automatic Evaluation and Moderation of Open-domain Dialogue Systems. arXiv preprint arXiv:2111.02110.</li>
              {/* <li>Hori, C., & Hori, T. (2017). End-to-end conversation modeling track in DSTC6. arXiv preprint arXiv:1706.07440.</li> */}
              <li>Huang, L., Ye, Z., Qin, J., Lin, L., & Liang, X. (2020, November). GRADE: Automatic Graph-Enhanced Coherence Metric for Evaluating Open-Domain Dialogue Systems. In Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP) (pp. 9230-9240).</li>
              <li>Gupta, P., Mehri, S., Zhao, T., Pavel, A., Eskenazi, M., & Bigham, J. P. (2019, September). Investigating Evaluation of Open-Domain Dialogue Systems With Human Generated Multiple References. In Proceedings of the 20th Annual SIGdial Meeting on Discourse and Dialogue (pp. 379-391).</li>
              <li>Zhao, T., Lala, D., & Kawahara, T. (2020, July). Designing Precise and Robust Dialogue Response Evaluators. In Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics (pp. 26-33).</li>
              <li>Galley, M., Brockett, C., Gao, X., Gao, J., & Dolan, B. (2019). Grounded response generation task at dstc7. In AAAI Dialog System Technology Challenges Workshop.</li>
              <li>Mehri, S., & Eskenazi, M. (2020, July). Unsupervised Evaluation of Interactive Dialog with DialoGPT. In Proceedings of the 21th Annual Meeting of the Special Interest Group on Discourse and Dialogue (pp. 225-235).</li>
              <li>Merdivan, E., Singh, D., Hanke, S., Kropf, J., Holzinger, A., & Geist, M. (2020). Human annotated dialogues dataset for natural conversational agents. Applied Sciences, 10(3), 762.</li>
              <li>See, A., Roller, S., Kiela, D., & Weston, J. (2019, June). What makes a good conversation? How controllable attributes affect human judgments. In Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume 1 (Long and Short Papers) (pp. 1702-1723).</li>
              <li>Mehri, S., & Eskenazi, M. (2020). USR: An Unsupervised and Reference Free Evaluation Metric for Dialog Generation. arXiv preprint arXiv:2005.00456.</li>
              <li>Rudnicky, A., Banchs, R., D'Haro, L. F., Sedoc, J., Chen, Z., Rodríguez-Cantelar, M., Koh, A., & others. (2020). CHANEL-Metrics: Chat/Dialogue Modeling and Evaluation report. In 2020 Seventh Frederick Jelinek Memorial Summer Workshop.</li>
              {/* <li>Sedoc, J., Ippolito, D., Kirubarajan, A., Thirani, J., Ungar, L., & Callison-Burch, C. (2019, June). Chateval: A tool for chatbot evaluation. In Proceedings of the 2019 conference of the North American chapter of the association for computational linguistics (demonstrations) (pp. 60-65).</li>
              <li>Vinyals, O., & Le, Q. (2015). A neural conversational model. arXiv preprint arXiv:1506.05869.</li>
              <li>Lee, S., Lim, H., & Sedoc, J. (2020). An evaluation protocol for generative conversational systems. arXiv preprint arXiv:2010.12741.</li> */}
              <li>Higashinaka, R., Funakoshi, K., Kobayashi, Y., & Inaba, M. (2016, May). The dialogue breakdown detection challenge: Task description, datasets, and evaluation metrics. In Proceedings of the Tenth International Conference on Language Resources and Evaluation (LREC'16) (pp. 3146-3150).</li>
              <li>Zhou, K., Prabhumoye, S., & Black, A. W. (2018). A dataset for document grounded conversations. arXiv preprint arXiv:1809.07358.</li>
              <li>Danescu-Niculescu-Mizil, C., & Lee, L. (2011). Chameleons in imagined conversations: A new approach to understanding coordination of linguistic style in dialogs. arXiv preprint arXiv:1106.3077.</li>
              <li>Li, Y., Su, H., Shen, X., Li, W., Cao, Z., & Niu, S. (2017). Dailydialog: A manually labelled multi-turn dialogue dataset. arXiv preprint arXiv:1710.03957.</li>
              <li>Nie, Y., Williamson, M., Bansal, M., Kiela, D., & Weston, J. (2020). I like fish, especially dolphins: Addressing Contradictions in Dialogue Modeling. arXiv preprint arXiv:2012.13391.</li>
              <li>Chen, S. Y., Hsu, C. C., Kuo, C. C., & Ku, L. W. (2018). Emotionlines: An emotion corpus of multi-party conversations. arXiv preprint arXiv:1802.08379.</li>
              <li>Rashkin, H., Smith, E. M., Li, M., & Boureau, Y. L. (2018). Towards empathetic open-domain conversation models: A new benchmark and dataset. arXiv preprint arXiv:1811.00207.</li>
              <li>Moghe, N., Arora, S., Banerjee, S., & Khapra, M. M. (2018). Towards exploiting background knowledge for building conversation systems. arXiv preprint arXiv:1809.08205.</li>
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
              <li>Zhou, H., Huang, M., Zhang, T., Zhu, X., & Liu, B. (2018, April). Emotional chatting machine: Emotional conversation generation with internal and external memory. In Proceedings of the AAAI Conference on Artificial Intelligence (Vol. 32, No. 1).</li>
              <li>Zhou, H., Zheng, C., Huang, K., Huang, M., & Zhu, X. (2020). Kdconv: A chinese multi-domain dialogue dataset towards multi-turn knowledge-driven conversation. arXiv preprint arXiv:2004.04100.</li>
              <li>Wang, Y., Ke, P., Zheng, Y., Huang, K., Jiang, Y., Zhu, X., & Huang, M. (2020, October). A large-scale chinese short-text conversation dataset. In CCF International Conference on Natural Language Processing and Chinese Computing (pp. 91-103). Springer, Cham.</li>
              <li>Rei, R., Stewart, C., Farinha, A. C., & Lavie, A. (2020). COMET: A neural framework for MT evaluation. arXiv preprint arXiv:2009.09025.</li>
              <li>Damodaran, P. (2021). Parrot: Paraphrase generation for NLU.</li>
              <li>Zhou, L., Gao, J., Li, D., & Shum, H. Y. (2020). The design and implementation of xiaoice, an empathetic social chatbot. Computational Linguistics, 46(1), 53-93.</li>
              <li>Bao, S., He, H., Wang, F., Wu, H., & Wang, H. (2019). Plato: Pre-trained dialogue generation model with discrete latent variable. arXiv preprint arXiv:1910.07931.</li>
            </ul>

          <p>&nbsp;</p>

        </main>
        <Footer />
      </div>
    )
  }
}

DSTC11.getInitialProps = async function() {

  const provided_datasets_summary = [
    {
      id: 'provided_datasets_summary',
      datasets: {
        name: "",
        description: ""
      },
      info: [
        {id: 'num_dataset', name: '# Datsets', chanel: '18', dstc10: '7', cdial: '3'},
        {id: 'language', name: 'Language', chanel: 'English, Spanish/Chinese,\nand English back-translation', dstc10: 'English, Spanish/Chinese,\nand English back-translation', cdial: 'Chinese, English,\nand Chinese back-translation'},
        {id: 'dialogues_type', name: 'Dialogues Type', chanel: 'Human-Human Open-Domain', dstc10: 'Human-Chatbot Open-Domain', cdial: 'Human-Human Open-Domain'},
        {id: 'num_dialogues_utterances', name: '# Dialogues/\nUtterances', chanel: '+ 390.000 / + 3.000.000', dstc10: '+ 18.000 / + 55.000', cdial: '+ 3.470 / +130.000'},
        {id: 'annotations', name: 'Annotations', chanel: 'Sentiment analysis and Toxicity', dstc10: 'Sentiment analysis and Toxicity\nTurn/dialogue level human scores', cdial: 'Turn/dialogue level human scores'},
        {id: 'task1_set', name: 'Task 1 Set', chanel: 'Public: Train', dstc10: 'Public: Dev, Test\nHidden: Automatic Translations', cdial: 'Public: Train/Dev/Test'},
        {id: 'task2_set', name: 'Task 2 Set', chanel: 'Public: Train', dstc10: 'Public: Dev, Test\nHidden: Manually back-translation/paraphrased', cdial: '—'},
      ]
    }
  ]

  const provided_datasets_chanel_informtaion = [
    {
      id: 'provided_datasets_chanel_informtaion',
      datasets: {
        name: "",
        description: "CHANEL dataset is Task 1 and Task 2 oriented. The source language is English."
      },
      info: [
        {id: 'dbdc_dataset',
        name_dataset: 'DBDC',
        spanish_translation: '✔',
        chinese_translation: '',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '',
        annotation_granularity: 'Turn-level'},
        {id: 'cmu_dog_dataset',
        name_dataset: 'CMU_DoG',
        spanish_translation: '✔',
        chinese_translation: '',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '',
        annotation_granularity: 'Turn-level'},
        {id: 'cornell_movie_dialogs_dataset',
        name_dataset: 'Cornell Movie-Dialogs',
        spanish_translation: '✔',
        chinese_translation: '',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '',
        annotation_granularity: 'Turn-level'},
        {id: 'dailydialog_dataset',
        name_dataset: 'DailyDialog',
        spanish_translation: '✔',
        chinese_translation: '✔',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '',
        annotation_granularity: 'Turn-level'},
        {id: 'decode_dataset',
        name_dataset: 'DECODE',
        spanish_translation: '✔',
        chinese_translation: '',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '',
        annotation_granularity: 'Turn-level'},
        {id: 'emotionlines_dataset',
        name_dataset: 'EmotionLines',
        spanish_translation: '✔',
        chinese_translation: '',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '',
        annotation_granularity: 'Turn-level'},
        {id: 'empathicdialogues_dataset',
        name_dataset: 'EmpathicDialogues',
        spanish_translation: '✔',
        chinese_translation: '✔',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '',
        annotation_granularity: 'Turn-level'},
        {id: 'holl_e_dataset',
        name_dataset: 'Holl-E',
        spanish_translation: '✔',
        chinese_translation: '',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '',
        annotation_granularity: 'Turn-level'},
        {id: 'meena_dataset',
        name_dataset: 'MEENA',
        spanish_translation: '✔',
        chinese_translation: '',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '',
        annotation_granularity: 'Turn-level'},
        {id: 'meld_dataset',
        name_dataset: 'MELD',
        spanish_translation: '✔',
        chinese_translation: '',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '',
        annotation_granularity: 'Turn-level'},
        {id: 'metalwoz_dataset',
        name_dataset: 'MetalWOz',
        spanish_translation: '✔',
        chinese_translation: '',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '',
        annotation_granularity: 'Turn-level'},
        {id: 'movie_dic_dataset',
        name_dataset: 'Movie-DiC',
        spanish_translation: '✔',
        chinese_translation: '',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '',
        annotation_granularity: 'Turn-level'},
        {id: 'personachat_dataset',
        name_dataset: 'PersonaChat',
        spanish_translation: '✔',
        chinese_translation: '✔',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '',
        annotation_granularity: 'Turn-level'},
        {id: 'sentimentliar_dataset',
        name_dataset: 'SentimentLIAR',
        spanish_translation: '✔',
        chinese_translation: '',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '',
        annotation_granularity: 'Turn-level'},
        {id: 'switchboard_coherence_dataset',
        name_dataset: 'Switchboard Coherence',
        spanish_translation: '✔',
        chinese_translation: '',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '',
        annotation_granularity: 'Turn-level'},
        {id: 'topical_chat_dataset',
        name_dataset: 'Topical-Chat',
        spanish_translation: '✔',
        chinese_translation: '✔',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '',
        annotation_granularity: 'Turn-level'},
        {id: 'wizard_of_wikipedia_dataset',
        name_dataset: 'Wizard of Wikipedia',
        spanish_translation: '✔',
        chinese_translation: '✔',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '',
        annotation_granularity: 'Turn-level'},
        {id: 'wochat_dataset',
        name_dataset: 'WOCHAT',
        spanish_translation: '✔',
        chinese_translation: '',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '',
        annotation_granularity: 'Turn-level'},
      ]
    }
  ]

  const provided_datasets_dstc10_informtation = [
    {
      id: 'provided_datasets_dstc10_informtation',
      datasets: {
        name: "",
        description: "DSTC10 dataset is Task 1 and Task 2 oriented. The source language is English."
      },
      info: [
        {id: 'convai-grade_dataset',
        name_dataset: 'CONVAI2-GRADE (CG)',
        spanish_translation: '✔',
        chinese_translation: '✔',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '✔',
        annotation_granularity: 'Turn-level'},
        {id: 'dailydialog-grade_dataset',
        name_dataset: 'DAILYDIALOG-GRADE (DH)',
        spanish_translation: '✔',
        chinese_translation: '✔',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '✔',
        annotation_granularity: 'Turn-level'},
        {id: 'dailydialog-gupta_dataset',
        name_dataset: 'DAILYDIALOG-GUPTA (DG)',
        spanish_translation: '✔',
        chinese_translation: '✔',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '✔',
        annotation_granularity: 'Turn-level'},
        {id: 'dailydialog-zhao_dataset',
        name_dataset: 'DAILYDIALOG-ZHAO (DZ)',
        spanish_translation: '✔',
        chinese_translation: '✔',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '✔',
        annotation_granularity: 'Turn-level'},
        {id: 'dstc7_dataset',
        name_dataset: 'DSTC7 (D7)',
        spanish_translation: '✔',
        chinese_translation: '✔',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '✔',
        annotation_granularity: 'Turn-level'},
        {id: 'empathetic-grade_dataset',
        name_dataset: 'EMPATHETIC-GRADE (EG)',
        spanish_translation: '✔',
        chinese_translation: '✔',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '✔',
        annotation_granularity: 'Turn-level'},
        {id: 'fed-dial_dataset',
        name_dataset: 'FED-DIAL (FD)',
        spanish_translation: '✔',
        chinese_translation: '✔',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '✔',
        annotation_granularity: 'Dialogue-level'},
        {id: 'fed-turn_dataset',
        name_dataset: 'FED-TURN (FT)',
        spanish_translation: '✔',
        chinese_translation: '✔',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '✔',
        annotation_granularity: 'Turn-level'},
        {id: 'humod_dataset',
        name_dataset: 'HUMOD (HU)',
        spanish_translation: '✔',
        chinese_translation: '✔',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '✔',
        annotation_granularity: 'Turn-level'},
        {id: 'persona-see_dataset',
        name_dataset: 'PERSONA-SEE (PS)',
        spanish_translation: '✔',
        chinese_translation: '✔',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '✔',
        annotation_granularity: 'Dialogue-level'},
        {id: 'persona-usr_dataset',
        name_dataset: 'PERSONA-USR (PU)',
        spanish_translation: '✔',
        chinese_translation: '✔',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '✔',
        annotation_granularity: 'Turn-level'},
        {id: 'persona-zhao_dataset',
        name_dataset: 'PERSONA-ZHAO (PZ)',
        spanish_translation: '✔',
        chinese_translation: '✔',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '✔',
        annotation_granularity: 'Turn-level'},
        {id: 'topical-usr_dataset',
        name_dataset: 'TOPICAL-USR (TU)',
        spanish_translation: '✔',
        chinese_translation: '✔',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: '✔',
        annotation_granularity: 'Turn-level'},
      ]
    }
  ]

  const provided_datasets_cdial_information = [
    {
      id: 'provided_datasets_cdial_information',
      datasets: {
        name: "",
        description: "CDIAL dataset is Task 1 oriented. The source language is Chinese."
      },
      info: [
        {id: 'ecm_dataset',
        name_dataset: 'ECM',
        spanish_translation: '',
        chinese_translation: '',
        english_translation: '✔',
        english_Back_translation: '',
        paraphrases: '',
        sentiment_analysis: '',
        content_moderate: '',
        human_annotations: '✔'},
        {id: 'kdconv_dataset',
        name_dataset: 'KDCONV',
        spanish_translation: '',
        chinese_translation: '',
        english_translation: '✔',
        english_Back_translation: '',
        paraphrases: '',
        sentiment_analysis: '',
        content_moderate: '',
        human_annotations: '✔'},
        {id: 'lccc_dataset',
        name_dataset: 'LCCC',
        spanish_translation: '',
        chinese_translation: '',
        english_translation: '✔',
        english_Back_translation: '',
        paraphrases: '',
        sentiment_analysis: '',
        content_moderate: '',
        human_annotations: '✔'},
      ]
    }
  ]

  const provided_datasets_chanel_statistics = [
    {
      id: 'provided_datasets_chanel_statistics',
      datasets: {
        name: "",
        description: "CHANEL dataset is Task 1 and Task 2 oriented. The source language is English."
      },
      info: [
        {id: 'dbdc_dataset',
        name_dataset: 'DBDC',
        spanish_translation: '✔',
        chinese_translation: '',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: ''},
        {id: 'cmu_dog_dataset',
        name_dataset: 'CMU_DoG',
        spanish_translation: '✔',
        chinese_translation: '',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: ''},
        {id: 'cornell_movie_dialogs_dataset',
        name_dataset: 'Cornell Movie-Dialogs',
        spanish_translation: '✔',
        chinese_translation: '',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: ''},
        {id: 'dailydialog_dataset',
        name_dataset: 'DailyDialog',
        spanish_translation: '✔',
        chinese_translation: '✔',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: ''},
        {id: 'decode_dataset',
        name_dataset: 'DECODE',
        spanish_translation: '✔',
        chinese_translation: '',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: ''},
        {id: 'emotionlines_dataset',
        name_dataset: 'EmotionLines',
        spanish_translation: '✔',
        chinese_translation: '',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: ''},
        {id: 'empathicdialogues_dataset',
        name_dataset: 'EmpathicDialogues',
        spanish_translation: '✔',
        chinese_translation: '✔',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: ''},
        {id: 'holl_e_dataset',
        name_dataset: 'Holl-E',
        spanish_translation: '✔',
        chinese_translation: '',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: ''},
        {id: 'meena_dataset',
        name_dataset: 'MEENA',
        spanish_translation: '✔',
        chinese_translation: '',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: ''},
        {id: 'meld_dataset',
        name_dataset: 'MELD',
        spanish_translation: '✔',
        chinese_translation: '',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: ''},
        {id: 'metalwoz_dataset',
        name_dataset: 'MetalWOz',
        spanish_translation: '✔',
        chinese_translation: '',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: ''},
        {id: 'movie_dic_dataset',
        name_dataset: 'Movie-DiC',
        spanish_translation: '✔',
        chinese_translation: '',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: ''},
        {id: 'personachat_dataset',
        name_dataset: 'PersonaChat',
        spanish_translation: '✔',
        chinese_translation: '✔',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: ''},
        {id: 'sentimentliar_dataset',
        name_dataset: 'SentimentLIAR',
        spanish_translation: '✔',
        chinese_translation: '',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: ''},
        {id: 'switchboard_coherence_dataset',
        name_dataset: 'Switchboard Coherence',
        spanish_translation: '✔',
        chinese_translation: '',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: ''},
        {id: 'topical_chat_dataset',
        name_dataset: 'Topical-Chat',
        spanish_translation: '✔',
        chinese_translation: '✔',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: ''},
        {id: 'wizard_of_wikipedia_dataset',
        name_dataset: 'Wizard of Wikipedia',
        spanish_translation: '✔',
        chinese_translation: '✔',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: ''},
        {id: 'wochat_dataset',
        name_dataset: 'WOCHAT',
        spanish_translation: '✔',
        chinese_translation: '',
        english_translation: '',
        english_Back_translation: '✔',
        paraphrases: '✔',
        sentiment_analysis: '✔',
        content_moderate: '✔',
        human_annotations: ''},
      ]
    }
  ]

  const multilingual_dev= [
    {
      id: 'multilingual_dev',
      evaldev: { 
        name: "Task 1: Metrics for Multilingual Data (development)",
        description: ""
      },
      results: [
        {
          id: 'en_result',
          sys: 'AM-FM EN',
          cg: '0.3373',
          dh: '0.0916',
          dg: '0.2811',
          dz: '0.1433',
          d7: '0.2469',
          eg: '0.2548',
          fd: '0.1269',
          ft: '0.0264',
          hm: '0.1258',
          ps: '0.0262',
          pu: '0.0823',
          pz: '0.4489',
          tu: '0.1149',
          avgs: '0.1774'
        },
        {
          id: 'es_result',
          sys: 'AM-FM ES',
          cg: '0.3094',
          dh: '0.1053',
          dg: '0.2146',
          dz: '0.1170',
          d7: '0.2317',
          eg: '0.2001',
          fd: '0.1172',
          ft: '-0.0120',
          hm: '0.1019',
          ps: '0.0236',
          pu: '0.0634',
          pz: '0.4118',
          tu: '0.1086',
          avgs: '0.1551'
        },
        {
          id: 'zh_result',
          sys: 'AM-FM ZH',
          cg: '0.2989',
          dh: '0.0873',
          dg: '0.2382',
          dz: '0.1391',
          d7: '0.2206',
          eg: '0.2115',
          fd: '0.0819',
          ft: '-0.0254',
          hm: '0.0990',
          ps: '0.0198',
          pu: '0.0849',
          pz: '0.3821',
          tu: '0.0849',
          avgs: '0.1518'
        },
      ]
    }
  ]

  const robust_dev= [
    {
      id: 'robust_dev',
      evaldev: { 
        name: "Task 2: Robust Metrics (development)",
        description: ""
      },
      results: [
        {
          id: 'en_result',
          sys: 'AM-FM EN',
          cg: '0.3373',
          dh: '0.0916',
          dg: '0.2811',
          dz: '0.1433',
          d7: '0.2469',
          eg: '0.2548',
          fd: '0.1269',
          ft: '0.0264',
          hm: '0.1258',
          ps: '0.0262',
          pu: '0.0823',
          pz: '0.4489',
          tu: '0.1149',
          avgs: '0.1774'
        },
        {
          id: 'ro_result',
          sys: 'AM-FM PAR',
          cg: '0.2842',
          dh: '0.0512',
          dg: '0.2879',
          dz: '0.1356',
          d7: '0.0374',
          eg: '0.2452',
          fd: '0.1243',
          ft: '-0.0039',
          hm: '0.1080',
          ps: '0.0192',
          pu: '0.0730',
          pz: '0.4241',
          tu: '0.0872',
          avgs: '0.1447'
        },
      ]
    }
  ]

  return { provided_datasets_summary, provided_datasets_chanel_informtaion, provided_datasets_dstc10_informtation, provided_datasets_cdial_information, provided_datasets_chanel_statistics, multilingual_dev, robust_dev }

};

export default DSTC11;