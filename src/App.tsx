
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './pages/Error';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Menu from './pages/Menu';
import Book from './pages/Book';
import Blog from './pages/Blog[CMS]';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import BlogDetails from './pages/BlogDetails';



function App() {

  return (
    <Router>
      <Topbar />
      <Navbar />
      <div>
        <Routes>
          <Route path='*' element={<Error />}></Route>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/book' element={<Book />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='blogdetails' element={<BlogDetails />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
    
  )
}

export default App
