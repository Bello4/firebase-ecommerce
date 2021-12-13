import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import './App.css';
import { auth, createUserProfileDocument } from './components/firebase/firebase_untils';
import Homepage_component from './pages/homepage/Homepage_component';
import ShopPage from './pages/shop/ShopPage_components';
import HeaderComponent from './components/header/Header_component';
import CheckOut from './pages/checkout/CheckOut_component';
import SiginSignupComponent from './pages/signin-signup-page/Sigin-page-Signup-component';
import { selectCurrentUser } from './redux/userReducer/user_selector';
import { setCurrentUser } from './redux/userReducer/user_acton'


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
    
      <div >
        <HeaderComponent />
        <Switch >
          <Route exact path='/' component={Homepage_component} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOut} />
          {/* authorising signin and signout page route */}
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SiginSignupComponent />)} 
          />

        </Switch>
        </div>
    );
  }
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
