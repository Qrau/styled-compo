import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './pages'
import SignIn from './compo/SignIn'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SignIn} />
      </Switch>
    </Router>
  )
}

export default App
