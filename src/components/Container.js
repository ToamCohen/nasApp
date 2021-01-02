import { Route } from "react-router-dom";
import { Favorites } from "./Favorites";
import { Home } from "./Home";
import { Search } from "./Search";


export function Container(props){

    return (
        <div>
            <Route exact path='/home' render={() => <Home />}/>
            <Route exact path='/search' render={() => <Search />}/>
            <Route exact path='/favorites' render={() => <Favorites/>} />
            <Route exact path='/favorites/:id' render={({match}) => <Favorites match={match} />}/>

        </div>
    )
}