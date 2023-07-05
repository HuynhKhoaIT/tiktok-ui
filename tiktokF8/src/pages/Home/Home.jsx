import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ListVideo from './ListVideo';
import VideoItem from '../../components/VideoItem/VideoItem';
import { useEffect, useState } from 'react';
import * as videoServive from '../../services/videoService';
const cx = classNames.bind(styles);

function Home() {
    const [video, setVideo] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        const fetchApt = async () => {
            const result = await videoServive.getListVideo('for-you', page);
            {
                page > 1 ? setVideo((prev) => [...prev, result]) : setVideo(result);
            }
        };

        fetchApt();
    }, [page]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function handleScroll() {
        if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
            setPage((page) => page + 1);
        }
    }
    return (
        <div className={cx('wrapper')}>
            <ListVideo>
                {video.flat().map((item) => (
                    <VideoItem key={item.id} data={item} />
                ))}
            </ListVideo>
        </div>
    );
}

export default Home;
