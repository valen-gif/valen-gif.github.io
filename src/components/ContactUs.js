
export default function ContactUs() {
  return (
    <div className="max-w-md w-full mx-auto p-6 bg-gray-1000 rounded-lg shadow-md" id="contact-us">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">Contact Us</h2>
      <form action="">
        <div className="mb-4">
          <label className="black text-white text-sm font-semibold mb-2">Your Name</label>
          <input placeholder="John Doe" className="w-full px-3 py-2 border rounded-lg bg-gray-900 focus:border-orange-800" required type="text"></input>
        </div>
        <div className="mb-4">
          <label className="black text-white text-sm font-semibold mb-2">Your Email</label>
          <input placeholder="name@example.com" className="w-full px-3 py-2 border rounded-lg bg-gray-900 focus:border-orange-800" required type="email"></input>
        </div>
        <div className="mb-4">
          <label className="black text-white text-sm font-semibold mb-2">Your Message</label>
          <textarea rows='4' placeholder="Hello, I'm..." className="w-full px-3 py-2 border rounded-lg bg-gray-900 focus:border-orange-800" required type="text"></textarea>
        </div>
        <button type="submit" className="bg-orange-600 text-whte font-semibold px-4 py-2 rounded-lg hover:bg-orange-800 focus:outline-white">Send Message</button>
      </form>
    </div>
  )
}
