import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '../../Button';
import Image from '../../Images';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/80dd7f6e2018f36b945f8ef614f6a571.jpeg?x-expires=1688414400&x-signature=AE0DIp%2FxW7N15tW7NL5mY%2BvZyz0%3D"
                    alt="avata"
                />
                <Button primary>Follow</Button>
            </div>
            <div className={cx('info')}>
                <p className={cx('nickname')}>
                    <span>huynhkhoa</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </p>

                <p className={cx('name')}>Huynh Khoa</p>
            </div>
            <div className={cx('stats')}>
                <p className={cx('stats-follower')}>
                    <span>1.2M</span>Follower
                </p>
                <p className={cx('stats-like')}>
                    <span>193</span>
                    Likes
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
