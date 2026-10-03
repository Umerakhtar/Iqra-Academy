const FAQ = () => {
  return (
    <section id="faq" className="bg-[#eef4f1] py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-[#0c3d3d] md:text-4xl">FAQ</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              question: 'Who are your Quran teachers?',
              answer: 'All our tutors are Hafiz-e-Quran, Qari with 5+ years experience and fluent in English. Male and Female teachers are available.'
            },
            {
              question: 'Is it suitable for small kids?',
              answer: 'Yes, we have specially trained teachers for kids aged 4 and above. We teach with patience and kindness.'
            },
            {
              question: 'Do you offer a free trial class?',
              answer: 'Yes, we offer 3 days of completely free trial classes with no obligation. You can check our teaching method before paying.'
            }
          ].map(({ question, answer }) => (
            <div key={question} className="rounded-2xl border border-[#0c3d3d]/10 bg-white p-5">
              <h3 className="font-semibold text-[#0c3d3d]">{question}</h3>
              <p className="mt-2 text-[#0c3d3d]/70">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
