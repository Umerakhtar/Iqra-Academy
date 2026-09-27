const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-[#eef4f1] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0e5959]">How it works</p>
          <h2 className="mt-3 text-3xl font-bold text-[#0c3d3d] md:text-4xl">
            HowItWorks section placeholder
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((step) => (
            <div key={step} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#0c3d3d]/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#c9a15a] font-bold text-[#0c3d3d]">
                {step}
              </div>
              <h3 className="text-xl font-semibold text-[#0c3d3d]">Step {step}</h3>
              <p className="mt-3 text-[#0c3d3d]/70">
                Placeholder copy describing the enrollment and learning journey.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
