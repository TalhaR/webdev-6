import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center align-items-center">
                        <h1>Cats or Dogs?</h1>
                        <button type="button" className="btn btn-light">
                            <Link to="/cats">Cats</Link>
                        </button> <br/>
                        <button type="button" className="btn btn-light">
                            <Link to="/dogs">Dogs</Link>
                        </button> <br/>
                        <button type="button" className="btn btn-light">
                            <Link to="/catfacts">Cat Facts</Link>
                        </button> <br/>
                        <button type="button" className="btn btn-light">
                            <Link to="/dogfacts">Dog Facts</Link>
                        </button> <br/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
