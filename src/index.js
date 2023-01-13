import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Marathons from "./pages/Marathons";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import RegisterMarathon from "./pages/RegisterMarathon";

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import MarathonsRankings from './pages/MarathonsRanking';
Amplify.configure(awsExports);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="marathons/:gender?" element={<Marathons />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<RegisterMarathon />} />
          <Route path="marathonsrankings" element={<MarathonsRankings />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
