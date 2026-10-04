import qariImage from '../assets/images/qari-ali-riaz.webp'

const Hero = () => {
  return (
    <section className="bg-[#eef4f1] py-20">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 lg:grid-cols-2">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-[#c9a15a]/40 bg-[#c9a15a]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0c3d3d]">
            Learn Quran online
          </span>

          <h1 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight text-[#0c3d3d]">
            Qari Ali Riaz
          </h1>

          <p
            dir="rtl"
            lang="ur"
            className="-mt-4 text-[15px] text-[#c9a15a]"
            style={{ fontFamily: "'Noto Nastaliq Urdu', serif", fontWeight: 600 }}
          >
            جامعہ رضویہ ضیاءُالعلوم
          </p>

          <p className="max-w-xl text-lg text-[#0c3d3d]/70">
            I am the Founder of Iqra Online Academy 360. We are providing Quran education to students in the UK, USA, and Canada since 2020. Our mission is to teach Quran with Tajweed to every Muslim kid and adult in a very easy and loving way. We have a team of qualified Hafiz and Qari male/female.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="https://wa.me/923450501993" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#c9a15a] px-5 py-3 text-center font-semibold text-[#0c3d3d] shadow-sm transition hover:bg-[#d8b777]">
              Enroll now via WhatsApp
            </a>
            <a href="https://us05web.zoom.us/launch/chat?src=direct_chat_link&email=iqraonlinequranacademy360%40gmail.com" target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#0c3d3d]/20 bg-white px-5 py-3 text-center font-semibold text-[#0c3d3d] transition hover:border-[#0c3d3d]/40">
              Join on Zoom
            </a>
            <a href="https://teams.live.com/l/invite/FEAEux_-27OUiDaKQ?v=g1" target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#0c3d3d]/20 bg-white px-5 py-3 text-center font-semibold text-[#0c3d3d] transition hover:border-[#0c3d3d]/40">
              Join on Teams
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-[3/2] w-full max-w-[520px] overflow-hidden rounded-[2rem] border border-[#0c3d3d]/10 bg-[#dce8e2] shadow-lg shadow-[#0c3d3d]/10">
          <div className="absolute inset-0 flex items-center justify-center bg-[#0e5959] text-center text-white/80">
            <span className="max-w-56 px-6 text-sm font-semibold uppercase tracking-[0.15em]">Qari Ali Riaz portrait</span>
          </div>
          <img
            src={qariImage}
            alt="Qari Ali Riaz"
            width={1536}
            height={1024}
            className="relative size-full object-cover"
            onError={(event) => { event.currentTarget.style.display = 'none' }}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
