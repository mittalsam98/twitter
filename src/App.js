import React from 'react';
import './App.css';
import {useForm} from 'react-hook-form'

function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const API_URL=process.env.URL || 'http://localhost:5000/mew'
  const onSubmit = data => { 
    console.log(data)
    fetch(API_URL,{
      method:'POST',a
      body:JSON.stringify(data),
      headers:{
        'content-type':'application/json'
      }
    })
   }
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
    </div>
  );
}

export default App;
