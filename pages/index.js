import { Button } from "@/components/ui/button";

export default function FixMy() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="p-6 shadow-sm flex items-center justify-between bg-white sticky top-0 z-10">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="GetFixMy Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold tracking-tight">GetFixMy</h1>
        </div>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:underline">About</a>
          <a href="#features" className="hover:underline">How It Works</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section className="px-6 sm:px-12 py-24 text-center bg-gradient-to-br from-sky-50 to-white">
        <h2 className="text-5xl font-bold mb-4 leading-tight">Fix Anything, Anywhere. Instantly.</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-6">
          GetFixMy is your global platform for fast, verified and personal repair & service solutions – powered by humans and enhanced by AI.
        </p>
        <Button className="text-white bg-black px-6 py-3 rounded-xl text-lg hover:bg-gray-800 transition">Get Started</Button>
      </section>

      <section id="features" className="px-6 sm:px-12 py-24 bg-white text-center">
        <h3 className="text-4xl font-semibold mb-4">How It Works</h3>
        <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-600">
          Whether you're a homeowner, business, traveler or remote resort – we match you with the right expert fast. No apps, no forms, just talk.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          <div className="p-6 rounded-xl bg-gray-50 shadow">
            <h4 className="font-bold mb-2">🗣️ AI Voice Concierge</h4>
            <p className="text-gray-600">Just speak. Our AI understands your need and connects you to the right pro.</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-50 shadow">
            <h4 className="font-bold mb-2">🔍 Verified Experts</h4>
            <p className="text-gray-600">Electricians, plumbers, techs – fully verified and ready when you are.</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-50 shadow">
            <h4 className="font-bold mb-2">🌍 Global Service</h4>
            <p className="text-gray-600">Available anywhere. Local professionals, international quality.</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-50 shadow">
            <h4 className="font-bold mb-2">💼 For Everyone</h4>
            <p className="text-gray-600">From households to hotels to field operations – we serve them all.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 sm:px-12 py-24 bg-sky-50 text-center">
        <h4 className="text-3xl font-bold mb-4">Let's Get You Fixed</h4>
        <p className="mb-8 text-lg text-gray-700 max-w-2xl mx-auto">Leave us a message. We’ll get back in minutes – not days.</p>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your name / company"
            className="w-full p-4 border border-gray-300 rounded-xl text-gray-800"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-4 border border-gray-300 rounded-xl text-gray-800"
          />
          <textarea
            placeholder="What do you need help with?"
            className="w-full p-4 border border-gray-300 rounded-xl text-gray-800"
            rows={4}
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-xl hover:bg-gray-800 transition text-lg"
          >
            Submit Request
          </button>
        </form>
      </section>

      <footer className="p-6 text-center text-sm text-gray-500 bg-white border-t">
        © {new Date().getFullYear()} GetFixMy — Trusted Worldwide.
      </footer>
    </main>
  );
}
