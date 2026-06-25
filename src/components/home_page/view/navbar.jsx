import sportifyLogo from '../../../assets/sportify_logo.png';
import { Link } from 'react-router-dom';    

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 flex items-center justify-around px-18 h-20 font-mono bg-black/80 backdrop-blur-sm">
            <Link to="/">
            <div className="flex items-center gap-3">
                <img src={sportifyLogo} alt="Sportify" className="w-12 h-12" />
                <h1 className="text-white font-sans text-4xl font-bold">Sportify</h1>
            </div>
            </Link>
            <div>
                <ul className="flex items-center gap-6 font-medium text-gray-300 text-sm font-sans cursor-pointer">
                    <li className="nav-link">Arcade</li>
                    <li className="nav-link">Skating</li>
                    <li className="nav-link">Workshops</li>
                    <li className="nav-link">Haunted</li>
                    <li className="nav-link">Birthday</li>
                    <li className="nav-link">Food</li>
                    <li className="nav-link"><Link to="/membership" className="nav-link">Membership</Link></li>
                    <li className=""><Link to="/contact" className="nav-link">Contact</Link></li>
                </ul>
            </div>
            <div>
                <button className="text-black px-5 py-2 rounded-3xl cursor-pointer font-medium bg-pink-600 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#db2777]">Book Now</button>
            </div>
        </nav>
    )
}

export default Navbar