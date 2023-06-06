import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
