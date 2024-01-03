import { BrowserRouter , Router, Route, Routes} from 'react-router-dom';
import LoginCard from './components/LoginCard';
import Login from "./components/Login";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

// import "./style.css";



function App() {
  return (
    <div className="App">
      {/* <LoginCard/> */}
      
      
          <BrowserRouter>
     <Routes>
     <Route path='/navbar'element={<Navbar/>}></Route>
      <Route path='/'element={<LoginCard/>}></Route>
      <Route path='/login'element={<Login/>}></Route>

      <Route path='/home'element={<Home/>}></Route>

       </Routes> 
      </BrowserRouter>   
       
        {/* <Navbar/>
        <Home/>
       */}
       {/* <Login/> */}
    </div>
  );
}

export default App;
