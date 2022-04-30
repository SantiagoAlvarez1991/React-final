import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from "./Components/protectedRoutes/ProtectedRoutes";
import { AppContextProvider } from "./Context/AppContext";
import Home from "./Pages/Views/Home/Home";
import Movie from "./Pages/Views/Movie/Movie";

//Components
import Login from "./Pages/Login/Login";

import { Link } from "react-router-dom";
function Error() {
  return (
    <div>
      <h1>This route is not valid</h1>
      <Link to="/access-registration">Back to Home Page</Link>
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Routes>
          <Route exact path="/access-registration" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="*" element={<Error />} />
            <Route path="/home" element={<Home/>}/>
            <Route path="/home/movie/:id" element={<Movie/>}/>

          </Route>
        </Routes>
      </AppContextProvider>
    </BrowserRouter>
  );
};

export default App;
