interface CertificationCardProps {
  logo: string;
}

const CertificationCard = ({ logo }: CertificationCardProps) => {
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-2 md:p-5 shadow-md md:shadow-lg hover:shadow-2xl transition-all duration-500 border border-sky-100/50 hover:border-sky-200 md:hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/25 via-white/50 to-blue-50/20 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10 flex justify-center">
        {/* TAILLE AJUSTÉE : w-24 h-24 sur mobile, w-48 h-48 sur PC */}
        <div className="relative w-24 h-24 md:w-48 md:h-48 bg-gradient-to-br from-white to-sky-50/30 rounded-lg md:rounded-2xl p-3 md:p-6 border-2 border-sky-100/50 shadow-sm md:shadow-md group-hover:scale-105 group-hover:shadow-xl transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-blue-400/5 rounded-lg md:rounded-2xl"></div>
          <img
            src={logo}
            alt="Certification"
            className="w-full h-full object-contain relative z-10"
          />
        </div>
      </div>

      {/* Les effets de coins sont cachés sur mobile pour ne pas surcharger l'image */}
      <div className="hidden md:block absolute -top-1 -left-1 w-20 h-20 bg-gradient-to-br from-sky-400/10 to-transparent rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="hidden md:block absolute -bottom-1 -right-1 w-20 h-20 bg-gradient-to-tl from-blue-400/10 to-transparent rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

const CertificationsSection = () => {
  const certifications = [
    { logo: '/6.png' },
    { logo: '/3.jpg' },
    { logo: '/ecolab.png' }
  ];

  return (
    <section className="py-6 md:py-12 px-2 sm:px-6 lg:px-8 bg-gradient-to-br from-[#EFF8FF] via-white to-sky-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzBiYTVlYyIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-5xl font-bold" style={{ color: '#334786' }}>
            Certifications
          </h2>
        </div>
        
        {/* GRILLE : grid-cols-3 dès le départ pour l'alignement horizontal */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              {...cert}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
