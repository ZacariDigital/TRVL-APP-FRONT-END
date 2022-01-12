import React from 'react'

const Home = ()=>{
    return(
        <div className="home">
            <div className="card home-title">
                <h5>Explore experiences, hotels, rooms & more</h5>
            </div>
            <div className="card-image">
                <img scr="https://i.picsum.photos/id/26/200/200.jpg?hmac=A1fbIskzMWVQs1JuyIsJXYGuCgqVwevLXT4YaIJM3Rk"/>
            </div>
            <div className="card content-book">
                <h6>Manor House</h6>
                <p>Rooms from £100 a night</p>
                <btn className="btn waves-effect waves-heavy">Enquire Today</btn>
            </div>
            <div className="card content-book">
                <h6>Manor House</h6>
                <p>Rooms from £100 a night</p>
                <btn className="btn waves-effect waves-heavy">Enquire Today</btn>
            </div>
            <div className="card content-book">
                <h6>Manor House</h6>
                <p>Rooms from £100 a night</p>
                <btn className="btn waves-effect waves-heavy">Enquire Today</btn>
            </div>
            <div className="card content-book">
                <h6>Manor House</h6>
                <p>Rooms from £100 a night</p>
                <btn className="btn waves-effect waves-heavy">Enquire Today</btn>
            </div>
        </div>
    )
}

export default Home