import classNames from 'classnames/bind';
import styles from './LogginAccout.module.scss';
import Button from '../Button';

const cx = classNames.bind(styles);
function LogginAccout() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>Log in to follow creators, like videos, and view comments.</p>
            <Button outline className={cx('btn-login')}>
                Log in
            </Button>
        </div>
    );
}

export default LogginAccout;
