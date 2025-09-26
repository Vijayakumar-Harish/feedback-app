import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
// import Card from "./components/shared/Card";
import Post from "./pages/Post";
import { FeedbackProvider } from "./context/FeedbackContext";


function App() {
  
  
  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={
            <>
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/post/:id/:name" element={<Post />} /> */}
          <Route path="/post/*" element={<Post />} />
        </Routes>
        {/* <Card>
          <NavLink to="/" activeClassName='active'>Home</NavLink>
          <NavLink to="/about" activeClassName='active'>About</NavLink>
        </Card> */}
        <AboutIconLink />
      </div>
      </Router>
      </FeedbackProvider>
  );
}

export default App;
