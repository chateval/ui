import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import fetch from 'isomorphic-unfetch';

const About = (props) => (
  <div>
    <Header />
    <main role="main" class="container">
      <h1 class="mt-5">About Evaluation</h1>
      <p class="lead">Model responses are generated using an evaluation dataset of prompts and then uploaded to ChatEval. The responses are then 
      evaluated using a series of automatic evaluation metrics, and are compared against selected baseline/ground truth models (e.g. humans). </p>

      <h2 class="mt-4">Evaluation Datasets</h2>
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

      <h2 class="mt-4">ChatEval Baselines</h2>
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

      <h2 class="mt-4">Automated Evaluation Methods</h2>
      <p> The ChatEval Platform handles certain automated evaluations of chatbot responses. These metrics are documented <a href="https://github.com/chateval/evaluation">here</a>. 
      Models can be ranked according to a specific metric and viewed as a leaderboard.</p>
      <div class="row">
        {props.metrics.map(metric => 
          <div className="col-md-3">
            <Card title={metric.name} subtitle={"Metric"} description={metric.info} link={"View Source"} url={"https://github.com/chateval/evaluation"} />
            <br />
          </div>
        )}
      </div>
    </main>
    <Footer />
  </div>
);

About.getInitialProps = async function() {
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

export default About;