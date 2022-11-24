import React, {useState} from 'react';
import Api from './components/Api';




export const App = () => {

 const [inputKeyword, setInputKeyword] = useState("");





  return (
    <>

      <div className="h-screen w-screen bg-gradient-to-r from-green-500 to-blue-500">
       <div className='flex flex-col items-center'>
          <h1 className="text-center mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Video-Fetching</h1>
          <input 
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-80 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            placeholder="Enter the keyword"
            onChange={(e) => {
            console.log(e.target.value);
            return setInputKeyword(e.target.value);
          }} type="text" />
       </div>
       <div> 
          <Api
          inputKeyword={inputKeyword}
          />
       </div>
      </div>
    </>
  );
}

export default App;
