import { Suspense, useRef, useState } from 'react';
import {
    Link,
    Outlet,
    useLocation,
    useNavigate,
    useParams,
} from 'react-router-dom';

import { getMovieDetails } from 'services/movieAPI';
import { DetailsContainer } from './MovieDetails.styled';

export default function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(() =>
        getMovieDetails(movieId).then(data => setMovie(data))
    );
    const location = useRef(useLocation());
    const navigate = useNavigate();

    function handleClick() {
        const prevLocation = location.current?.state?.from ?? '/movies';
        navigate(prevLocation);
    }

    const { poster_path, title, genres, vote_average, overview } = movie;
    const imageSrc = poster_path
        ? `https://image.tmdb.org/t/p/w300${poster_path}`
        : '#';
    const userScore = `${(vote_average * 10 || 0).toFixed(0)}%`;

    return (
        <DetailsContainer>
            <button type="button" onClick={handleClick}>
                Go Back
            </button>
            <section className="movie-info">
                <img src={imageSrc} alt={title} />
                <div className="main-info">
                    <ul>
                        <li>
                            <h2>{title}</h2>
                            <p>User score: {userScore}</p>
                        </li>
                        <li>
                            <h3>Overview</h3>
                            <p>{overview}</p>
                        </li>
                        <li>
                            <h3>Genres</h3>
                            <ul className="genres">
                                {genres?.map(({ id, name }) => (
                                    <li key={id}>{name}</li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="additional-info">
                <h3>Additional information</h3>
                <ul>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
            </section>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </DetailsContainer>
    );
}
