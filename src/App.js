import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/Home/home';
import AboutUs from './pages/AboutUs/aboutUs';
import Podcasts from './pages/Podcasts/podcasts';
import MyProvider from './context/myProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MyProvider>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/podcasts' component={Podcasts} />
            <Route exact path='/about' component={AboutUs} />
            <Route path='*' component={Home} />
          </Switch>
          <Footer />
        </MyProvider>
      </BrowserRouter>
    );
  }
}

export default App;
