import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too
import React from 'react';
import Home from '../components/pages/Home';

export default function Routers() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
    </Routes>
  </BrowserRouter>
  )
}

