import PropTypes from "prop-types";
import Header from "../components/Header";
const AuthLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="auth-layout">
        <div className="auth-layout__content">{children}</div>
      </div>
    </>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
