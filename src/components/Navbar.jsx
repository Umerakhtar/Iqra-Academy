import logoImage from '../assets/images/logo.png.jpeg'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-[#0c3d3d]/10 bg-[#eef4f1]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <img src={logoImage} alt="Iqra Online Academy" className="h-12 w-auto" />

        <nav className="hidden items-center gap-6 text-sm font-medium text-[#0c3d3d]/80 md:flex">
          <a href="#courses" className="transition hover:text-[#0e5959]">Courses</a>
          <a href="#pricing" className="transition hover:text-[#0e5959]">Pricing</a>
          <a href="#faq" className="transition hover:text-[#0e5959]">FAQ</a>
        </nav>

        <a
          href="https://wa.me/923450501993"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#0c3d3d] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0e5959]"
        >
          Enroll Now
        </a>
      </div>
    </header>
  )
}

export default Navbar
