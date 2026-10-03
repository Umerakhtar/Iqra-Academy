const CTA = () => {
  return (
    <section className="bg-[#0c3d3d] py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-[#0e5959] px-6 py-12 text-center text-white shadow-lg shadow-[#0c3d3d]/20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c9a15a]">GET STARTED TODAY</p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">Ready to begin?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Start learning Quran with Tajweed from our qualified teachers.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="https://wa.me/923450501993" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#c9a15a] px-5 py-3 text-center font-semibold text-[#0c3d3d] shadow-sm transition hover:bg-[#d8b777]">
              Enroll now via WhatsApp
            </a>
            <a href="https://us05web.zoom.us/launch/chat?src=direct_chat_link&email=iqraonlinequranacademy360%40gmail.com" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-5 py-3 text-center font-semibold text-white transition hover:border-white/60 hover:bg-white/10">
              Join on Zoom
            </a>
            <a href="https://teams.live.com/l/invite/FEAEux_-27OUiDaKQ?v=g1" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-5 py-3 text-center font-semibold text-white transition hover:border-white/60 hover:bg-white/10">
              Join on Teams
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
