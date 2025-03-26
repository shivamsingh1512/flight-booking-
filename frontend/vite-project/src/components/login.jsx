import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
const navigate = useNavigate();
const fetchData=async()=>{
    try{
        const res=await axios.post("http://localhost:3000/api/user/login",{

            email,
            password,

        },{withCredentials:true});
        navigate('/');
    }catch(err){}
}
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100" >
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">USER LOGIN</h1>
                
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <button onClick={fetchData} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">  Sign In </button>
            </div>
        </div>
    );
};

export default Login;
