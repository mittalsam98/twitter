import React, {useState,useEffect} from 'react';
import './App.css';
import {useForm} from 'react-hook-form'

function App() {
  const { register, handleSubmit, errors,reset } = useForm();
  const API_URL=process.env.URL || 'http://localhost:5000/mew';
  const [tweetss, setTweets] = useState([]);
  
  ////////////////////////// API CALL /////////////////////////////////
  const  getAPI=async ()=>{
    const mew=await fetch(API_URL)
                   .then((res)=>res.json())
                   .then(res=>{
                     console.log(res)
                     return res
                     });
                     console.log(mew);
                     setTweets(mew)
  }

  ///////////////////////////// submit //////////////////////////////////
  const onSubmit = data => { 
    console.log("onsubmit",data);
    reset();
    fetch(API_URL,{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        'content-type':'application/json'
      }
    }).then((res)=>res.json())
    .then(res=>{getAPI()});
   }


   ///////////////////////////// useEffect ////////////////////////////
   useEffect(() => {
      getAPI();
   },[])

  //  console.log("2 ",tweetss)
  //  console.log("3 ")

////////////////////////////// return function ///////////////////////
  return (
    <div className="App">
      <header className="App-header">
        A twitter clone to only tweets
      </header>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <label for='name'>Name</label><br />
        <input className='input' name="name" ref={register({required:true})} /><br />
        <label className='label' for='tweets'>Tweets</label><br />
      <textarea className='input' name="tweets" ref={register({ required: true })} /><br />

      {errors.exampleRequired && <span>This field is required</span>}

      <button className='button' type="submit">Submit</button>
   
    </form>
      {tweetss.map((info,i)=>{
        return(
          <div className='tweet' key={i}>
           <h2>{info.name}</h2>
           <p>{info.tweets}</p>
          </div>
        )
      }).reverse()}
    </div>
  );
}

export default App;
