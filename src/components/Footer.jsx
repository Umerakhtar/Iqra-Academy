const Footer = () => {
  return (
    <footer className="bg-[#0c3d3d] py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-xl font-bold text-[#c9a15a]">Iqra Online Academy</div>
          <p className="mt-2 text-white/70">Footer placeholder for contact details and links.</p>
        </div>

        <div className="flex gap-6 text-sm text-white/80">
          <a href="#" className="transition hover:text-white">About</a>
          <a href="#" className="transition hover:text-white">Courses</a>
          <a href="#" className="transition hover:text-white">FAQ</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
