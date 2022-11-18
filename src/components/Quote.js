import React, { useEffect, useState } from 'react'
import {BsTwitter, BsFacebook} from 'react-icons/bs'


const Quote = () => {

    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')

    const getQuote = () => {
        let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
        fetch(url)
          .then(res => res.json())
          .then(data => {
            let quoteData = data.quotes;
            let randomNum = Math.floor(Math.random() * quoteData.length)
            let randomQuote = quoteData[randomNum]
            setQuote(randomQuote.quote)
            setAuthor(randomQuote.author)
          })
    }

    useEffect(() => {
        getQuote()
    }, [])

    const handleClick = () => {
        getQuote()
    }
    const shareUrl = window.location.href

  return (
    <div id="quote-box">
        <div id="text">
            <p>{quote}</p>
        </div>
        <div id="author">
            {author}
        </div>
        <div id="buttons">
            <div className='social-media'>
                <span style={{marginTop: '6px', marginRight: '7px'}}>Share: </span>
                <a href={`https://www.twitter.com/intent/tweet?url=${shareUrl}`} id="tweet-quote"><BsTwitter style={{marginTop:"5px"}} /></a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} id="post-quote"><BsFacebook style={{marginTop: '5px'}} /></a>
            </div>
            <button onClick={handleClick} id="new-quote">New Quote</button>
        </div>
    </div>
  )
}

export default Quote
