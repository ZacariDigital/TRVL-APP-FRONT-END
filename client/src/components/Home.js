import React,{useState, useEffect} from 'react'

const Home = ()=>{
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('/allpost',{
        headers:{
            "Authorization":"Bearer "+localStorage.getItem("jwt")
         }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setData(result.posts)
        })


    },[])
    return(
        <div className="home">
            {
                data.map(item=>{
                    return(
                        <><div className="card home-card">
                        </div><div className="card-image">
                            <img src={item.photo}></img>
                            </div><div className="card-content">
                            <h6>{item.postedBy.name}</h6>

                                <h6>{item.title}</h6>
                                <h6>{item.body}</h6>
                                <p>{item.price}</p>
                                <btn className="btn waves-effect waves-heavy">Enquire Today</btn>
                            </div></>

                    )
                })
            }

        </div>
    )
}

export default Home