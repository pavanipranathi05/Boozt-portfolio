import services2 from './services2.jpg';
import services3 from './services3.jpg';
import services4 from './services4.jpg'
const Services = () => {
    const handleClick = () => {

    }
    return (
        <div className="Services">
            <div>
           <p style={{
                textAlign: 'right',
                fontSize: 'small'
            }}>What?</p>
            <p style={{
                textAlign: 'justify',
                fontSize: 'small'
            }}>Our services come with a side of</p>
            <p style={{
                textAlign: 'justify',
                fontSize: 'small'
            }}>affordability. No hidden fees, no</p>
            <p style={{
                textAlign: 'justify',
                fontSize: 'small'
            }}>fine print - just straightforward</p>
            <p style={{
                textAlign: 'justify',
                fontSize: 'small'
            }}>pricing that fits your budget like a</p>
            <p style={{
                textAlign: 'justify',
                fontSize: 'small'
            }}>glove.</p>
            <h1>Boozt</h1>
            <h1>Services</h1>
            <p style={{
                textAlign: 'left'
            }}>
        <button onClick={handleClick} style={{
        color: "yellow",
        borderRadius: '20px',
      }}>Discover More</button>
      </p>
      </div>
            <p style={{
                textAlign: 'center',
                fontSize: 'small'
            }}>Launching your brand into the</p>
            <p style={{
                textAlign: 'center',
                fontSize: 'small'
            }}>stratosphere with captivating</p>
            <p style={{
                textAlign: 'center',
                fontSize: 'small'
            }}>campaigns that stop the scroll</p>
            <img src={services4} alt="pic" style={{
                width: '250px',
                bottom: '00px'
            }} />
            <h6 style={{
        textAlign: 'center'
      }}>Ad Campaigns</h6>
            <h6>Social Media</h6>
            <h6>Management</h6>
            <img src={services3} alt="pic" style={{
                width: '250px',
                bottom: '0px'
            }} />
            <img src={services2} alt="pic" style={{
                width: '250px',
                bottom: '0px'
            }} />
            <p style={{
                textAlign: 'left',
                fontSize: 'small'
            }}>From crafting killer content to</p>
            <p style={{
                textAlign: 'left',
                fontSize: 'small'
            }}>engaging with your audience,</p>
            <p style={{
                textAlign: 'left',
                fontSize: 'small'
            }}>we've got your back</p>
        </div>
    );
}
export default Services;