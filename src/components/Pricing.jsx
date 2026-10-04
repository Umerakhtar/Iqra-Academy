const Pricing = () => {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-[#0c3d3d] md:text-4xl">Pricing</h2>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md rounded-3xl border border-[#0c3d3d]/10 bg-[#eef4f1] p-8 text-center shadow-sm">
            <h3 className="text-xl font-semibold text-[#0c3d3d]">Monthly Plan</h3>
            <div className="mt-4 text-5xl font-black text-[#0c3d3d]">$30<span className="text-lg font-medium text-[#0c3d3d]/60">/month</span></div>
            <ul className="mt-5 space-y-2 text-left text-sm text-[#0c3d3d]/75">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#0c3d3d]" aria-hidden="true" />
                <span>Each student will have a 30-minute one-on-one live session, 5 days a week from Monday to Friday.</span>
              </li>
            </ul>
            <p className="mt-3 text-[#0c3d3d]/70">One-to-one Quran learning with qualified teachers.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
