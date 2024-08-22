import {createBrowserRouter, RouteObject} from "react-router-dom";
import App from "../App";
import PokemonsPage from "../pages/PokemonsPage";
import FavoritesPage from "../pages/FavoritesPage";
import PokemonPage from "../pages/PokemonPage";

const routes: RouteObject[] = [
    {
        path: '',
        element: <App/>,
        children: [
            {path:'pokemons', element: <PokemonsPage/>},
            {path:'favorites', element: <FavoritesPage/>},
            {path:'pokemons/:id', element: <PokemonPage/>}
        ]
    }
];

const router = createBrowserRouter(routes);

export default router;