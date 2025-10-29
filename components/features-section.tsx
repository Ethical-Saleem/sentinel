export const FeaturesSection = () => {
  const features = [
    {
      title: "Unrivalled adaptability",
      description: "Choose from a range of layouts or customize your experience with 25+ trading and data widgets. Create, arrange, and save multiple dashboards tailored to your trading style.",
      videoUrl: "/videos/feature-one-1.webm"
    },
    {
      title: "All-in-one interface",
      description: "Switch instantly between spot, margin, derivatives trading and staking – then track your performance with one clear, consolidated portfolio.",
      videoUrl: "/videos/feature-two-1.webm"
    },
    {
      title: "Real-time peformance",
      description: "With live market data fed into a fast and responsive UI - we're getting you closer to the action with our most powerful interface ever.",
      videoUrl: "/videos/feature-three-1.webm"
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-8">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-center text-[#FFFFFF] mb-4 leading-tight tracking-tight">
            Access spot, margin and derivatives trading — plus staking — on web
            and mobile
          </h2>
          <button className="bg-[#17232D] text-[#FFFFFF] px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors sm:w-auto">
            Get the app
          </button>
        </div>
        <div className="">
          <h5 className="text-[20px] md:text-[28px] font-bold text-center mb-4 text-[#FFFFFF]">
            Optimized for advanced trading
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#1b2832] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-[18px] md:text-[24px] font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-[16px] text-white tracking-normal mb-6">{feature.description}</p>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full"
                  style={{ objectFit: "contain", objectPosition: 'initial' }}
                >
                  <source src={feature.videoUrl} type="video/webm" />
                </video>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
