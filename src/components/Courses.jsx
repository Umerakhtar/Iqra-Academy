import { courses } from '../data/courses'

const Courses = () => {
  return (
    <section id="courses" className="bg-[#eef4f1] py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0e5959]">Courses</p>
          <h2 className="mt-3 text-3xl font-bold text-[#0c3d3d] md:text-4xl">
            Our Quran courses
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <article key={course.id} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#0c3d3d]/10">
              <img
                src={course.image}
                alt={course.title}
                className="mb-4 h-36 w-full rounded-2xl object-cover"
              />
              <h3 className="text-xl font-semibold text-[#0c3d3d]">{course.title}</h3>
              <p className="mt-3 text-[#0c3d3d]/70">{course.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses
