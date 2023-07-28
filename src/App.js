import logo from './logo.svg';
import './App.css';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import NavBar from './components/navbar';
import Portfolio from './components/portfolio';
import Project from './components/project';
import Resume from './components/resume';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
      <Route path = '/' element = {<Home></Home>}></Route>
      <Route path = '/Portfolio' element = {<Portfolio></Portfolio>}></Route>
      <Route path = '/Resume' element = {<Resume></Resume>}></Route>
      <Route path = '/Contact' element = {<Contact></Contact>}></Route>

      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
