import { useState } from 'react';
import axios, { formToJSON } from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [firstName , setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [avatar, setAvatar] = useState('');

const navigate = useNavigate();
const handleSignUp = async () => {
    try {
        
        await axios.post("http://localhost:3000/api/user/signup",  {
            firstName, lastName, email, password, age, gender},{withCredentials: true,
        });
        navigate("/");
    } catch (err) {
        console.error("Signup Error:", err);
    }
}
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100" >
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">

                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">USER SIGNUP</h1>

                {/* <div className="mb-4">
                    <label className="block text-gray-700">Upload Avatar:</label>
                    <input type="file" accept="image/*" onChange={(e) => setAvatar(e.target.files[0])}
                        className="w-full p-3 border rounded-lg" />
                </div> */}

                <input type="text" placeholder="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <input type="text" placeholder="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>

                <input type="text" placeholder="age" value={age} onChange={(e) => setAge(e.target.value)} className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <div className="mb-4">
                    <label className="block text-gray-700">Gender:</label>
                    <div className="flex gap-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                onChange={(e) => setGender(e.target.value)}
                                className="mr-2"
                            />
                            Male
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                onChange={(e) => setGender(e.target.value)}
                                className="mr-2"
                            />
                            Female
                        </label>
                    </div>
                </div>

                
                

                <button onClick={handleSignUp} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">  Sign Up </button>

            </div>
        </div>
    );
};

export default SignUp;
