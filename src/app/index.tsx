import './styles/index.scss'
import { Main } from 'pages';
import { Header } from 'widgets';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Main />
      </main>
    </div>
  );
}

export default App;
