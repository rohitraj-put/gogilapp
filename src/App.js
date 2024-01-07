import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Privacy from './Components/Privacy';
import Terms from './Components/Terms';
import Head from './Components/Head'
import Home from './Components/Home';
import NoPage from './Components/NoPage';
import NetworkDetector from './Components/NetworkDetector';

function App() {
    let webName="Gogil"
  return (
    <>
      <Head site={webName}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<Terms />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default NetworkDetector(App);
