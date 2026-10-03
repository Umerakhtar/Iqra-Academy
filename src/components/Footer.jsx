const Footer = () => {
  return (
    <footer className="bg-[#0c3d3d] py-12 text-white">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-xl font-bold text-[#c9a15a]">Iqra Online Academy</div>
          <div className="mt-2 flex flex-col gap-1 text-white/70 sm:flex-row sm:gap-4">
            <a href="https://wa.me/923450501993" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
              WhatsApp: +92 345 0501993
            </a>
            <a href="mailto:iqraonlinequranacademy360@gmail.com" className="transition hover:text-white">
              Email: iqraonlinequranacademy360@gmail.com
            </a>
          </div>
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
