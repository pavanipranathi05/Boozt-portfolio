import about1 from "./about1.jpg";
import about2 from "./about2.jpg";
const Create = () => {
    const handleClick = () => {

    }
    return ( 
        <div className="create">
            <p style={{
                fontSize: 'large'
            }}>Who?</p>
            <h1>About</h1>
            <h1> Boozt</h1>
            <p>
        <button onClick={handleClick} style={{
        color: "yellow",
        borderRadius: '20px'
      }}>Learn More</button>
      </p>
            <p>We're not your average advertising</p>
            <p>agency - we're a vibrant team of</p>
            <p> social media mavens, creative</p>
            <p> wizards, and trendsetters.</p>
            <p>  </p>
            <p>
            With a dash of fun and a whole lot</p>
            <p> of expertise, we're here to</p>
            <p> revolutionize the way your brand</p>
            <p> connects with the world.</p>
            <div>
                <img src={about1} alt="" style={{
                    position: 'relative',
                    bottom: '580px'
                }} />
                <img src={about2} alt="" style={{
                    position: 'relative',
                    bottom: '100px'
                }}/>
            </div>
        </div>
     );
}
export default Create;