import React, { useEffect, useState } from 'react'
const axios = require('axios');

function CatFactsPage() {
    const [facts, setFacts] = useState([]);

    useEffect(() => {
        const getDailyFacts = async () => {
            let res = await axios.get('https://cat-fact.herokuapp.com/facts');
            let y = res.data;
            console.log(res.data[0]);
            setFacts(res.data.map((fact) => {
              return <p key={fact["_id"]}> {fact["text"]} </p>
            }));
        }
        
        getDailyFacts();
    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Cats Fact:</h1>
                        <h2>These facts change every day!</h2>
                        <h3>Feel free to come back tomorrow for a new set of facts.</h3> <br/>
                        {facts}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatFactsPage
