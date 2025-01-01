import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import background1 from "../assets/Background1.mp3"

export default function Dashboard() {
    const {user} = useContext(UserContext)
  return (
    <div className="max-w-md w-full mx-auto p-6 bg-gray-1000 rounded-lg shadow-md mb-4">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">Dashboard</h1>
    {!!user && (<h2 className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">Hello, {user.name}!</h2>)}

    <h2 className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">Here's an Audio background</h2>
    <audio controls loop className="flex justify-center">
            <source src={background1} type="audio/mp3" />
            Your browser does not support the video tag.
    </audio>
    </div>


  )
}

