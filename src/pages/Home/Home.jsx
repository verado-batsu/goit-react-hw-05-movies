import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'services/movieAPI';
import { HomeContainer } from './Home.styled';

export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies().then(data => setMovies(data));
    }, []);

    return (
        <HomeContainer>
            <h1>Trending Today</h1>
            <ul>
                {movies.map(({ id, title }) => {
                    return (
                        <li key={id}>
                            <Link to={`movies/${id}`}>{title}</Link>
                        </li>
                    );
                })}
            </ul>
        </HomeContainer>
    );
}
