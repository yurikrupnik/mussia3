// import { Provider as movies } from './movies/context';
import { Provider as AuthProvider } from './auth/context';
import { Provider as UsersProvider } from './users/context';

export default [
    UsersProvider,
    AuthProvider,
    // movies
];
