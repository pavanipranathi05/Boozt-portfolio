import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="links">
            <Link to="/">Home</Link>
                <Link to="/about.com">About</Link>
                <Link to="/service.com">Services</Link>
                <Link to="/portfolio.com">Portfolio</Link>
                <Link to="/testimonial.com">Testimonial</Link>
                <Link to="/contact.com" style={{
                    color: "darkblue",
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    padding: '8px'
                }}>Contact Us</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;