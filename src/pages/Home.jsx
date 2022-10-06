import React, {useState} from 'react' // use {useState, useEffect} when working with the "useEffect"

const Home = (props) => {

  const [number, setNumber] = useState(0)


  return (
    <>
     
          <h1>{props.title}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quas quasi alias doloribus libero rem, consequuntur a quaerat. 
             Numquam obcaecati, tempora architecto odio 
            non at dicta adipisci, eius soluta ipsum repudiandae?</p>

            <h1>{number}</h1>
            <button onClick={ ()=>setNumber(number+1)}>add 1</button>
        
    
    </>
    
        
  )
}

export default Home