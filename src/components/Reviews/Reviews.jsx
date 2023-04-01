import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'services/movieAPI';
import { ReviewsList } from './Reviews.styled';

export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getMovieReviews(movieId).then(data => setReviews(data));
    }, [movieId]);

    return (
        <>
            {reviews.length === 0 ? (
                <div>We don`t have any reviews for this movie</div>
            ) : (
                <ReviewsList>
                    {reviews.map(({ id, author, content }) => {
                        return (
                            <li key={id}>
                                <h4>Author: {author}</h4>
                                <p>{content}</p>
                            </li>
                        );
                    })}
                </ReviewsList>
            )}
        </>
    );
}
