import {NavBarLinks} from './NavBarLinks'

export function NavBar(){
    const links = [
        { link: "/home", linkName: "Home" },
        { link: "/search", linkName: "Search" },
        { link: "/favorites", linkName: "Favorites" }
    ]

    return(

        <div>
            {links.map(link => <NavBarLinks key={link.linkName} link={link.link} name={link.linkName}/>)}
        </div>
    )
}