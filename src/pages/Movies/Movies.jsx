import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import { getSearchMovie } from 'services/movieAPI';

export default function Movies() {
    const [searchParams, setSearchParams] = useSearchParams({ q: '' });
    const [movies, setMovies] = useState([]);

    const location = useLocation();
    const query = searchParams.get('q');

    useEffect(() => {
        getSearchMovie(query).then(data => setMovies(data));
    }, [query]);

    function handleSubmit(e) {
        e.preventDefault();
        const q = e.target.children.movie.value;
        setSearchParams({ q });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="movie" />
                <button type="submit">Search</button>
            </form>
            <ul>
                {movies.map(({ id, title }) => {
                    return (
                        <li key={id}>
                            <Link to={`${id}`} state={{ from: location }}>
                                {title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
