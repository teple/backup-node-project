import * as React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import { Home, About, Posts } from 'pages';
// import Menu from 'components/Menu';
// import './App.css';
// import logo from './logo.svg';
// import Profile from './components/Profile';
// import CounterContainer from './containers/CounterContainer';
import TodoListContainer from 'containers/TodoListContainer';

class App extends React.Component {
  public render() {
    return (
      <div>
        {/* <Profile 
          name="テスト太郎"
          job="デベロッパー"
        />
        <CounterContainer /> */}
        <TodoListContainer />
        
        {/* <Menu />
        <Route
          exact={true}
          path="/"
          component={Home}
        />
        
        <Switch>
          <Route
            // params test
            path="/about/:name"
            component={About}
          />
          <Route
            path="/about"
            component={About}
          />
        </Switch>

        <Route path="/posts" component={Posts}/> */}
      </div>
    );
  }
}

export default App;