import React from "react";
import Banner from "../banner/Banner";
import Row from "../row/Row";
import "./homescreen.css";
import requests from "../../axios/requests";

const Homescreen = () => {
    return (
        <div className="homescreen">
            <Banner />
            <Row
                title="Netflix Originals"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row
                title="Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row title="Documentaies" fetchUrl={requests.fetchDocumentaries} />
        </div>
    );
};

export default Homescreen;
