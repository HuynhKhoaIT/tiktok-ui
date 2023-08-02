import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faLink, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import Images from '../../components/Images';
import Button from '../../components/Button';
import { Share, More } from '../../components/Icons';
const cx = classNames.bind(styles);
function Profile() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('profile')}>
                <div className={cx('profile__header')}>
                    <div className={cx('profile__header-info')}>
                        <Images
                            className={cx('avatar')}
                            src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/30498e16beb61481ab0c7fd0bf0ff281~c5_100x100.jpeg?x-expires=1688918400&x-signature=wWtgeIkHxFzHGFV9nAuQW%2Fz5HJ0%3D"
                            alt="avt"
                        />
                        <div className={cx('info-title')}>
                            <h1 className={cx('nickname')}>khoa_ne2002</h1>
                            <h2 className={cx('username')}>Huỳnh Khoa</h2>
                            {/* <Button leftIcon={<FontAwesomeIcon icon={faPenToSquare} />} text>
                                Edit profile
                            </Button> */}
                            <Button primary className={cx('btn-follow')}>
                                Follow
                            </Button>
                        </div>
                    </div>
                    <div className={cx('profile__header-countInfos')}>
                        <div className={cx('countInfos-number')}>
                            <strong>129</strong>
                            <span>Following</span>
                        </div>
                        <div className={cx('countInfos-number')}>
                            <strong>5</strong>
                            <span>Followers</span>
                        </div>
                        <div className={cx('countInfos-number')}>
                            <strong>0</strong>
                            <span>Likes</span>
                        </div>
                    </div>
                    <div className={cx('profile__header-desc')}>
                        <h2>No bio yet.</h2>
                    </div>
                    <div className={cx('profile__header-links')}>
                        <a href="https://www.facebook.com/o0.0o.khoa.o0.0o/">
                            <FontAwesomeIcon icon={faLink} />
                            <span>www.facebook.com/o0.0o.khoa.o0.0o/</span>
                        </a>
                    </div>
                    <div className={cx('btn')}>
                        <div className={cx('share-btn')}>
                            <Share className={cx('share-icon')} />
                        </div>
                        <div className={cx('more-btn')}>
                            <More className={cx('more-icon')} />
                        </div>
                    </div>
                </div>
                <div className={cx('profile__main')}>
                    <div className={cx('profile__main-FeedTab')}></div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
