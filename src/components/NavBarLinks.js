import { Link } from "react-router-dom"
import '../Styles/Navbar.css'
export function NavBarLinks(props) {
    const { link, name } = props
    return (

        <li>
            <Link to={link} style={{ display: 'inline-block' }}>{name}</Link>
        </li>



    )
}