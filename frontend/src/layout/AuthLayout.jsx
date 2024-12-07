import PropTypes from 'prop-types';

const AuthLayout = ({ children }) => {
    return (
        <div className="auth-layout">
            <div className="auth-layout__content">
                {children}
            </div>
        </div>
    );
};

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthLayout;