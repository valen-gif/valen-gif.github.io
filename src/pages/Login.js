import { useState } from "react"
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

export default function Login() {
const navigate = useNavigate()
const [data, setData] = useState({
  email: '',
  password: '',
})

const loginUser = async (e) => {
  e.preventDefault()
  const {email, password} = data
  try {
    const {data} = await axios.post('/login', {
      email, password
    });
    if(data.error){
      toast.error(data.error)
    } else {
      setData({});
      navigate('/dashboard')
    }
  } catch (error) {
    
  }
}

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-gray-1000 rounded-lg shadow-md">
      <form onSubmit={loginUser} className="mb-4">
      <label className="black text-white text-sm font-semibold mb-2">Email</label>
        <input className="w-full px-3 py-2 border rounded-lg bg-gray-900 focus:border-orange-800" type='email' placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
        <label className="black text-white text-sm font-semibold mb-2">Password</label>
        <input className="w-full px-3 py-2 border rounded-lg bg-gray-900 focus:border-orange-800" type='password' placeholder='enter password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
        <button type='submit' className="bg-orange-600 text-whte font-semibold px-4 py-2 rounded-lg hover:bg-orange-800 focus:outline-white">Login</button>
      </form>
    </div>
  )
}
