import React,{useState} from 'react'

const CreatePost = ()=>{
    const [title,setTitle] = useState("")
    const [body,setBody] = useState()
    const [price,setPrice] = useState("")
    const [image,setImage] = useState("")
    const [url,setUrl] = useState("")


    const postDetails = () =>{
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "trvlappimages")
        data.append("cloudname", "dayv3dwwn")
        fetch("https://api.cloudinary.com/v1_1/dayv3dwwn/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
        })
        .catch(err=>{
            console.log(err)
        })
        fetch("./createpost",{
            method:"post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({

                title,
                body,
                price,
                pic:url
            })

        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
        }).catch(err=>{
            console.log(err)
        })
    }
    

    return(
        <div className='card input-filed'
        style={{
            margin:"20px auto",
            maxWidth:"500px",
            padding:"20px",
            textAlign:"center"
        }}
        >
            <input type="text" placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <input type="text" placeholder='body'
            value={body}
            onChange={(e) => setBody(e.target.value)}
            />
            <input type="text" placeholder='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />
            <div className="file-field input-field">
                <div class="btn">
                <span>Upload Image</span>
                <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
                </div>
                <div class="file-path-wrapper">
                <input class="file-path validate" type="text"/>
            </div>
            <button className="btn waves-effect waves-darken"
            onClick={()=>postDetails()}
            >
                    Submit
                </button>
            </div>



        </div>
    )
}

export default CreatePost