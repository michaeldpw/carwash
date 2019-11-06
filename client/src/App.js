import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

class App extends React.Component {
    render(){
        return (
            <Router>
            <div className="App">
            
              <Switch>
                <Route exact path="/" component={Home}></Route> 
                {/* <Route path="/user/:username" component={UserPage}></Route>
                <Route path="/setavatar/:username" component={SetAvatar}></Route>
                <Route path="/mypost" component={MyPost}></Route>
                <Route path="/post/:pid" component={PostDetail}></Route>
        <Route path="/members" component={Members}></Route>*/}
                <Route  exact path="/signup" component={SignUp}></Route>
                <Route  path="/signin" component={SignIn}></Route>
              </Switch>
            </div>
          </Router>
        )
    }
}

export default App