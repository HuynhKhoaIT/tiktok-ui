import PropTypes from 'prop-types';
function ListVideo({ children }) {
    return (
        <>
            <nav>{children}</nav>
        </>
    );
}
ListVideo.propTypes = {
    children: PropTypes.node.isRequired,
};
export default ListVideo;
