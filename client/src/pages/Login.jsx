import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import loginImg from "../assets/login.jpg";
import { Link } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, user } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) return;
        dispatch(loginUser(formData));
    };

    useEffect(() => {
        if (user) { 
            navigate("/");
        }
    }, [user, navigate]); // Navigate only when `user` is updated

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <div className="flex w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-lg md:flex-row flex-col">
                {/* Form Section */}
                <div className="w-full p-12 md:w-1/2">
                    <h2 className="text-3xl font-semibold text-gray-700">Welcome Back 👋</h2>
                    <p className="mt-2 text-sm text-gray-500">Sign in to continue your journey!</p>

                    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="johndoe@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                required
                                autoFocus
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="text-sm font-medium text-gray-600">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="********"
                                value={formData.password}
                                onChange={handleChange}
                                className="mt-1 w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                required
                            />
                        </div>

                        {error && (
                            <p className="mt-2 text-sm text-red-500 bg-red-100 p-2 rounded">
                                {typeof error === "string" ? error : "Login failed. Please try again."}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className={`mt-6 w-full px-4 py-2 text-white rounded-md transition ${
                                loading ? "bg-purple-400 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700"
                            }`}
                        >
                            {loading ? "Signing In..." : "Sign In"}
                        </button>
                    </form>

                    <p className="mt-4 text-sm text-gray-600">
                        Don't have an account? <Link to="/signup" className="text-purple-600 hover:underline">Sign Up</Link>
                    </p>
                </div>

                {/* Image Section */}
                <div className="hidden md:block md:w-1/2">
                    <img src={loginImg} alt="Login" className="h-full w-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default Login;
