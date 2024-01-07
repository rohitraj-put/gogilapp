import React from 'react'
import About from './About'
import Review from './Review'
import Footer from './Footer'


const Home = (props) => {
    return (
        <>

            <div className='main'>
                <div className='box'>
                    <h1><span>Gogil</span> - Game Play App</h1>
                    <h2 style={{ color: "brown" }}>Play, Have fun and Make Money</h2>
                    <button><a href='https://rohitraj-put.github.io/Tic-tac-toe/' target='_blank'>DOWNLOAD</a></button>
                </div>
                <div className='box-right'>
                    <img src='https://gogil.aimcomely.com/webassets/images/screenone.png' />
                </div>
            </div>
            <div className='btn-3'>
                <button><i className='fa fa-download' style={{marginTop:"20px"}}></i><br/>10000+ Downloads</button>
                <button><i className='fa fa-comments'></i><br/>4000+ Reviews</button>
                <button><i className='fa fa-star'></i><br/>4 Ratings</button>
            </div>
            <About />
          <Review/>
          <Footer/>
        </>
    )
}

export default Home