
const JamiaDarulIlmi = () => {
  return (
    <section className="bg-[#F7F3EA] text-[#29231B] py-20 px-5 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#B08A3C] uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Integrated Islamic & Modern Education
          </p>

          <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-6">
            Jamia Darul Ilmi
          </h2>

          <div className="w-20 h-[2px] bg-[#B08A3C] mx-auto mb-6" />

          <p className="text-gray-700 leading-8 text-base md:text-lg">
            An integrated educational programme combining Islamic scholarship,
            Quran memorisation and modern academic education to prepare students
            for a meaningful future.
          </p>
        </div>

        {/* Programmes */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">

          {/* Programme 1 */}
          <div className="bg-white border border-[#B08A3C]/30 p-8 md:p-10 rounded-sm shadow-sm">
            <p className="text-[#B08A3C] text-sm uppercase tracking-widest mb-4">
              For Students Completing 6th Standard
            </p>

            <h3 className="text-2xl md:text-3xl font-serif mb-5">
              Hifz & School Education
            </h3>

            <p className="text-gray-700 leading-7 mb-6">
              An integrated programme combining complete Quran memorisation
              with regular English-medium school education.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-[#B08A3C]">✦</span>
                English-medium regular education
              </li>
              <li className="flex gap-3">
                <span className="text-[#B08A3C]">✦</span>
                Complete Quran memorisation by 10th Standard
              </li>
              <li className="flex gap-3">
                <span className="text-[#B08A3C]">✦</span>
                Spoken English development
              </li>
              <li className="flex gap-3">
                <span className="text-[#B08A3C]">✦</span>
                Students above 6th Standard can also join
              </li>
            </ul>
          </div>

          {/* Programme 2 */}
          <div className="bg-[#29231B] text-[#F7F3EA] p-8 md:p-10 rounded-sm shadow-sm">
            <p className="text-[#D5B56F] text-sm uppercase tracking-widest mb-4">
              For Students Completing 10th Standard
            </p>

            <h3 className="text-2xl md:text-3xl font-serif mb-5">
              Seven-Year Alim & Advocate Course
            </h3>

            <p className="text-gray-300 leading-7 mb-6">
              A seven-year integrated programme combining Islamic studies,
              higher secondary education and professional legal education.
            </p>

            <ul className="space-y-4 text-gray-200">
              <li className="flex gap-3">
                <span className="text-[#D5B56F]">✦</span>
                Higher Secondary education in English medium
              </li>
              <li className="flex gap-3">
                <span className="text-[#D5B56F]">✦</span>
                Five-year Advocate course in collaboration with
                Al-Ameen Law College, Bangalore
              </li>
              <li className="flex gap-3">
                <span className="text-[#D5B56F]">✦</span>
                Coaching for District Judge and Magistrate examinations
              </li>
              <li className="flex gap-3">
                <span className="text-[#D5B56F]">✦</span>
                Guidance towards UPSC examinations for capable students
              </li>
            </ul>
          </div>
        </div>

        {/* Hifz Programme */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-[#B08A3C] uppercase tracking-widest text-sm mb-3">
              Quranic Education
            </p>

            <h3 className="text-3xl md:text-4xl font-serif mb-6">
              Excellence in Hifz
            </h3>

            <p className="text-gray-700 leading-8 mb-6">
              Students are guided through a structured Quran memorisation
              programme alongside their regular academic studies.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li>✦ Proper Tajweed training</li>
              <li>✦ Qira'at taught by expert Qaris</li>
              <li>✦ Systematic Quran memorisation</li>
              <li>✦ Balanced Islamic and academic education</li>
            </ul>
          </div>

          <div className="bg-white border border-[#B08A3C]/30 p-8 md:p-10">
            <h4 className="text-2xl font-serif mb-5">
              A Strong Foundation
            </h4>
            <p className="text-gray-700 leading-8">
              Our approach aims to nurture students with a strong connection
              to the Holy Quran while ensuring they continue their regular
              education and develop the skills needed for the future.
            </p>
          </div>
        </div>

        {/* Alim Curriculum */}
        <div className="bg-white border border-[#B08A3C]/30 p-8 md:p-12 mb-20">
          <div className="text-center mb-10">
            <p className="text-[#B08A3C] uppercase tracking-widest text-sm mb-3">
              Islamic Scholarship
            </p>

            <h3 className="text-3xl md:text-4xl font-serif">
              Comprehensive Alim Education
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Arabic Studies",
                description: "Arabic grammar and literature."
              },
              {
                title: "Quran & Tafsir",
                description: "In-depth study and understanding of the Quran."
              },
              {
                title: "Hadith Studies",
                description: "Study of the Prophetic traditions."
              },
              {
                title: "Fiqh & Usul",
                description: "Islamic jurisprudence and its principles."
              },
              {
                title: "Language Development",
                description: "Fluency development in Urdu, English, Arabic and Tamil."
              },
              {
                title: "Dawa Activities",
                description: "Weekly fieldwork to develop practical Dawa experience."
              }
            ].map((item, index) => (
              <div key={index} className="border-l-2 border-[#B08A3C] pl-5">
                <h4 className="text-xl font-serif mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#F7F3EA] p-6 text-center">
            <h4 className="font-serif text-xl mb-2">
              Spoken English Development
            </h4>
            <p className="text-gray-700 leading-7">
              Special emphasis on developing confident spoken English
              communication skills.
            </p>
          </div>
        </div>

        {/* Facilities */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <p className="text-[#B08A3C] uppercase tracking-widest text-sm mb-3">
              Student Life
            </p>

            <h3 className="text-3xl md:text-4xl font-serif">
              Facilities & Environment
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              "Daily sports and physical exercise",
              "Weekly Karate training",
              "Ventilated classrooms in a natural environment",
              "Hostel accommodation and quality food"
            ].map((facility, index) => (
              <div
                key={index}
                className="bg-white border border-[#B08A3C]/30 p-7 text-center"
              >
                <span className="text-[#B08A3C] text-2xl block mb-4">
                  ✦
                </span>
                <p className="text-gray-700 leading-7">
                  {facility}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Opportunities */}
        <div className="bg-[#29231B] text-[#F7F3EA] p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#D5B56F] uppercase tracking-widest text-sm mb-4">
              Preparing for Tomorrow
            </p>

            <h3 className="text-3xl md:text-4xl font-serif mb-6">
              Building Future Leaders
            </h3>

            <p className="text-gray-300 leading-8 mb-6">
              We aim to open wider academic and professional opportunities
              for our students through dedicated guidance and institutional
              collaborations.
            </p>

            <p className="text-gray-300 leading-8">
              Capable students will be guided towards UPSC examinations
              including IAS and IPS. We are also making efforts to collaborate
              with global universities and their academic curricula.
            </p>
          </div>
        </div>

        {/* Education Fee Banner */}
        <div className="text-center border border-[#B08A3C] p-8 md:p-12">
          <p className="text-[#B08A3C] uppercase tracking-widest text-sm mb-4">
            Education for All
          </p>

          <h3 className="text-3xl md:text-4xl font-serif mb-5">
            Education is Free
          </h3>

          <p className="max-w-2xl mx-auto text-gray-700 leading-8">
            Education is provided free of cost. Those who are financially
            able may voluntarily contribute towards supporting the institution
            and its educational mission.
          </p>
        </div>

      </div>
    </section>
  );
};

export default JamiaDarulIlmi;
