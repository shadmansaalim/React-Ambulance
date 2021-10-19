import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';
import Login from './components/Login/Login';
import PrivateServices from './components/PrivateRoute/PrivateServices';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import PrivateForm from './components/PrivateRoute/PrivateForm';
import NotFound from './components/NotFound/NotFound';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <ScrollToTop>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <PrivateServices exact path="/service/:serviceId">
                <ServiceDetails></ServiceDetails>
              </PrivateServices>
              <PrivateForm exact path="/sign-up">
                <SignUp></SignUp>
              </PrivateForm>
              <PrivateForm exact path="/login">
                <Login></Login>
              </PrivateForm>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer></Footer>
          </ScrollToTop>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
