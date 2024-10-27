//import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { FormHandler } from './Components/FormHandler';
import { Cards } from './Components/Cards';
import { useState } from 'react';
import { useEffect } from 'react';
import { ImageListWithCounter } from './Components/ImageListWithCounter';
import { ButtonResult } from './Components/ButtonResult';
import { ButtonReset } from './Components/ButtonReset';

function App() {

  const [countObj, setCountObj] = useState(() => {
    const savedData = localStorage.getItem('voteData');
    return savedData ? JSON.parse(savedData) : [
      { id: "user1", count: 0 }, 
      { id: "user2", count: 0 }, 
      { id: "user3", count: 0 }, 
      { id: "user4", count: 0 }
    ];
  });

  useEffect(() => {
    localStorage.setItem('voteData', JSON.stringify(countObj));
  }, [countObj]);

  return (
    <div className="App">
      <Header/>  
      <FormHandler/>
      <Cards/>
      <div className='container'>
      <div className="row mt-5">
      <ImageListWithCounter id={'user1'} setCountObj={setCountObj} countObj={countObj}/>
      <ImageListWithCounter id={'user2'} setCountObj={setCountObj} countObj={countObj}/>
      <ImageListWithCounter id={'user3'} setCountObj={setCountObj} countObj={countObj}/>
      <ImageListWithCounter id={'user4'} setCountObj={setCountObj} countObj={countObj}/>
      </div>
      <div className='d-flex flex-column align-items-center mt-3'>
      <ButtonResult countObj={countObj}/>
      <ButtonReset setCountObj={setCountObj}/>
      </div>
    </div>
  </div>
  );
}

export default App;
