import './App.css';
import Card from './components/Card/Card';
import cources from './data/data';

function App() {
  return (
    <div className="App">
      {cources.map((course) => <Card key={course.id} courcesData={course}/>)}
      
    </div>
  );
}

export default App;
