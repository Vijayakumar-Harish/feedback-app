import React from 'react'
// import { useParams } from 'react-router-dom'
import { Navigate, useNavigate, Routes, Route } from 'react-router-dom'

function Post() {
    // const params = useParams()
    const status = 200
    const navigate = useNavigate()
    if (status === 404) {
        return <Navigate to='/notfound' />
    }

    const onClick = () => {
        console.log('Hello')
        navigate('/about')
    }
  return (
    // <div>
    //       <h1>Id: {params.id}</h1>
    //       <h1>Name: {params.name}</h1>
          
      // </div>
      
      <div>
          <h1>POST</h1>
          <button onClick={onClick}>click</button>
          <Routes>
              <Route path='/show' element={ <h1>Hello World</h1> } />
          </Routes>
      </div>
  )
}

export default Post
