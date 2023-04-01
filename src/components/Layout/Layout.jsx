import { NavLink, Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { Suspense } from 'react';

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
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </Container>
    );
}
