import {createBrowserRouter, RouteObject} from "react-router-dom";
import App from "../App";
import PocemonsPage from "../pages/PocemonsPage";
import FavoritesPage from "../pages/FavoritesPage";
import PocemonPage from "../pages/PocemonPage";

const routes: RouteObject[] = [
    {
        path: '',
        element: <App/>,
        children: [
            {path:'pokemons', element: <PocemonsPage/>},
            {path:'favorites', element: <FavoritesPage/>},
            {path:'pokemon/:id', element: <PocemonPage/>}
        ]
    }
];

const router = createBrowserRouter(routes);

export default router;