/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'; // ES6
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Images';

const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                </p>
                <p className={cx('username')}>{data.full_name}</p>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountItem;
