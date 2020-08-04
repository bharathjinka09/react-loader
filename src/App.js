import React, {useState} from 'react';
import './App.css';

function App() {
  const [isLoading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    },3500)
  }

  return (
    <div className="App">
      <header className="App-header"><br />
        {
          isLoading ? 
          <div>
            <h4>Fetching data...</h4>
            <img alt='' style={{width:'200px',height:'200px'}} src='img/loader.gif' />
          </div> :
          <button className='button' onClick={fetchData}>
            Click to fetch data
          </button>
        }
      </header>
        
    </div>
  );
}

export default App;
