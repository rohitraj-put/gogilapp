import './App.css';
import { Routes, Route } from 'react-router-dom'
import Privacy from './Components/Privacy';
import Terms from './Components/Terms';
import Head from './Components/Head'
import Home from './Components/Home';
import NoPage from './Components/NoPage';
import About from './Components/About';
import { useEffect, useState } from 'react';
import '../src/Components/loader.css'


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  })
  if (loading) {
    return <div><div class="lds-hourglass"></div>
      <p className='text-center'>Loading...</p></div>

  }

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
