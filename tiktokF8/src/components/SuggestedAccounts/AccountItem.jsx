/* eslint-disable react/prop-types */
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SuggestedAccounts.module.scss';
import { wrapper as PopperWapper } from '../../Layout/components/Popper';
import AccountPreview from './AccountPreview';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function AccountItem({ data }) {
    const renderPreview = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWapper className={cx('menu-wrapper')}>
                <AccountPreview />
            </PopperWapper>
        </div>
    );
    return (
        <Link to={`/@${data.nickname}`}>
            <Tippy interactive delay={[800, 0]} offset={[-10, 0]} render={renderPreview} placement="bottom-end">
                <div className={cx('account-item')}>
                    <img className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <span>{data.nickname}</span>
                            {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                        </p>
                        <p className={cx('name')}>{data.first_name + ' ' + data.last_name}</p>
                    </div>
                </div>
            </Tippy>
        </Link>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
