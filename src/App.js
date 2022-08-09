import logo from './logo.svg';
import Cards from './components/cards';
import {DATA_LIST} from './constant';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React Cards
      </header>
      <div className='Cards-flex'>
        {DATA_LIST.map((data) => <Cards emp={data}/>)}
      </div>
    </div>
  );
}

export default App;
