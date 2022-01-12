import React from 'react'

const Home = ()=>{
    return(
        <div className="home">
            <div className="card home-title">
                <h5>Explore experiences, hotels, rooms & more</h5>

            </div>
            <div className="card-image">
                <img scr="https://www.exclusive.co.uk/media/4071/thm_mg_2934_retouched.jpg?anchor=center&mode=crop&width=1000&rnd=131601419550000000"></img>
            </div>
            <div className="card-content">
                <h6>Manor House</h6>
                <p>Rooms from £100 a night</p>
                <btn>Check Availibility Today</btn>
            </div>
        </div>
    )
}

export default Home