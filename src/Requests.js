// Typically we would store in {process.env.API_KEY}
const API_KEY = "69fbed1ff656db648cb563f30962fc9a"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,

    // fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    // fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
    // fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    // fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    // fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    // fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    // fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    // fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;


