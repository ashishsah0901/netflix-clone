const api_key = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
    fetchTrending: `/trending/all/week?language=en-US&api_key=${api_key}`,
    fetchNetflixOriginals: `/discover/tv?with_networks=213&api_key=${api_key}`,
    fetchTopRated: `/movie/top_rated?language=en-US&api_key=${api_key}`,
    fetchActionMovies: `/discover/movie?with_genres=28&api_key=${api_key}`,
    fetchComedyMovies: `/discover/movie?with_genres=35&api_key=${api_key}`,
    fetchHorrorMovies: `/discover/movie?with_genres=27&api_key=${api_key}`,
    fetchRomanceMovies: `/discover/movie?with_genres=10749&api_key=${api_key}`,
    fetchDocumentaries: `/discover/movie?with_genres=99&api_key=${api_key}`,
};

export default requests;
