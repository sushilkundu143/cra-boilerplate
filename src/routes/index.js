import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too
import React from 'react';
// import Home from '../components/pages/Home';
import loadable from '@loadable/component';
const HomeComponent = loadable(() => import(/* webpackChunkName: "cra-home" */ '../components/pages/Home'))
export default function Routers() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<HomeComponent />} />
    </Routes>
  </BrowserRouter>
  )
}

