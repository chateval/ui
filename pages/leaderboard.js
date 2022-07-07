import Header from '../components/Header';
import Footer from '../components/Footer';

const Leaderboard = () => (
  <div>
    <Header />
    <main role="main" className="container">
      <h1 className="mt-5 font-weight-bold">Leaderboard</h1>
      <p className="lead">Models Ranked by Evaluation Metric</p>
      <p><strong>Information Response Theory</strong></p>
      <table class="table">
        <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Model</th>
              <th scope="col">Score</th>
            </tr>
        </thead>
        <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>The Bird</td>
            </tr>
        </tbody>
      </table>
    </main>
    <Footer />
  </div>
);

export default Leaderboard;
