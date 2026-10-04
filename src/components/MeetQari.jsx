import qariImage from '../assets/images/meet-qari.webp'

const MeetQari = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="mx-auto w-full max-w-[430px] rounded-[2rem] bg-[#eef4f1] p-8 ring-1 ring-[#0c3d3d]/10">
          <img
            src={qariImage}
            alt="Qari Ali Riaz"
            width={1084}
            height={1280}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
          />
        </div>

        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0e5959]">MEET OUR QARI</p>
          <h2 className="text-3xl font-bold text-[#0c3d3d] md:text-4xl">
            Learn the Quran with Care, Patience &amp; Understanding
          </h2>
          <p className="text-[#0c3d3d]/70">
            Assalamu Alaikum! I&apos;m your Qari and Quran teacher, dedicated to helping students build a strong and meaningful connection with the Quran.
          </p>
          <p className="text-[#0c3d3d]/70">
            My aim is to create a comfortable and respectful learning environment where students can learn Quran reading, pronunciation, Tajweed, and basic Islamic teachings at their own pace.
          </p>
          <div className="space-y-3 text-[#0c3d3d]">
            <h3 className="font-semibold">What you can expect:</h3>
            <ul className="list-disc space-y-2 pl-5 marker:text-[#c9a15a]">
              <li>Patient and friendly teaching</li>
              <li>Step-by-step Quran learning</li>
              <li>Focus on correct pronunciation and Tajweed</li>
              <li>Classes suitable for beginners</li>
              <li>Personal attention to every student</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeetQari
