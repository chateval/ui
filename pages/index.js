import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => (
  <div>
    <Header />
    <main role="main" className="container">
      <h1 className="mt-5 font-weight-bold"> ChatEval</h1>
      <p className="lead">ChatEval is a scientific framework for evaluating <mark>open domain chatbots</mark>. 
      Researchers can submit their trained models to effortlessly receive comparisons with baselines and prior work. 
      Since all evaluation code is <mark>open source</mark>, we ensure evaluation is performed in a <mark>standardized</mark> and transparent way. 
      Additionally, open source baseline models and an ever growing groups public evaluation sets are available for public use.</p>
      <a href="https://my.chateval.org/upload" className="btn btn-primary">Upload Model</a>
      <br /> <br />
      <h5 className="card-title"> How much does ChatEval cost? </h5>
      <p className="card-text">ChatEval is <mark>free</mark> for developers. It is actively developed by researchers at the NLP Group of the University of Pennyslvania.</p>
      <h5 className="card-title"> How is automatic chatbot evaluation performed? </h5>
      <p className="card-text">Read more about how automatic evaluation is done <a href="/about">here</a>.</p>
      <h5 className="card-title"> How was ChatEval built? </h5>
      <p className="card-text">The ChatEval webapp is built using Django and React (front-end) using Magnitude word embeddings format for evaluation. Our source code is available on <a href="https://github.com/chateval">Github</a>.</p>
    </main>
    <Footer />
  </div>
);

export default Index;
