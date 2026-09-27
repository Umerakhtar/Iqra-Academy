const Courses = () => {
  return (
    <section id="courses" className="bg-[#eef4f1] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0e5959]">Courses</p>
          <h2 className="mt-3 text-3xl font-bold text-[#0c3d3d] md:text-4xl">
            Courses section placeholder
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {['Course A', 'Course B', 'Course C'].map((course) => (
            <article key={course} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#0c3d3d]/10">
              <div className="mb-4 h-36 rounded-2xl bg-gradient-to-br from-[#0c3d3d] to-[#0e5959]" />
              <h3 className="text-xl font-semibold text-[#0c3d3d]">{course}</h3>
              <p className="mt-3 text-[#0c3d3d]/70">
                Placeholder description for the course overview and learning outcomes.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses
