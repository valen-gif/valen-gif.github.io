import { useState } from "react"
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()
const [data, setData] = useState({
  name: '',
  email: '',
  password: '',
})

const registerUser = async (e) => {
  e.preventDefault()
  const {name, email, password} = data
  try {
    const {data} = await axios.post('/register', {
      name, email, password
    })
    if(data.error) {
      toast.error(data.error)
    } else {
      setData({})
      toast.success('Login Successful. Enjoy!')
      navigate('/login')
    }
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-gray-1000 rounded-lg shadow-md">
      <form onSubmit={registerUser} className="mb-4">
        <label className="black text-white text-sm font-semibold mb-2">Name</label>
        <input className="w-full px-3 py-2 border rounded-lg bg-gray-900 focus:border-orange-800" type='text' placeholder='enter name...' value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
        <label className="black text-white text-sm font-semibold mb-2">Email</label>
        <input className="w-full px-3 py-2 border rounded-lg bg-gray-900 focus:border-orange-800" type='email' placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
        <label className="black text-white text-sm font-semibold mb-2">Password</label>
        <input className="w-full px-3 py-2 border rounded-lg bg-gray-900 focus:border-orange-800" type='password' placeholder='enter password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
        <button type='submit' className="bg-orange-600 text-whte font-semibold px-4 py-2 rounded-lg hover:bg-orange-800 focus:outline-white">Submit</button>
      </form>
    </div>
  )
}
