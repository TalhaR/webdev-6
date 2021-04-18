import React, { useEffect, useState } from 'react'
const axios = require('axios');

function DogFactsPage () { 
    const [dogFacts, setFacts] = useState([]); 

    useEffect(() => {
        const getRandomFact = async () => {
            try { 
                let res = await axios.get('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=2');
                console.log(res.data[0]);
                setFacts(res.data.map((fact, index) => {
                  return <p key={index}> {fact["fact"]} </p>
                }));
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
                        <h1>Dog Facts</h1>
                        <h2>Refresh the page for a new set of facts!</h2>
                        {dogFacts}
                    </div>
                </div>
            </div>
        </>
    )

}

export default DogFactsPage