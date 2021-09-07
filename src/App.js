import {Switch, Route, Redirect} from 'react-router-dom'

import Header from './components/Header'
import Photos from './pages/Photos'
import Cart from './pages/Cart'

function App() {

  
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="*" render={() => <Redirect to={"/"} />} />
      </Switch>
    </div>
  );
}

export default App;
