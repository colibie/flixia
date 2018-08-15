import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/home/Home'
import About from './Pages/about/About';
import Movies from './Pages/movies/Movies';
import FAQ from './Pages/faq/FAQ';
import Celebs from './Pages/celebs/Celebs';
import Error from './Pages/error/Error';
import Terms_and_Conditions from './Pages/terms/tandc';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
				<Switch>
					<Route path="/" component={Home} exact/>
					<Route path="/about" component={About} />
					<Route path="/movies" component={Movies} />
					<Route path="/faq" component={FAQ} />
					<Route path="/celebs" component={Celebs} />
					<Route path="/terms" component={Terms_and_Conditions} />
					<Route path="*" component={Error} />
				</Switch>
			</BrowserRouter>
    );
  }
}

export default App;
