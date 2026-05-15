export default function App() {
  const services = [
    {
      title: 'Coconut Supply',
      desc: 'Supply of premium mature and whole coconuts for industrial, commercial, and retail needs.',
    },
    {
      title: 'Coconut Derivatives',
      desc: 'Premium coconut derivative products including coconut sugar & copra.',
    },
   {
      title: 'Coconut Wood & Others',
      desc: 'Supplying coconut wood and various types of quality wood materials for construction, and commercial needs.',
    },
    {
      title: 'Logistics Distribution',
      desc: 'Intercity and inter-island distribution supported by a professional logistics system.',
    },
  ];

  const products = [
    {
      title: 'Old Coconut',
      image:
        '/fresh-coconuts-broken-wooden-wall.jpg',
    },
    {
      title: 'Coconut Sugar',
      image:
        '/healthy-jaggery-still-life-assortment.jpg',
    },
    {
      title: ' Wood & Others',
      image:
        '/carpentry-concept.jpg',
    },
    {
      title: 'Logistics Fleet',
      image:
        '/industrial-port-container-yard.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-[#07121F] text-white overflow-x-hidden">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#081521]/85 backdrop-blur-xl border-b border-[#1E3650]">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-[0.15em] text-[#D6B36A]">
              DUTA KELAPA
            </h1>
            <p className="text-xs text-[#7C8FA3] uppercase tracking-[0.25em] mt-1">
              Premium Coconut Supplier & Logistics Company
            </p>
          </div>

          <nav className="hidden lg:flex gap-8 text-sm text-[#D4DEE8]">
            <a href="#about" className="hover:text-[#D6B36A] transition">
              About
            </a>
            <a href="#services" className="hover:text-[#D6B36A] transition">
              Services
            </a>
            <a href="#products" className="hover:text-[#D6B36A] transition">
              Products
            </a>
            <a href="#contact" className="hover:text-[#D6B36A] transition">
              Contact
            </a>
          </nav>

          <a
            href="https://wa.me/6285777991075"
            className="hidden sm:flex bg-[#D6B36A] text-black px-5 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Contact Us
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-36 lg:pt-44 pb-24 px-5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="uppercase tracking-[0.35em] text-[#B89652] text-sm mb-5">
              Premium Coconut Supplier
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Premium Coconut
              <span className="block text-[#D6B36A]">
                Export & Logistics
              </span>
            </h2>

            <p className="text-[#AAB8C7] text-lg leading-relaxed mb-10 max-w-2xl">
              Reliable supplier of premium coconuts and coconut derivative products 
              with integrated logistics and nationwide distribution services 
              for industrial, retail, and export markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/6285777991075"
                className="bg-[#D6B36A] text-black px-8 py-4 rounded-full font-semibold text-center hover:scale-105 transition"
              >
                WhatsApp Business
              </a>

              <a
                href="#products"
                className="border border-[#D6B36A] text-[#D6B36A] px-8 py-4 rounded-full text-center hover:bg-[#D6B36A] hover:text-black transition"
              >
                Explore Products
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-14">
              <div className="bg-[#102235] border border-[#1E3650] rounded-3xl p-5">
                <h3 className="text-3xl font-bold text-[#D6B36A]">
                  300+ Tons</h3>
                <p className="text-[#AAB8C7] mt-2">Coconuts / Month</p>
              </div>

              <div className="bg-[#102235] border border-[#1E3650] rounded-3xl p-5">
                <h3 className="text-3xl font-bold text-[#D6B36A]">50+</h3>
                <p className="text-[#AAB8C7] mt-2">Business Partners</p>
              </div>

              <div className="bg-[#102235] border border-[#1E3650] rounded-3xl p-5">
                <h3 className="text-3xl font-bold text-[#D6B36A]">15+</h3>
                <p className="text-[#AAB8C7] mt-2">Cities of Distribution</p>
              </div>
            </div>
          </div>

          <div>
            <img
              src="/view-african-nature-landscape-with-trees-vegetation.jpg"
              alt="Coconut"
              className="w-full h-[420px] sm:h-[550px] lg:h-[700px] object-cover rounded-[40px] border border-[#1E3650] shadow-2xl"
            />
          </div>
        </div>
      </section>
{/* About */}
<section
  id="about"
  className="py-24 px-5 bg-[#0B1B2B] border-y border-[#1E3650]"
>
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
    
    <div>
      <img
        src="/top-view-coconuts-displayed-market.jpg"
        alt="Warehouse"
        className="rounded-[40px] h-[420px] lg:h-[650px] object-cover w-full border border-[#1E3650]"
      />
    </div>

    <div>
      <p className="uppercase tracking-[0.35em] text-[#B89652] text-sm mb-5">
        About Company
      </p>

      <h3 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
        Trusted Coconut Supplier &
        <span className="block text-[#D6B36A]">
          Logistics Partner
        </span>
      </h3>

      <p className="text-[#AAB8C7] text-lg leading-relaxed mb-8">
        We are a trusted family-owned business specializing in coconut supply, 
        coconut derivative products, and professional logistics services. 
        With years of experience and a strong distribution network, 
        we are committed to delivering premium quality products and reliable business partnerships.
      </p>

      <div className="space-y-4">
        {[
          'Premium quality coconut products',
          'Professional logistics & distribution',
          'Reliable nationwide supply chain',
          'Trusted long-term business partnership',
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#102235] border border-[#1E3650] rounded-2xl p-5 flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-[#D6B36A] text-black flex items-center justify-center font-bold">
              ✓
            </div>

            <p className="text-[#D4DEE8]">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
      {/* Services */}
      <section
        id="services"
        className="py-24 px-5 bg-[#0B1B2B] border-y border-[#1E3650]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.35em] text-[#B89652] text-sm mb-5">
              Our Services
            </p>

            <h3 className="text-4xl lg:text-5xl font-bold mb-6">
              Core Business Services
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#102235] border border-[#1E3650] rounded-[32px] p-8 hover:border-[#D6B36A] transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#D6B36A] text-black flex items-center justify-center font-bold mb-6">
                  0{index + 1}
                </div>

                <h4 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h4>

                <p className="text-[#AAB8C7] leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.35em] text-[#B89652] text-sm mb-5">
              Main Products
            </p>

            <h3 className="text-4xl lg:text-5xl font-bold">
              Coconut Derivative Products
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[32px] border border-[#1E3650] bg-[#102235]"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="p-6">
                  <h4 className="text-2xl font-semibold mb-3">
                    {product.title}
                  </h4>

                  <a
                  href="#contact"
                  className="text-[#D6B36A] font-medium hover:underline">
                    Learn More →
                    </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section 
      id="contact"
      className="py-24 px-5">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#0E2235] to-[#06111B] border border-[#8A6A2F] rounded-[40px] p-8 lg:p-16 text-center">
          <p className="uppercase tracking-[0.35em] text-[#B89652] text-sm mb-5">
            Business Partnership
          </p>

          <h3 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
            Ready to Build Long-Term Partnership?
          </h3>

          <p className="text-[#AAB8C7] text-lg max-w-3xl mx-auto leading-relaxed mb-10">
            We are ready to support your coconut supply, coconut derivative products, 
            and professional logistics distribution needs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/6285777991075"
              className="bg-[#D6B36A] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              WhatsApp Business
            </a>
            <a
            href="mailto:hellodutakelapa@gmail.com?subject=Business Inquiry"
            className="border border-[#D6B36A] text-[#D6B36A] px-8 py-4 rounded-full hover:bg-[#D6B36A] hover:text-black transition"
            >
              Request Quotation
            </a>
          </div>
        </div>
      </section>
      {/* Floating WA */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/6285777991075"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition border-4 border-white"
        >
          💬
        </a>
      </div>
    </div>
  );
}
