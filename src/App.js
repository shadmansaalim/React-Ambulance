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
import Contact from './components/Contact/Contact'
import Careers from './components/Careers/Careers'
import MessengerCustomerChat from 'react-messenger-customer-chat';
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
              <Route exact path="/contact">
                <Contact></Contact>
              </Route>
              <Route exact path="/careers">
                <Careers></Careers>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer></Footer>
          </ScrollToTop>
          <MessengerCustomerChat
            pageId="102363555577746"
            appId="1548059912198894"
          />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
