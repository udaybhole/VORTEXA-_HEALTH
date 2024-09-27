import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { Signup } from "./pages/Signup";


import { Signin } from "./pages/Signin.jsx";
import { Category } from "./pages/Category.jsx";
import HomePage from "./pages/Me";

const isAuthenticated = () => {
  return !!localStorage.getItem('token'); 
};


const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/signin" />;
};


 function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/category" element={<PrivateRoute element={<Category />} />} />        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
