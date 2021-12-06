import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "../../axios/axios";
import requests from "../../axios/requests";
import TypeWriter from "react-typewriter";

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchMovie = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        };
        fetchMovie();
        return () => {};
    }, []);

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    };

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.name || movie?.title || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">
                    <TypeWriter typing={1}>
                        {truncate(movie?.overview, 150)}
                    </TypeWriter>
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    );
};

export default Banner;
