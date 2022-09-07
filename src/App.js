import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BookList from "./BookList";
import Home from "./Home";
import Library from "./Library";
import NavBar from "./NavBar";

function App() {
  return (
   <Router>
    <NavBar />
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/booklist'>
        <BookList />
      </Route>
      <Route path='/library'>
        <Library />
      </Route>
    </Switch>
   </Router>
  );
}

export default App;
