import PropTypes from 'prop-types';
import SuggestedAccounts from '../../../../components/SuggestedAccounts';
function Menu({ children }) {
    return (
        <>
            <nav>{children}</nav>
            <SuggestedAccounts label="Suggested accounts" />
        </>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Menu;
