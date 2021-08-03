const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },

  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },

  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },

  fetchAdventureMovies: {
    title: "Adventure",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  },

  fetchAnimationMovies: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },

  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },

  fetchDocumentryMovies: {
    title: "Documentaries",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },

  fetchDramaMovies: {
    title: "Drama",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  },

  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },

  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },

  fetchMysteryMovies:{
    title:"Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,

},

fetchScienceFictionMovies:{
    title:"Science Fiction",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,

},

fetchTvMovies:{
    title:"TV Movie",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,

},








};
