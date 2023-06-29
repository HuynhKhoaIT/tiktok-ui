import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import styles from './Images.module.scss';
import images from '../../assets/images';
const Image = forwardRef(({ src, alt, className, fallback = images.noImage, ...props }, ref) => {
    const [_fallback, setFallback] = useState('');
    const handleImage = () => {
        setFallback(fallback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={_fallback || src}
            alt={alt}
            {...props}
            onError={handleImage}
        />
    );
});

export default Image;
