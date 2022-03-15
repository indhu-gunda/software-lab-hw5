import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Typography } from '@mui/material';
import NavigationBar from './components/NavigationBar';
import Projects from './components/Projects';
import Datasets from './components/Datasets'

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Typography>Home</Typography>} />
        <Route path="/projects" element={<Projects initialValue={1} />} />
        <Route path="/datasets" element={<Datasets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
