import React from 'react'
import axios from 'axios'
import { useEffect} from react

const Home = () => {

  useEffect(() => {
    axios.get('http://localhost:8081/')
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }, [])
  return ( 
    <></>
  )
}

export default Home
