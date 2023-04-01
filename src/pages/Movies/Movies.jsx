import { useSearchParams } from 'react-router-dom';

export default function Movies() {
    const [searchParams, setSearchParams] = useSearchParams({ q: '' });

    const query = searchParams.get('q');

    function handleSubmit(e) {
        e.preventDefault();
        console.dir(e.target);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="movie" defaultValue={query} />
                <button type="submit">Search</button>
            </form>
        </>
    );
}
