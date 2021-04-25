import React, { useEffect, useState } from "react";
const axios = require("axios");

function DogPage() {
    const [imgUrl, setImage] = useState(null);

    useEffect(() => {
        const search = async () => {
            let res = await axios.get(
                "https://dog.ceo/api/breeds/image/random"
            );

            if (res.status === 200) {
                setImage(res.data.message);
            }
        };

        search();
    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center align-items-center">
                    <h1>Dogs</h1>

                    <img src={imgUrl} alt="Dog Pic" />
                </div>
            </div>
        </div>
    );
}

export default DogPage;
