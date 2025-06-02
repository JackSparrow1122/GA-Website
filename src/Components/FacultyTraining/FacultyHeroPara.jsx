function FacultyHeroPara() {
  return (
    <section
      className="relative px-4 md:px-8 lg:px-16 py-3 md:py-6 text-white overflow-hidden text-sm md:text-xl text-left lg:text-center"
      style={{
        /* 1️⃣ Deep-blue multi-tone gradient */
        backgroundImage: `
          linear-gradient(135deg, #01224F 0%, #045B62 50%, #2E1F68 100%),
 
          /* 2️⃣ First diagonal (↘) line layer */
          repeating-linear-gradient(
            45deg,
            rgba(255,255,255,0.06) 0px,
            rgba(255,255,255,0.06) 1px,
            transparent 1px,
            transparent 10px
          ),
 
          /* 3️⃣ Second diagonal (↙) line layer */
          repeating-linear-gradient(
            -45deg,
            rgba(255,255,255,0.06) 0px,
            rgba(255,255,255,0.06) 1px,
            transparent 1px,
            transparent 10px
          )
        `,
        backgroundSize: 'cover, 10px 10px, 10px 10px',
        backgroundBlendMode: 'overlay',
      }}
    >
      In today’s rapidly evolving educational landscape, your institution might face significant challenges that hinder the ability to deliver high-quality instruction and foster student engagement. Outdated teaching methods, a lack of industry relevance, and limited support for faculty development can lead to disengaged educators and students alike. Recognizing these issues, we offer you targeted faculty development training designed to empower educators and elevate institutions.
    </section>
  );
}
 
export default FacultyHeroPara;
 
 