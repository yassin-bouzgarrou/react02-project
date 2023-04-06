import CarbLog from '../images/abdie11190600028.jpg'

export default function Navbar() {
    return (
        <nav>
            <img src={CarbLog} className="logo-nav" />
            <ul>
                <li>home</li>
                <li>contact</li>
                <li className='dis'>Login</li>
            </ul>
        </nav>
    )
}