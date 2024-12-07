import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../layout/AuthLayout';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        if (email === 'admin@example.com' && password === 'password') {
            navigate('/admin');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <AuthLayout>
            <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
                <div className="card shadow-lg p-4" style={{ maxWidth: '400px', width: '100%' }}>
                    <h2 className="card-title text-center mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && (
                            <div className="alert alert-danger text-center py-2" role="alert">
                                {error}
                            </div>
                        )}
                        <button type="submit" className="btn btn-primary w-100">
                            Login
                        </button>
                    </form>
                    <p className="text-center mt-3">
                        Don&#39;t have an account? <a href="/register" className="text-decoration-none">Register</a>
                    </p>
                </div>
            </div>
        </AuthLayout>
    );
};

export default Login;
