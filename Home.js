import { useState, useEffect } from 'react'; 
import intern1 from "./intern1.jpg";
const Home = () => {

    const handleClick = () => {
      
    }

    return (
        <div className="home">
            <h1> BOOST </h1>
      <h1>NOW</h1>
      <p style={{
        textAlign: 'right',
        fontSize: 'xx-large'
      }}>+800
       </p>
       <p style={{
        textAlign: 'right',
        fontSize: 'small'
      }}>Happy</p>
      <p style={{
        textAlign: 'right',
        fontSize: 'small'
      }}>Client</p>
      <p>Welcome to Boozt, your ultimate</p>
      <p> hub for electrifying social media</p>
      <p> advertising that packs a punch!</p>
      <p style={{
        textAlign: 'right',
        fontSize: 'xx-large'
      }}>+10k</p>
       <p style={{
        textAlign: 'right',
        fontSize: 'small'
      }}>Campign</p>
      <p style={{
        textAlign: 'right',
        fontSize: 'small'
      }}>Launch</p>
      <p>
        <button onClick={handleClick} style={{
        color: "darkblue",
        backgroundColor: 'yellow',
        borderRadius: '20px'
      }}>Start Now</button>
      </p>
      <p style={{
        textAlign: 'right',
        fontSize: 'xx-large'
      }}>+200</p>
       <p style={{
        textAlign: 'right',
        fontSize: 'small'
      }}>Media</p>
      <p style={{
        textAlign: 'right',
        fontSize: 'small'
      }}>Featured</p>
      <div>
        <img src={intern1} alt="pic" />
        </div>
        </div>
    );
}
 
export default Home;