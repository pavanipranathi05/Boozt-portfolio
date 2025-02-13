import portfolio1 from "./portfolio1.jpg";
import portfolio2 from './portfolio2.jpg';
import portfolio3 from './portfolio3.jpg';
const Portfolio = () => {
    const handleClick = () => {

    }
    return (
        <div className="Portfolio">
            <p>Why</p>
        <h1>Boozt</h1>
        <h1>Portfolio</h1>
        <p>Check out some of our star-</p>
        <p>studded campaigns and success</p>
        <p>stories. Warning: may cause</p>
        <p>serious FOMO</p>
        <button onClick={handleClick} style={{
        color: "yellow",
        borderRadius: '20px'
      }}>Discover More</button>
        <img src={portfolio1} alt="pic" style={{
            position: 'relative',
            width: '200px',
            bottom: '0px'
        }}/>
        <img src={ portfolio2 } alt="pic" style={{
            position: 'relative',
            align: 'right',
            width: '250px',
            bottom: '50px'
        }}/>
        </div>
    );
}
export default Portfolio;