import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowDetail from "./pages/ShowDetail";
import ShowList from "./pages/ShowList";
import Tickets from "./pages/Tickets";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer></ToastContainer>
      <Router>
        <Routes>
          <Route exact path="/tickets" element={<Tickets />} />
          <Route exact path="/show/:id" element={<ShowDetail />} />
          <Route path="/" element={<ShowList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
