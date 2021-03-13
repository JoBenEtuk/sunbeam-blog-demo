import './App.scss';
import HomePage from './components/pages/home-page/HomePage';
import HomeDetails from './components/pages/home-details/HomeDetails'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NewArticle from './components/pages/new-article/NewArticle';
import items from './components/pages/article'
import React from 'react'

export const ItemContext = React.createContext()

function App() {
  return (
    <Router>
      <Switch>
        <ItemContext.Provider value={items}>
          <Route path='/' exact component={HomePage} />
          <Route path='/home' exact component={HomePage} />
          <Route path='/home/:id' component={HomeDetails} />
          <Route path='/newarticle' component={NewArticle} />
        </ItemContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
