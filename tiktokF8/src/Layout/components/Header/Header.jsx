import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faQuestion,
    faKeyboard,
    faGear,
    faStore,
    faArrowRightFromBracket,
    faUser,
    faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Header.module.scss';
import images from '../../../assets/images';
import Button from '../../../components/Button';
import Menu from '../Popper/Menu';
import { BoxIcon, MessageIcon } from '../../../components/Icons';
import Image from '../../../components/Images';
import Search from '../Search/Search';
import config from '../../../config';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'jp',
                    title: 'Jappan',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currenUsser = true;

    const handleMenuOnchange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle langue
                break;
            default:
        }
    };

    const userMenut = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '@khoa',
        },
        {
            icon: <FontAwesomeIcon icon={faHeart} />,
            title: 'Favorites',
            to: '@khoa',
        },
        {
            icon: <FontAwesomeIcon icon={faStore} />,
            title: 'Business Suite',
            to: '/business-suite',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                {/* search */}
                <Search />
                <div className={cx('actions')}>
                    {currenUsser ? (
                        <>
                            <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} text>
                                Upload
                            </Button>
                            <Tippy content="Tin nhắn" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon className={cx('message-icon')} />
                                </button>
                            </Tippy>
                            <Tippy content="Hộp thư" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <BoxIcon className={cx('box-icon')} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} text>
                                Upload
                            </Button>
                            <Button primary className={cx('custom')}>
                                Log In
                            </Button>
                        </>
                    )}
                    <Menu items={currenUsser ? userMenut : MENU_ITEMS} onChange={handleMenuOnchange}>
                        {currenUsser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://pbs.twimg.com/media/FoUoGo3XsAMEPFr?format=jpg&name=4096x40a96"
                                alt="khoa"
                                fallback="https://pbs.twimg.com/media/FoUoGo3XsAMEPFr?format=jpg&name=4096x4096"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
