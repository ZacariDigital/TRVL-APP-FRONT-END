import React from 'react'

const CreatePost = ()=>{
    return(
        <div className='card input-filed'>
            <input type="text" placeholder='Title'/>
            <input type="text" placeholder='Description'/>
            <input type="text" placeholder='Price'/>
            <div className="file-field input-field">
                <div class="btn">
                <span>File</span>
                <input type="file"/>
                </div>
                <div class="file-path-wrapper">
                <input class="file-path validate" type="text"/>
            </div>
            <button className="btn waves-effect waves-darken">
                    Submit
                </button>
            </div>



        </div>
    )
}

export default CreatePost