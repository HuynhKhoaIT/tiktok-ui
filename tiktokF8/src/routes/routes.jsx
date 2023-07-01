// Layouts
import { HeaderOnly } from '../Layout';
import Home from '../pages/Home';
import Follwing from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';
import config from '../config';
// publuic routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Follwing },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
