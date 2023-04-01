import axios from 'axios';

const API_KEY = '6ee8f442105c5771b43e4ffd32101863';
const urlTrend = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;



export async function getTrendingMovies() {
	try {
		const response = await axios.get(urlTrend);
		const movies = response.data.results;
		return await movies;
	} catch (error) {
		console.log(error);
	}
	
}

export async function getMovieDetails(id) {
	const urlDetails = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
	try {
		const response = await axios.get(urlDetails);
		const movie = response.data;
		return movie;
	} catch (error) {
		console.log(error);
	}
}

export async function getMovieCredits(id) {
	const urlCredits = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
	try {
		const response = await axios.get(urlCredits);
		const cast = response.data.cast;
		return cast;
	} catch (error) {
		console.log(error);
	}
}

export async function getMovieReviews(id) {
	const urlReviews = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
	try {
		const response = await axios.get(urlReviews);
		const reviews = response.data.results;
		return reviews;
	} catch (error) {
		console.log(error);
	}
}

export async function getSearchMovie(query) {
	const urlSearch = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
	try {
		const response = await axios.get(urlSearch);
		const movies = response.data.results;
		return movies;
	} catch (error) {
		console.log(error);
	}
}