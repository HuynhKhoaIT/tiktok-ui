/* eslint-disable react/prop-types */
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { wrapper as PopperWapper } from '../../Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './header';
import { useState } from 'react';
const cx = classNames.bind(styles);

const defaultFun = () => {};
function Menu({ children, items = [], hideOnClick = false, onChange = defaultFun }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderitem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <HeadlessTippy
            delay={[0, 700]}
            interactive
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWapper className={cx('menu-wrapper')}>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('menu-body')}>{renderitem()}</div>
                    </PopperWapper>
                </div>
            )}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
            hideOnClick={hideOnClick}
        >
            {children}
        </HeadlessTippy>
    );
}

export default Menu;
