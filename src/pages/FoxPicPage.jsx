import React, { useEffect, useState } from 'react'
const axios = require('axios');

function FoxPicPage () { 
    const [foxPic, setFoxPic] = useState(""); 
     

    useEffect(() => {
        const getRandomFact = async () => {
            try { 
                let res = await axios.get('https://randomfox.ca/floof/');
                setFoxPic(res.data["image"]);
            } catch (error) { 
                console.log("Not Found")
            }
        }
        
        getRandomFact();
    }, [])

    return ( 
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Random Fox Pic</h1>
                        <h2>Refresh the page for a fox pic!</h2>
                        {foxPic != null && <img src={foxPic} alt="foxPic"/>} 
                    </div>
                </div>
            </div>
        </>
    )

}

export default FoxPicPage