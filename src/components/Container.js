import { Route } from "react-router-dom";
import { FavoriteDesc } from "./FavoriteDesc";
import { Favorites } from "./Favorites";
import { Home } from "./Home";
import { Search } from "./Search";


export function Container(props){

    return (
        <div>
            <Route exact path='/' render={() => <Home />}/>
            <Route exact path='/search' render={() => <Search />}/>
            <Route exact path='/favorites' render={() => <Favorites />} />
            <Route exact path='/favorites/:id' render={(match) => <FavoriteDesc match={match} />}/>
        </div>
    )
}