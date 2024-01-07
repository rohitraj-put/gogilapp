import React from 'react'

const Review = () => {
    let feedNames = [
        {
            imgsrc: "https://gogil.aimcomely.com/webassets/images/user.png",
            contant: "sense of accomplishment and encourages players to keep progressing and exploring new levels and challenges.",
            uname: ".....Rohit"
        },
        {
            imgsrc: "https://gogil.aimcomely.com/webassets/images/user.png",
            contant: "sense of accomplishment and encourages players to keep progressing and exploring new levels and challenges.",
            uname: ".....Vinay"
        },
        {
            imgsrc: "https://gogil.aimcomely.com/webassets/images/user.png",
            contant: "sense of accomplishment and encourages players to keep progressing and exploring new levels and challenges.",
            uname: ".....Mannu"
        }
    ]

    let feedback =feedNames.map(feedName => <div className='card-3' data-aos="flip-up" >
        <p style={{ padding: "10px" }}><q>{feedName.contant}</q></p>
        <p style={{ paddingLeft: "100px",color:"green" }}>{feedName.uname}</p>
        <div className='profile'>
            <img src={feedName.imgsrc} alt='img'/>
        </div>
    </div>)
    return (
        <>
            <h1 style={{ textAlign: "center", color: "green", fontSize: '3rem' }}>What Our Users Say</h1>
            <div className='review' >
                {feedback}
            </div>
        </>
    )
}

export default Review