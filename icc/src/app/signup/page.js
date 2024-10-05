'use client'
import Image from "next/image";
import profile from '../../../public/icc.jpg';
import { useState } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

export default function Signup() {
  const [value, setValue] = useState(null);
  const options = countryList().getData();
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const [firstname, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); 

  const changeHandler = (value) => {
    setValue(value);
  };

  const addProduct = async (e) => {
    e.preventDefault();
    
    // Simple regex for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(email)) {
      setMessageType('error');
      setMessage('Please enter a valid email address.');
      return;
    }
  
    if (password !== confirmPassword) {
      setMessageType('error');
      setMessage('Passwords do not match. Please ensure both fields are identical.');
      return;
    }
  
    const id = Date.now().toString();
    let result = await fetch('http://localhost:3000/api/Adduser', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        id, 
        first_name: firstname, 
        last_name: lastName, 
        email, 
        password, 
        country: value?.label // Storing the country name
      })
    });
  
    result = await result.json();
    if (result.success) {
      setMessageType('success');
      setMessage('New user added successfully!');
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setValue(null); // Clear the country field
    } else {
      setMessageType('error');
      setMessage(result.error);
    }
  };
  

  return (
    <main className="min-h-screen bg-sky-700 flex items-center justify-center">
      <div className="h-full w-full max-w-md bg-white mx-auto p-8 rounded-lg shadow-lg">
        <div className="flex justify-center items-center mb-6">
          <Image src={profile} alt="Profile" width={60} height={50} />
        </div>

        <form onSubmit={addProduct}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="First Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Last Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Email"
            />
          </div>

        

          <div className="mb-4 mt-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
              Country
            </label>
            <Select 
              options={options} 
              value={value} 
              onChange={changeHandler} 
              className="w-full"
              placeholder="Select your country"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Password"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Confirm Password"
            />
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="checkbox1"
              checked={isChecked1}
              onChange={(e) => setIsChecked1(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="checkbox1" className="text-gray-700 text-sm ">
              I consent to ICC keeping me informed by email about products, services, and content.
            </label>
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="checkbox2"
              checked={isChecked2}
              onChange={(e) => setIsChecked2(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="checkbox2" className="text-gray-700 text-sm ">
              I have read and understood the Privacy Policy and agree to the Terms and Conditions.
            </label>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={!isChecked1 || !isChecked2}
              className={`w-60 font-bold py-2 px-4 rounded-lg transition duration-300 
                ${isChecked1 && isChecked2 ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
            >
              Create Account
            </button>
          </div>

          {message && (
            <div className={`mt-4 text-center font-semibold ${messageType === 'success' ? 'text-green-500' : 'text-red-500'}`}>
              {message}
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
