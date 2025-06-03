export default function Header() {
  return (
    <header className="bg-primary text-white py-6 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1 className="font-nabla text-4xl tracking-wide text-accent">
          Super Coders
        </h1>
        <nav className="space-x-6">
          <a href="#services" className="hover:text-neon transition-colors">
            Services
          </a>
          <a href="#contact" className="hover:text-neon transition-colors">
            Contact
          </a>
          <a href="#inquiry" className="hover:text-neon transition-colors">
            Enquiry
          </a>
        </nav>
      </div>
    </header>
  );
}
