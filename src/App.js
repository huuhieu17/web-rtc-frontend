import { Route, Routes, } from 'react-router-dom';
import './App.css';
import Call from './component/Call';
import Home from './component/Home';
import Layout from './component/Layout';
import { ContextProvider } from './Context';


function App() {
  return (
    <ContextProvider>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/call/:code" element={<Call />}></Route>
        </Routes>
      </Layout>
    </ContextProvider>
  );
}

export default App;
