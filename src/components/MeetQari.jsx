const MeetQari = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] bg-[#eef4f1] p-8 ring-1 ring-[#0c3d3d]/10">
          <div className="h-80 rounded-[1.5rem] bg-gradient-to-br from-[#0c3d3d] via-[#0e5959] to-[#c9a15a]" />
        </div>

        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0e5959]">Meet our Qari</p>
          <h2 className="text-3xl font-bold text-[#0c3d3d] md:text-4xl">
            MeetQari section placeholder
          </h2>
          <p className="text-[#0c3d3d]/70">
            This section is reserved for teacher profile details, qualifications, and a short introduction.
          </p>
          <div className="rounded-2xl border border-[#0c3d3d]/10 bg-[#eef4f1] p-5 text-[#0c3d3d]">
            <p className="font-semibold">Profile card placeholder</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeetQari
