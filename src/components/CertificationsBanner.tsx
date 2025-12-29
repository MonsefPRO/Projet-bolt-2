export default function CertificationsBanner() {
  return (
    <section className="py-8 bg-gradient-to-r from-sky-600 to-blue-700 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

      <div className="flex animate-scroll">
        <div className="flex items-center gap-8 px-8">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-32 h-32 bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              <div className="text-white/50 text-4xl font-bold">{i + 1}</div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-8 px-8">
          {[...Array(8)].map((_, i) => (
            <div
              key={`duplicate-${i}`}
              className="flex-shrink-0 w-32 h-32 bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              <div className="text-white/50 text-4xl font-bold">{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
