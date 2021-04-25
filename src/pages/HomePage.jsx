import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div
            className="container-fluid text-center"
            style={{
                height: "450px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
            }}
        >
            <h1>Cats, Dogs, Foxes! Pick one! </h1>
            <div className="row">
                <div className="col-12">
                    <button type="button" className="btn btn-light">
                        <Link to="/catPic">Cat Pic</Link>
                    </button>
                    <br />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <button type="button" className="btn btn-light">
                        <Link to="/dogPic">Dog Pic</Link>
                    </button>
                    <br />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <button type="button" className="btn btn-light">
                        <Link to="/foxPic">Fox Pic</Link>
                    </button>
                    <br />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <button type="button" className="btn btn-light">
                        <Link to="/catFacts">Cat Facts</Link>
                    </button>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
