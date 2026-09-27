const WhyUs = () => {
  return (
    <section id="why-us" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0e5959]">Why us</p>
          <h2 className="mt-3 text-3xl font-bold text-[#0c3d3d] md:text-4xl">
            WhyUs section placeholder
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {['Feature 1', 'Feature 2', 'Feature 3'].map((item) => (
            <div key={item} className="rounded-2xl border border-[#0c3d3d]/10 bg-[#eef4f1] p-6">
              <div className="mb-4 h-12 w-12 rounded-xl bg-[#c9a15a]/15" />
              <h3 className="mb-2 text-xl font-semibold text-[#0c3d3d]">{item}</h3>
              <p className="text-[#0c3d3d]/70">
                Placeholder content for a trust-building benefit or value proposition.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
