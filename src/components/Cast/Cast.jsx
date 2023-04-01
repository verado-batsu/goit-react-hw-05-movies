import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from 'services/movieAPI';
import { CastContainer } from './Cast.styled';

export default function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        getMovieCredits(movieId).then(data => setCast(data));
    }, [movieId]);

    return (
        <CastContainer>
            <ul>
                {cast?.map(({ id, profile_path, name, character }) => {
                    const imageSrc = profile_path
                        ? `https://image.tmdb.org/t/p/w200${profile_path}`
                        : '#';

                    return (
                        <li key={id}>
                            <img src={imageSrc} alt={name} />
                            <p>{name}</p>
                            <p>Character: {character}</p>
                        </li>
                    );
                })}
            </ul>
        </CastContainer>
    );
}
