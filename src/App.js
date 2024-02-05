import { useEffect, useState } from 'react';
import './App.css';

function App() {


const[quoteInfo, setQuoteInfo]=useState({})
useEffect(()=>{
  getQuote();
},[])
const getQuote=()=>{
  fetch ("https://api.quotable.io/random")
  .then((Response) =>{return Response.json()})
  .then((date) =>{
    setQuoteInfo({
      text: date.content,
      author: date.author
    })
    console.log(date);
  })
}
  return (
    <div className="App">
      <div id='quote-box'>
        <p id='text'>{quoteInfo.text}</p>
        <p id='author'>{quoteInfo.author}</p>
        <button id='new-quote' onClick={getQuote}>
          New Quote
          </button>
        <a id='tweet-quote' href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text'+ quoteInfo.text}><i class="fa fa-twitter"></i>Post to twitter</a>
      </div>
    </div>
  );
}

export default App;
