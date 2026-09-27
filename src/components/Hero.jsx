const Hero = () => {
  return (
    <section className="bg-[#eef4f1] py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-[#c9a15a]/40 bg-[#c9a15a]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0c3d3d]">
            Learn Quran online
          </span>

          <h1 className="text-4xl font-black tracking-tight text-[#0c3d3d] md:text-6xl">
            Hero section placeholder
          </h1>

          <p className="max-w-xl text-lg text-[#0c3d3d]/70">
            This is a placeholder area for the main academy headline, subtext, and call-to-action content.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-[#c9a15a] px-6 py-3 font-semibold text-[#0c3d3d] shadow-sm transition hover:bg-[#d8b777]">
              Get Started
            </button>
            <button className="rounded-full border border-[#0c3d3d]/20 bg-white px-6 py-3 font-semibold text-[#0c3d3d] transition hover:border-[#0c3d3d]/40">
              View Courses
            </button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#0c3d3d]/10 bg-white p-8 shadow-lg shadow-[#0c3d3d]/5">
          <div className="rounded-[1.5rem] border border-dashed border-[#c9a15a]/50 bg-[#eef4f1] p-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0c3d3d]/60">
              Hero visual
            </p>
            <div className="mt-6 h-52 rounded-2xl bg-gradient-to-br from-[#0c3d3d] via-[#0e5959] to-[#c9a15a] opacity-90" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
