import React, {useState} from 'react';
import Api from './components/Api';




export const App = () => {

 const [inputKeyword, setInputKeyword] = useState("");





  return (
    <>
      <div>
        <h1>Video-Fetching</h1>
        <div className='input-wrapper'>
          <p>enter the keyword</p>
          <input onChange={(e) => {
            console.log(e.target.value);
            return setInputKeyword(e.target.value);
          }} type="text" />

        </div>
        <Api
        inputKeyword={inputKeyword}
        />
      </div>
    </>
  );
}

export default App;
