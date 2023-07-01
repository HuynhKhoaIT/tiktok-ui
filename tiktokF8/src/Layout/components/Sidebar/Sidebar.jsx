import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '../../../config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    FollowingIcon,
    ExploreIcon,
    LiveIcon,
    HomeActiveIcon,
    FollowingActiveIcon,
    ExploreActiveIcon,
    LiveActiveIcon,
} from '../../../components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon className={cx('menu-icon')} />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FollowingIcon className={cx('menu-icon')} />}
                    activeIcon={<FollowingActiveIcon />}
                />
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<ExploreIcon className={cx('menu-icon')} />}
                    activeIcon={<ExploreActiveIcon />}
                />
                <MenuItem
                    title="Live"
                    to={config.routes.live}
                    icon={<LiveIcon className={cx('menu-icon')} />}
                    activeIcon={<LiveActiveIcon />}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
