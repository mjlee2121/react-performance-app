import React, { useState, useEffect, useCallback } from 'react'


const Message = React.memo(({message}) =>{
    return <h2>{message}</h2>
})

const ListItem = React.memo(({post}) =>{
    return (
        <li key={post.id}>
            <p>{post.title}</p>
        </li>
    )
})

const List = React.memo(({posts, testFunction}) => {
    console.log('List component is rendering')
    return (
        <ul>
            {posts.map(post =>(
                <ListItem key={post.id} post={post} />
            ))}
        </ul>
    )
})

const B = ({message, posts}) => {

    console.log('B component is rendering')

   
    const testFunction = useCallback(() => {

    });

  return (
    <div>
        <h1>B Component</h1>
        <Message message={message} testFunction={testFunction}></Message>
        <Message message={message}/>
        <List posts={posts} />

    </div>
  )
}

export default B