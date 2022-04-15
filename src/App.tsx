
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Protected from './utilities/routes/ProtectedRoute';
import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';
import Wrapper from './utilities/Wrapper';
import { useEffect } from 'react';
import NewBalance from './components/NewBalance';




function App() {

  return (
    <Provider store={store}>
      <Wrapper />
      <Router>
          <Header />
          <main>
            <Routes>
              <Route path='/'  element={<Protected children={<Home />}/>} />
              <Route path='/Login' element={ <NewBalance /> } />
            </Routes>
          </main>
      </Router>
    </Provider>
  );

  
}

export default App;
