import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => (
  <div>
    <Header />
    <main role="main" className="container">
      <h1 className="mt-5"> ChatEval</h1>
      <span class="badge badge-primary">2IS&NLG 2018</span>
      <br /> <br />
      <p className="lead">ChatEval is a scientific framework for evaluating <mark>neural open domain chatbots</mark>. 
      Researchers can submit their trained models to effortlessly receive comparisons with baselines and prior work. 
      Since all evaluation code is <mark>open source</mark>, we ensure evaluation is performed in a <mark>standardized</mark> and transparent way. 
      Additionally, open source baseline models and an ever growing groups public evaluation sets are available for public use.</p>
      <a href="https://my.chateval.org/upload" className="btn btn-primary">Upload Model</a>
      <h1 className="mt-5">FAQ</h1>
      <h5 className="card-title"> How much does ChatEval cost? </h5>
      <p className="card-text">ChatEval is <mark>free</mark> for developers. It is actively developed by researchers at the NLP Group of the University of Pennyslvania.</p>
      <h5 className="card-title"> How is automatic chatbot evaluation performed? </h5>
      <p className="card-text">Read more about how automatic evaluation is done <a href="/about">here</a>.</p>
      <h5 className="card-title"> How was ChatEval built? </h5>
      <p className="card-text">The ChatEval webapp is built using Django and React (front-end) using Magnitude word embeddings format for evaluation. Our source code is available on <a href="https://github.com/chateval">Github</a>.</p>
      <h1 className="mt-5">References</h1>
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

export default Index;