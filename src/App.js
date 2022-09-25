import { Fragment } from 'react';
import { Route, Routes, } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Layout from './component/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about">
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
