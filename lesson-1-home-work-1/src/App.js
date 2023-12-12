import './App.css';
import Button from './components/Button/Button'
import List from './components/List/List'
function App() {
  return (
    <div className="App">
      <h1>Hello, it's my list of articles:</h1>
      <div className='wrap'>
        <List />
        <Button />
      </div>

    </div>
  );
}

export default App;
