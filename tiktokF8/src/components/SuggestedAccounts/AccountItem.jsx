import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SuggestedAccounts.module.scss';
import { wrapper as PopperWapper } from '../../Layout/components/Popper';
import AccountPreview from './AccountPreview';
const cx = classNames.bind(styles);
function AccountItem() {
    const renderPreview = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWapper className={cx('menu-wrapper')}>
                <AccountPreview />
            </PopperWapper>
        </div>
    );
    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-10, 0]} render={renderPreview} placement="bottom-end">
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/80dd7f6e2018f36b945f8ef614f6a571.jpeg?x-expires=1688414400&x-signature=AE0DIp%2FxW7N15tW7NL5mY%2BvZyz0%3D"
                        alt="riki"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <span>huynhkhoa</span>
                            <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Huynh khoa</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
