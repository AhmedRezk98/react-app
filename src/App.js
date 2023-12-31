import { Route , Switch } from "react-router-dom";
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetups';
import FavouritesPage from './pages/Favourites';
import MainNavigation from './components/layout/MainNavigation';
function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
    <Route path="/" exact>
      <AllMeetupsPage />
    </Route>
    <Route path="/new-meetup">
      <NewMeetupsPage />
    </Route>
    <Route path="/favourites">
      <FavouritesPage />
    </Route>
    </Switch>
    </div>
  );
}

export default App;
