
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './Pages/About/About';
import Admin from './Pages/Admin/Admin/Admin';
import Book from './Pages/Book/Book';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Service from './Pages/Service/Service';
import Services from './Pages/Services/Services';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/home">
            <Home/>
          </Route>

          <PrivateRoute exact path="/book/:id">
            <Book/>
          </PrivateRoute>

          <Route exact path="/login">
            <Login/>
          </Route>

          <Route exact path="/service">
            <Services/>
          </Route>

          <PrivateRoute exact path="/service/:id">
            <Service/>
          </PrivateRoute>

          <Route exact path="/about">
            <About/>
          </Route>

          <Route exact path="/contact">
            <Contact/>
          </Route>

          <PrivateRoute exact path="/admin">
            <Admin/>
          </PrivateRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
