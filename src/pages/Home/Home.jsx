import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'services/movieAPI';
import { HomeContainer } from './Home.styled';

export default function Home() {
    const [movies, setMovies] = useState([]);

    const location = useLocation();

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
                            <Link
                                to={`movies/${id}`}
                                state={{ from: location }}
                            >
                                {title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </HomeContainer>
    );
}
