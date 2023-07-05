import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import { useEffect, useState } from 'react';
import * as suggestedService from '../../services/suggestedService';
const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    const [page, setPage] = useState(1);
    const [suggestUser, setSuggestUer] = useState([]);
    useEffect(() => {
        const fetchApt = async () => {
            const result = await suggestedService.suggest(page, 5);
            {
                page > 1 ? setSuggestUer((prev) => [...prev, result]) : setSuggestUer(result);
            }
        };

        fetchApt();
    }, [page]);
    const handleSeemore = () => {
        setPage(page + 1);
    };
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {suggestUser.flat().map((suggest) => (
                <AccountItem key={suggest.id} data={suggest} />
            ))}

            <p className={cx('more-btn')} onClick={handleSeemore}>
                See more
            </p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
