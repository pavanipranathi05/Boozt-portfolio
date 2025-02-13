import testimonial from './testimonial.jpg';
const Testimonial = () => {
    const handleClick = () => {

    }
    return ( 
        <div className="testimonial">
            <p>How</p>
            <h1>Boozt</h1>
            <h1>Pricing</h1>
            <p>
            <button onClick={handleClick} style={{
        color: "yellow",
        borderRadius: '20px',
      }}>More Detail</button>
      </p>
      <p>Our services come with a side of</p>
      <p>affordability. No hidden fees, no fine</p>
      <p>print - just straightforward pricing</p>
      <p>that fits your budget like a glove.</p>
      <img src={testimonial} alt="pic" style={{
        width: '275px',
        bottom: '0px'
      }} />
        </div>
     );
}
 
export default Testimonial;