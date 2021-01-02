import { Link } from "react-router-dom"

export function NavBarLinks(props){
    const {link, name} = props
    return (
        <div>
            <Link to={link}>{name}</Link>
        </div>
    )
}