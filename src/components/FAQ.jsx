const FAQ = () => {
  return (
    <section id="faq" className="bg-[#eef4f1] py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0e5959]">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold text-[#0c3d3d] md:text-4xl">
            FAQ section placeholder
          </h2>
        </div>

        <div className="space-y-4">
          {['Question 1', 'Question 2', 'Question 3'].map((item) => (
            <div key={item} className="rounded-2xl border border-[#0c3d3d]/10 bg-white p-5">
              <h3 className="font-semibold text-[#0c3d3d]">{item}</h3>
              <p className="mt-2 text-[#0c3d3d]/70">
                Placeholder answer for common student questions.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
