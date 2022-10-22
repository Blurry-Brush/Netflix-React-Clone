import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login"
import Account from "./Pages/Account"
import ProtectedRoute from "./components/ProtectedRoute";
import SearchResults from "./components/SearchResults";


function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/account" element={<ProtectedRoute><Account/></ProtectedRoute>}/>
          <Route path="/show/:name" element={<SearchResults />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
