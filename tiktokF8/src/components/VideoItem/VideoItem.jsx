import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';
import Image from '../Images';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMusic,
    faHeart,
    faCommentDots,
    faBookmark,
    faShare,
    faCheckCircle,
    faPlay,
    faPause,
    faVolumeXmark,
    faVolumeHigh,
} from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button';
import { useEffect, useRef, useState } from 'react';
import { wrapper as PopperWapper } from '../../Layout/components/Popper';
import AccountPreview from '../SuggestedAccounts/AccountPreview';
const cx = classNames.bind(styles);

function VideoItem({ data }) {
    const videoRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVolume, setIsVolume] = useState(true);
    const [volumes, setVolumes] = useState(0.8);
    console.log(volumes);

    useEffect(() => {
        videoRef.current.volume = volumes;
    }, [volumes]);

    const handlePlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };
    const handleVolume = () => {
        console.log(videoRef.current.volume);
        if (isVolume === false) {
            setVolumes(1);
            setIsVolume(true);
        } else {
            setVolumes(0);
            setIsVolume(false);
        }
    };
    const renderPreview = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWapper className={cx('menu-wrapper')}>
                <AccountPreview />
            </PopperWapper>
        </div>
    );

    return (
        <div className={cx('wrapper')}>
            <Tippy interactive delay={[800, 0]} offset={[-10, 0]} render={renderPreview} placement="bottom-start">
                <Image className={cx('avatar')} src={data.user.avatar} alt="avatar" />
            </Tippy>
            <div className={cx('content-container')}>
                <div className={cx('text-info')}>
                    <div className={cx('header')}>
                        <Tippy
                            interactive
                            delay={[800, 0]}
                            offset={[-10, 0]}
                            render={renderPreview}
                            placement="bottom-start"
                        >
                            <div className={cx('author')}>
                                <Link to={`/@${data.user.nickname}`} className={cx('author-nickname')}>
                                    {data.user.nickname}
                                </Link>
                                {data.user.tick && (
                                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                                )}
                                <p className={cx('author-name')}>{data.user.first_name + ' ' + data.user.last_name}</p>
                            </div>
                        </Tippy>
                        <div className={cx('div-container')}>
                            <span className={cx('caption')}>{data.description}</span>
                            <Link to="/tag" className={cx('tag')}>
                                #xuhuong
                            </Link>
                            <Link to="/tag" className={cx('tag')}>
                                #xuhuong
                            </Link>
                            <Link to="/tag" className={cx('tag')}>
                                #xuhuong
                            </Link>
                        </div>
                        <div className={cx('music')}>
                            <FontAwesomeIcon icon={faMusic} className={cx('icon-music')} />
                            <p className={cx('title-mussic')}>{data.music}</p>
                        </div>
                    </div>
                    <div>
                        {data.is_followed && (
                            <Button className={cx('btn')} outline small>
                                Follow
                            </Button>
                        )}
                        {!data.is_followed && (
                            <Button className={cx('btn', 'btn-following')} outline small>
                                Following
                            </Button>
                        )}
                    </div>
                </div>
                <div className={cx('video-item-player')}>
                    <div className={cx('videoControl')}>
                        <div
                            className={cx(
                                `${
                                    data.meta.video.resolution_x < 600
                                        ? 'videoControl-default'
                                        : 'videoControl-default-600'
                                }`,
                            )}
                        >
                            <Image src={data.thumb_url} className={cx('image')} />
                            <video ref={videoRef} className={cx('video')} loop>
                                <source src={data.file_url} />
                            </video>
                        </div>
                        <div className={cx('btn-play')} onClick={handlePlay}>
                            {isPlaying === true ? (
                                <FontAwesomeIcon icon={faPause} />
                            ) : (
                                <FontAwesomeIcon icon={faPlay} />
                            )}
                        </div>
                        <div className={cx('btn-volume')}>
                            <div className={cx('volume__control')}>
                                <div className={cx('volume__control-circle')}></div>
                                <div className={cx('volume__control-progess')}></div>
                                <div className={cx('volume__control-bar')}></div>
                            </div>

                            {isVolume === false ? (
                                <div className={cx('icon-colume')} onClick={handleVolume}>
                                    <FontAwesomeIcon icon={faVolumeXmark} />
                                </div>
                            ) : (
                                <div className={cx('icon-colume')} onClick={handleVolume}>
                                    <FontAwesomeIcon icon={faVolumeHigh} />
                                </div>
                            )}
                        </div>
                        <div className={cx('video__control-container')}>
                            <div className={cx('seek__bar')}>
                                <div className={cx('seek__bar-progess')}></div>
                                <div className={cx('seek__bar-circle')}></div>
                                <div className={cx('seel__bar-bar')}></div>
                            </div>
                            <div className={cx('seek__bar-time')}>01:07/01:11</div>
                        </div>
                        <div className={cx('report')}>
                            <FontAwesomeIcon icon={faFlag} />
                            <p>Report</p>
                        </div>
                    </div>

                    <div className={cx('recomend-list-item')}>
                        <div className={cx('recomend-item')}>
                            <FontAwesomeIcon icon={faHeart} className={cx('recomend-icon')} />
                            <span>{data.likes_count}</span>
                        </div>
                        <div className={cx('recomend-item')}>
                            <FontAwesomeIcon icon={faCommentDots} className={cx('recomend-icon')} />
                            <span>{data.comments_count}</span>
                        </div>
                        <div className={cx('recomend-item')}>
                            <FontAwesomeIcon icon={faBookmark} className={cx('recomend-icon')} />
                            <span>891</span>
                        </div>
                        <div className={cx('recomend-item')}>
                            <FontAwesomeIcon icon={faShare} className={cx('recomend-icon')} />
                            <span>{data.shares_count}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
