import { useState } from "react";


const test1 = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <>
    <h1>This is for TEST purposes.</h1>
    {toggle &&(
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Voluptas quia nostrum illo voluptates doloremque totam sit eum 
        ipsam ad quis aliquam molestias, laboriosam debitis repellendus 
        rem magnam error distinctio porro! 
        </p>
    )}
    
        <button onClick={()=>{setToggle(!toggle)}}> Show menu</button>

    </>
  )
}

export default test1