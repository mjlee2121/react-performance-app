import React from 'react'

const A = ({message, posts}) => {
  return (
    <div>
        <h1>A component</h1>
        <h2>{message}</h2>
        <ul>
            {posts.map(post =>{
                return (
                    <li key={post.id}>
                        <p>{post.title}</p>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default A