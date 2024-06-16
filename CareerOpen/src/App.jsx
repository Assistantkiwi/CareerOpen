import { Route, Routes } from 'react-router-dom';
import Body from './components/Body/landpage.jsx';
import Footer from './components/Footer/footer.jsx';
import NavBar from './components/Header/Navigation.jsx';
import SignIn from './components/Forms/SignIn.jsx';
import SignUp from './components/Forms/SignUp.jsx';


function App() {
  
  return (
    <>

    <div>
      <NavBar />
    </div>
    <div>
      
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      </Routes>
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
