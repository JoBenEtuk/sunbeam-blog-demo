import './App.scss';
import HomePage from './components/pages/home-page/HomePage';
import HomeDetails from './components/pages/home-details/HomeDetails'
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import NewArticle from './components/pages/new-article/NewArticle';

function App() {
  return (
    <Router>
        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/home' exact component={HomePage}/>
          <Route path='/home/:id' component={HomeDetails}/>
          <Route path='/newarticle' component={NewArticle}/>
        </Switch>
    </Router>
  );
}

export default App;