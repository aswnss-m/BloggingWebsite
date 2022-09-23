import React from 'react'
import "../assets/Post.css"

function Post(props) {
  return (
    <div className='postCard'>
        <div className="Header">
            <h1>{props.Heading}</h1>
        </div>
        <div className="postBody">
            <p>{props.Content.slice(0,250) + "..."}</p>
        </div>
    </div>
  )
}

export default Post