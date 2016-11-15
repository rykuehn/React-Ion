import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import Editor from './Editor';
import NotFound from './NotFound';

const store = configureStore();

// const App = () => (
//   <Provider store={store}>
//     <Router history={browserHistory}>
//       <Route path="/" component={Index} />
//       <Route path="/Home" component={Home} />
//       <Route path="*" component={NotFound} />
//     </Router>
//   </Provider>
// );

// const Home = () => <h1>Hello from Home!</h1>;


const App = () => (
  <Provider store={store}>
    <Editor />
  </Provider>
);


ReactDOM.render(<App />, document.getElementById('App'));

export default store;