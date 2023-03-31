import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div>
            NotFound. Please go to the <Link to="/">home page</Link>
        </div>
    );
}
