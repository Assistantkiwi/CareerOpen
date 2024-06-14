
import NavBar from './components/Header/Navigation.jsx';
import Body from './components/Body/landpage.jsx';
import Footer from './components/Footer/footer.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './components/Forms/SignUp.jsx';
import SignIn from './components/Forms/SignIn.jsx';





function App() {
  
  return (
    
    <>
    <div>
    <div>
      <Router>
        <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
    </div>

    <div>
    <div className='navbar' >
      <NavBar />
      
    </div>
    <div>
      <Body />
    </div>
    <div>
      <Footer />
    </div>
    </div>
    

     
      </>
  )
}

export default App
