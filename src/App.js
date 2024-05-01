import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Privacy from './Components/Privacy';
import Terms from './Components/Terms';
import Head from './Components/Head'
import Home from './Components/Home';
import NoPage from './Components/NoPage';
import About from './Components/About';


function App() {
  let webName = "Gogil"
  return (
    <>
      <Head site={webName} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/terms' element={<Terms />} />
        <Route path="*" element={<NoPage />} />
      </Routes>

    </>
  );
}

export default App;
