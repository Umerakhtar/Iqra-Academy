const Pricing = () => {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0e5959]">Pricing</p>
          <h2 className="mt-3 text-3xl font-bold text-[#0c3d3d] md:text-4xl">
            Pricing section placeholder
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {['Starter', 'Standard', 'Premium'].map((plan) => (
            <div key={plan} className="rounded-3xl border border-[#0c3d3d]/10 bg-[#eef4f1] p-6">
              <h3 className="text-xl font-semibold text-[#0c3d3d]">{plan}</h3>
              <div className="mt-4 text-4xl font-black text-[#0c3d3d]">$0</div>
              <p className="mt-2 text-[#0c3d3d]/70">Placeholder pricing description.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
