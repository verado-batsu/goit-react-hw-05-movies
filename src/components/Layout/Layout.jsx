import { NavLink, Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';

export default function Layout() {
    return (
        <Container>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/movies">Movies</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </Container>
    );
}
