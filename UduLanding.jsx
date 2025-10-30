// Urdu_Landing_Site.jsx
// React single-file landing page using Tailwind CSS
// Instructions (Urdu):
// 1) Is file ko apne React project (Vite/CRA/Next) mein `src/components/UrduLanding.jsx` ke naam se save karein.
// 2) Tailwind setup karne ke liye: https://tailwindcss.com/docs/guides/vite
// 3) Agar aap Vite use kar rahe hain: `npm create vite@latest`, project banayein, Tailwind add karein, phir is component ko App.jsx mein import kar ke render karein.
// 4) Deployment: Vercel/Netlify par seedha push kar dijiye — dono platforms React apps ko seedha deploy kar dete hain.

import React from 'react';

export default function UrduLanding() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="sticky top-0 bg-white shadow-sm z-30">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">RB</div>
            <div>
              <h1 className="font-semibold">Aapki Website</h1>
              <p className="text-xs text-gray-500">Chhota sa business / portfolio</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#home" className="hover:text-indigo-600">Home</a>
            <a href="#features" className="hover:text-indigo-600">Features</a>
            <a href="#gallery" className="hover:text-indigo-600">Gallery</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <a href="mailto:info@example.com" className="px-4 py-2 bg-indigo-600 text-white rounded-md">Contact Karein</a>
          </nav>
          <div className="md:hidden">
            {/* simple mobile menu placeholder */}
            <button aria-label="menu" className="p-2 rounded-md border">☰</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main id="home" className="max-w-6xl mx-auto px-5 py-16">
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Aapka Business — Online</h2>
            <p className="mt-4 text-gray-600">Main aapke liye aik simple, tez aur responsive website bana deta hoon — jo mobile aur desktop dono par acchi lage. Contact form, gallery, pricing aur footer already tayar hain.</p>

            <div className="mt-6 flex gap-4">
              <a href="#contact" className="px-6 py-3 bg-indigo-600 text-white rounded-md shadow">Order Karein</a>
              <a href="#features" className="px-6 py-3 border rounded-md">Features Dekhein</a>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>• Fast and SEO-friendly</li>
              <li>• Responsive (mobile-first)</li>
              <li>• Simple contact form (mailto / integrate with Formspree)</li>
            </ul>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=example" alt="hero" className="w-full h-72 object-cover"/>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mt-16">
          <h3 className="text-2xl font-bold">Khaas Features</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <FeatureCard title="Responsive Design" desc="Har screen par behtar nazar aata hai — mobile se desktop tak." />
            <FeatureCard title="Fast Loading" desc="Optimized images aur simple code se tez load hota hai." />
            <FeatureCard title="Contact Form" desc="Seedha aapke email par messages — ya third-party service se connect karein." />
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="mt-16">
          <h3 className="text-2xl font-bold">Gallery</h3>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {['1','2','3','4'].map((i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-sm">
                <img src={`https://source.unsplash.com/random/800x600?sig=${i}`} alt={`g${i}`} className="w-full h-40 object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-16 bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold">Contact Form</h3>
          <p className="text-gray-600 mt-2">Neeche form submit karen — ya seedha email bhejen: <a href="mailto:info@example.com" className="text-indigo-600">info@example.com</a></p>

          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e)=>{e.preventDefault(); alert('Form submit: is demo mein mailto ya backend integration add karein.');}}>
            <input required name="name" placeholder="Naam" className="p-3 border rounded-md" />
            <input required name="email" type="email" placeholder="Email" className="p-3 border rounded-md" />
            <input name="phone" placeholder="Phone (optional)" className="p-3 border rounded-md md:col-span-2" />
            <textarea required name="message" placeholder="Message" rows={4} className="p-3 border rounded-md md:col-span-2" />
            <div className="md:col-span-2 flex gap-3">
              <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded-md">Send</button>
              <a href="mailto:info@example.com" className="px-6 py-3 border rounded-md">Email se bhejen</a>
            </div>
          </form>
        </section>

        {/* Footer */}
        <footer className="mt-16 py-8 text-sm text-gray-600">
          <div className="flex flex-col md:flex-row md:justify-between items-start gap-4">
            <div>
              <strong>Aapki Website</strong>
              <p className="mt-1">© {new Date().getFullYear()} Sab haqooq mehfooz.</p>
            </div>
            <div className="space-x-4">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function FeatureCard({title, desc}){
  return (
    <div className="p-5 bg-white rounded-lg shadow-sm">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  );
}
