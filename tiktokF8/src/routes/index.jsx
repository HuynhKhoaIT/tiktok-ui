// Layouts
import { HeaderOnly } from '../components/Layout';
import Home from '../pages/Home';
import Follwing from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';
// publuic routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Follwing },
    { path: '/:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
