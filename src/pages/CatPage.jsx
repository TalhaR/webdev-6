import React, { useEffect, useState } from 'react'
const axios = require('axios');

function CatPage() {
    const [imgUrl, setImage] = useState(null)
    useEffect(() => {
        const search = async () => {
            let res = await axios.get('https://thatcopy.pw/catapi/rest/')
            
            if (res.status === 200) {
                setImage(res.data.webpurl)
            }
        }
        
        search();
    }, [])
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Cats</h1>

                        <img src={imgUrl} alt="Cat Pic" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatPage
