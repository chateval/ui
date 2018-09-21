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
      <br />
      <div class="row">
        {props.evalsets.map(evalset => 
          <div className="col-md-3">
            <Card title={evalset.long_name} subtitle={"Supported ChatEval Dataset"} description={evalset.description} />
            <br />
          </div>
        )}
      </div>

      <h2 class="mt-4">ChatEval Baseline Models</h2>
      <br />
      <div class="row">
        {props.baselines.map(baseline => 
          <div className="col-md-3">
            <Card title={baseline.name} url={"/model?id="+baseline.model_id} link={"View"} subtitle={baseline.description} />
            <br />
          </div>
        )}
      </div>

      <h2 class="mt-4">Automated Evaluation Methods</h2>
      <br />
      <div class="row">
        {props.metrics.map(metric => 
          <div className="col-md-3">
            <Card title={metric.name} subtitle={"Metric"} description={metric.info} />
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
  const baselineRequest = await fetch('https://chateval.org/api/baselines');
  const baselineData = await baselineRequest.json();
  data.baselines = baselineData.baselines;

  const evalsetRequest = await fetch('https://chateval.org/api/evaluationdatasets');
  const evalsetData = await evalsetRequest.json();
  data.evalsets = evalsetData.evaluationdatasets;

  const metricRequest = await fetch('https://chateval.org/api/metrics');
  const metricData = await metricRequest.json();
  data.metrics = metricData.metrics;

  return data;
};

export default About;