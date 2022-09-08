import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BookBody from "./BookBody";
import BookList from "./BookList";
import Home from "./Home";
import NavBar from "./NavBar";

function App() {
  return (
   <Router>
    <NavBar />
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/booklist'>
        <BookList />
      </Route>
      <Route path='/bookbody'>
        <BookBody />
      </Route>
    </Switch>
   </Router>
  );
}

export default App;
