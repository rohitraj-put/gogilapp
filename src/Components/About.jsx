import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Feature from '../assets/feature.png'
import ScreenTwo from '../assets/screentwo.png'

const About = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    const Heading = {
        color: "brown",
        marginTop: "30px",
        fontSize: "3rem",
        textAlign: "center"
    }


    const cards = [
        {
            heading: "Real Time Players",
            para: "Connect with a vibrant community of players and battle with them",
            icon: 'fa fa-gamepad'
        },
        {
            heading: "Stunning Visuals",
            para: "The game app offers breathtaking graphics and stunning visual effects that bring the virtual",
            icon: 'fa fa-desktop'
        },
        {
            heading: "Competitive Gameplays",
            para: "Test your skills against other players in thrilling competitive modes",
            icon: 'fa fa-trophy'
        },
        {
            heading: " Instant Cash Withdrawal",
            para: "Play the game, Defeat the real time online players, win money and Withdraw Cash instantly",
            icon: 'fa fa-credit-card'
        },


    ]
    let cardcontant = cards.map(card => <div className='box-4' data-aos="zoom-in-left">
        <i className={card.icon}></i>
        <h2>{card.heading}</h2>
        <p>{card.para}</p>
    </div>)
    return (
        <>
            <div className='About' id='features' >
                <div className='About-box1'>
                    <img src={Feature} alt='Phone' />
                </div>
                <div className='About-box'>
                    <h1 style={{ textAlign: 'center' }} id='feature'>Best Features of <span>Gogil</span></h1>
                    <div className='boxflex'>
                        {cardcontant}
                    </div>
                </div>
            </div>

            <div className='About' id='about'>
                <div className='box-para'>
                    <h1 style={{ color: "green", marginTop: "80px" }}>About Us</h1>
                    <p style={{ lineHeight: "30px" }}>Gogil is the two-player online game application is an exceptional platform that allows you to connect and compete with players from around the world in thrilling head-to-head battles.
                        Players can track their progress within each game, unlocking achievements and earning rewards as they reach significant milestones.<br /><br /> This feature adds a sense of accomplishment and encourages players to keep progressing and exploring new levels and challenges.</p>
                </div>
                <div className='box-2'>
                    <img src={ScreenTwo} alt='img'></img>
                </div>
            </div>
            <h1 style={Heading}>Download The Latest Version Of Our App</h1>
            <div className='btn-3' >
                <button>Download</button>
            </div>
        </>
    )
}

export default About