import Header from '../components/Header';
import Footer from '../components/Footer';
import fetch from 'isomorphic-unfetch';

const Model = (props) => (
  <div>
    <Header />
    <main role="main" class="container">
      <h1 class="mt-5"> {props.model.name}</h1>
      <p class="lead">{props.model.description}</p>
    </main>
    <Footer />
  </div>
);

Model.getInitialProps = async function(props) {
  const { query } = props;
  const modelRequest = await fetch('http://localhost:8000/api/model?id=' + query.id);
  const modelData = await modelRequest.json();
  return {model: modelData.model};
};

export default Model;