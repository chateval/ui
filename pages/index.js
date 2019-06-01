import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import fetch from 'isomorphic-unfetch';

const citation = `@InProceedings{W18-6709,
  author = "Sedoc, Jo{\~a}o and Ippolito, Daphne and Kirubarajan, Arun and Thirani, Jai and Ungar, Lyle and Callison-Burch, Chris",
  title = 	"ChatEval: A Tool for the Systematic Evaluation of Chatbots",
  booktitle = 	"Proceedings of the Workshop on Intelligent Interactive Systems and Language Generation (2IS{\&}NLG) ",
  year = 	"2018",
  publisher = 	"Association for Computational Linguistics",
  pages = 	"42--44",
  location = 	"Tilburg, the Netherlands",
  url = 	"http://aclweb.org/anthology/W18-6709"
}`;

const STYLE = {
    code: {
      'white-space': 'pre',
    },
};


const Index = (props) => (
  <div>
    <Header />
    <main role="main" className="container">
      <h1 className="mt-5 font-weight-bold"> ChatEval</h1>
      <p className="lead">ChatEval is a scientific framework for evaluating <mark>open domain chatbots</mark>. 
      Researchers can submit their trained models to effortlessly receive comparisons with baselines and prior work. 
      Since all evaluation code is <mark>open source</mark>, we ensure evaluation is performed in a standardized and transparent way. 
      Additionally, open source baseline models and an ever growing groups public evaluation sets are available for public use.</p>
      <a href="https://my.chateval.org/upload" className="btn btn-primary">Upload your method</a>
      <br/> <br/>
      <h2>FAQ</h2>
      <h5 className="card-title"> How much does ChatEval cost? </h5>
      <p className="card-text">ChatEval is currently <mark>free</mark> for academic researchers. It is actively developed by the NLP Group of the University of Pennyslvania.</p>
      <h5 className="card-title"> Is there an online demo video? </h5>
      <p className="card-text">You can find a video tutorial for ChatEval <a href="https://youtu.be/36rAoujxLAA">here</a>.</p>
      <h5 className="card-title"> How was ChatEval built? </h5>
      <p className="card-text">The ChatEval webapp is built using Django and React (front-end) using Magnitude word embeddings format for evaluation. Our source code is available on <a href="https://github.com/chateval">Github</a>.</p>
      <h5>What should I cite?</h5>
      <code style={STYLE.code}>{citation}</code>
      <script src="https://widget.flow.ai/w/ZjExYWZmM2UtOWY4OS00NDQ4LTk2ZDUtZGE5N2RhOTNmYzUwfDBiNGY0MTE4LTRkM2MtNGMxOS1iNjYxLWQ1ZGY1Zjk5ZTJjOQ==/flow-webclient-1.1.2.min.js"></script>
     <h1 class="mt-5 font-weight-bold">About Evaluation</h1>
      <p class="lead">Model responses are generated using an evaluation dataset of prompts and then uploaded to ChatEval. The responses are then 
      evaluated using a series of automatic evaluation metrics, and are compared against selected baseline/ground truth models (e.g. humans). </p>

      <h2 class="mt-4 font-weight-bold">Evaluation Datasets</h2>
      <p>ChatEval offers evaluation datasets consisting of prompts that uploaded chatbots are to respond to. Evaluation datasets are available
        to download for free and have corresponding baseline models. </p>
      <div class="row">
        {props.evalsets.map(evalset => 
          <div className="col-md-6">
            <Card title={evalset.long_name} subtitle={"Supported ChatEval Dataset"} description={evalset.description} link={"Download Dataset"} url={evalset.source} />
            <br />
          </div>
        )}
      </div>

      <h2 class="mt-4 font-weight-bold">ChatEval Baselines</h2>
      <p>
        ChatEval offers "ground-truth" baselines to compare uploaded models with. Baseline models range from human responders to established chatbot models.
        Baselines are handpicked and uploaded by the ChatEval Team.
      </p>
      <div class="row"> 
        {props.baselines.map(baseline => 
          <div className="col-md-4">
            <Card title={baseline.name} url={"/model?id="+baseline.model_id} link={"View Model"} subtitle={baseline.description} />
            <br />
          </div>
        )}
      </div>

      <h2 class="mt-4 font-weight-bold">Automated Evaluation Methods</h2>
      <p> The ChatEval Platform handles certain automated evaluations of chatbot responses. These metrics are documented <a href="https://github.com/chateval/evaluation">here</a>. 
      Models can be ranked according to a specific metric and viewed as a leaderboard.</p>
      <div class="row">
        {props.metrics.map(metric => 
          <div className="col-md-3">
            <Card title={metric.name} subtitle={"Metric"} description={metric.info} link={"View Source"} url={"https://raw.githubusercontent.com/chateval/evaluation/master/auto_eval_utils.py"} />
            <br />
          </div>
        )}
      </div>
      <h1 className="mt-5 font-weight-bold">References</h1>
      <p>
        Higashinaka, Ryuichiro, Kotaro Funakoshi, Yuka Kobayashi, and Michimasa Inaba. "The dialogue breakdown detection challenge: Task description, datasets, and evaluation metrics." In <i>LREC</i>. 2016.
      </p>
      <p>
        Liu, Chia-Wei, Ryan Lowe, Iulian Serban, Mike Noseworthy,Laurent Charlin, and Joelle Pineau. "How not to evaluate your dialogue system: An empirical study of unsupervised evaluation metrics for dialogue response generation." In <i>EMNLP</i>, pp. 2122–2132. Association for Computational Linguistics,  2016.
      </p>
      <p>
        Forgues, Gabriel, Joelle Pineau, Jean-Marie Larchevêque, and Réal Tremblay. "Bootstrapping dialog systems with word embeddings." In <i>NIPS, modern machine learning and natural language processing workshop</i>, vol. 2. 2014.
      </p>
      <p>
        Papineni, Kishore, Salim Roukos, Todd Ward, and Wei-Jing Zhu. "BLEU: a method for automatic evaluation of machine translation." In <i>Proceedings of the 40th annual meeting on association for computational linguistics</i>, pp. 311-318. Association for Computational Linguistics, 2002.
      </p>
      <p>
        Rus, Vasile, and Mihai Lintean. "A comparison of greedy and optimal assessment of natural language student input using word-to-word similarity metrics." In <i>Proceedings of the Seventh Workshop on Building Educational Applications Using NLP</i>, pp. 157-162. Association for Computational Linguistics, 2012.
      </p>
      <p>
        Tiedemann, Jörg. "News from OPUS-A collection of multilingual parallel corpora with tools and interfaces." In Recent advances in natural language processing, vol. 5, pp. 237-248. 2009.
      </p>
      <p>
        Vinyals, Oriol, and Quoc Le. "A neural conversational model." arXiv preprint arXiv:1506.05869 (2015).
      </p>
    </main>
    <Footer />
  </div>
);

Index.getInitialProps = async function() {
  let data = {};
  const baselineRequest = await fetch('https://api.chateval.org/api/baselines');
  const baselineData = await baselineRequest.json();
  data.baselines = baselineData.baselines;

  const evalsetRequest = await fetch('https://api.chateval.org/api/evaluationdatasets');
  const evalsetData = await evalsetRequest.json();
  data.evalsets = evalsetData.evaluationdatasets;

  const metricRequest = await fetch('https://api.chateval.org/api/metrics');
  const metricData = await metricRequest.json();
  data.metrics = metricData.metrics;

  return data;
};

export default Index;
