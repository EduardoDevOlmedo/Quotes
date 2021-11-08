import React, { useState, useEffect } from 'react';
import DislikeIcon from "../like.png"
import LoveIcon from "../love.png"

function Quote(){
 
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  useEffect(() => {
    getQuote()
  }, [])

  const getQuote = () => {
    const url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        let datas = data.quotes  
        let randomNum = Math.floor(Math.random() * datas.length) 
        let quote = datas[randomNum]
        setQuote(quote.quote)
        setAuthor(quote.author)
      }
      )
  }

  const handleClick = () => {
    getQuote()
  }


  return(
  
    <div id="quote-container">
    <div id="text">{quote}</div>
    <div id="author"><p>{author}</p></div>

  <div className="buttons"> 
  
    <div className="opinions">
      <button className="like"><img alt="Like" src={LoveIcon}></img></button>
      <button className="dislike"><img alt="Dislike" src={DislikeIcon}></img></button>
    </div>
    <button onClick={handleClick} id="new-quote">New Quote</button>
  </div>
  </div>
  )
}

export default Quote