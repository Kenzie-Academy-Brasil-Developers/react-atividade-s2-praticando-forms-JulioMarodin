import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { useState } from 'react';
import UserData from './components/UserData';

function App() {
  const [isForm, setIsForm] = useState(true);
  const [data, setData] = useState({});

  return (
    <div className="App">
      <header className="App-header">
        {isForm ? (
          <Form setIsForm={setIsForm} setData={setData} />
        ) : (
          <UserData data={data} />
        )}
      </header>
    </div>
  );
}

export default App;
