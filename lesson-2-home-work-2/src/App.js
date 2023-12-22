import './App.css';
import Card from './components/Card/Card';
import cources from './data/data';

function App() {
  return (
    <div className="App">
      <Card courcesData={cources} />
    </div>
  );
}

export default App;
