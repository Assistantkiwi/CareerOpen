
import NavBar from './components/Header/Navigation.jsx';
import Body from './components/Body/landpage.jsx';
import Footer from './components/Footer/footer.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignUp from './components/Forms/SignUp.jsx';




function App() {
  
  return (
    <>
    <div>
      <Router>
        <Routes>
            <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
    <div className='navbar' >
      <NavBar />
      
    </div>
    <div>
      <Body />
    </div>
    <div>
      <Footer />
    </div>



     
      </>
  )
}

export default App
