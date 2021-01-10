import { NavBarLinks } from './NavBarLinks'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom'



export function NavBar() {
    const links = [
        { link: "/", linkName: "Home" },
        { link: "/search", linkName: "Search" },
        { link: "/favorites", linkName: "Favorites" }
    ]

    return (

        <div className='navbar-container' >
            <div className='navbar-content' >
                <ul>
                    {links.map(link => <NavBarLinks key={link.linkName} link={link.link} name={link.linkName} />)}
                </ul>
            </div>
            <div className='logo'>
                <Link to="/" >
                    <img className='img-logo' src='https://cdn.mos.cms.futurecdn.net/baYs9AuHxx9QXeYBiMvSLU.jpg' alt='' />
                </Link>
            </div>
        </div>
    )
}

