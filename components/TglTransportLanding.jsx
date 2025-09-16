import Image from "next/image";
import Link from "next/link";

export default function TglTransportLanding() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Top bar */}
      <div className="bg-slate-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-semibold tracking-wide">TGL TRANS – Logistics & Solutions</span>
            <span className="hidden md:inline opacity-80">| 55 Trương Quốc Dung, Phú Nhuận, TP.HCM</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:0343599380" className="hover:opacity-80">Hotline/Zalo/WhatsApp: 0343599380</a>
            <a href="mailto:infotglexp@gmail.com" className="hidden sm:inline hover:opacity-80">infotglexp@gmail.com</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="images/TGLTRANS.png"
              alt="TGL TRANSPORT"
              width={40}
              height={40}
              priority
            />
            <span className="font-bold text-lg">TGL TRANSPORT</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#about" className="hover:text-blue-600">Giới thiệu</Link>
            <Link href="#services" className="hover:text-blue-600">Dịch vụ</Link>
            <Link href="#packages" className="hover:text-blue-600">Gói vận chuyển</Link>
            <Link href="#pricing" className="hover:text-blue-600">Bảng giá</Link>
            <Link href="#news" className="hover:text-blue-600">Tin tức</Link>
            <Link href="#careers" className="hover:text-blue-600">Tuyển dụng</Link>
            <Link href="#contact" className="hover:text-blue-600">Liên hệ</Link>
          </nav>
          <a
            href="https://www.facebook.com/tgltrans/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full px-4 py-2 bg-blue-600 text-white text-sm font-semibold shadow hover:bg-blue-700"
          >
            Nhận tư vấn
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 -z-100">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1976&auto=format&fit=crop"
            alt="Port"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black leading-tight drop-shadow-lg">
              TGL TRANSPORT
              <span className="block text-blue-300">Logistics Solutions</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl opacity-90">
              Dịch vụ vận chuyển quốc tế chuyên nghiệp – Door to Door, thông quan, theo dõi đơn đến tay người nhận. 220+ quốc gia, 5+ năm kinh nghiệm.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-blue-600 font-semibold shadow hover:bg-blue-700"
              >
                Nhận báo giá nhanh
              </Link>
              <Link
                href="#track"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-white/10 ring-1 ring-white/30 hover:bg-white/20"
              >
                Tra cứu vận đơn
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick widgets: Track & Quote */}
      <section id="track" className="-mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-lg font-bold">Tra cứu vận đơn</h3>
            <p className="text-sm text-slate-600 mt-1">Nhập mã vận đơn để kiểm tra trạng thái</p>
            <div className="mt-4 flex gap-3">
              <input className="flex-1 rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600" placeholder="VD: TGL123456VN" />
              <button className="rounded-xl px-5 py-3 bg-slate-900 text-white font-semibold hover:bg-slate-800">Tra cứu</button>
            </div>
          </div>

          <div id="quote" className="rounded-2xl shadow-xl p-6 text-white bg-gradient-to-br from-indigo-800 to-slate-900">
            <h3 className="text-lg font-bold">Nhận báo giá</h3>
            <p className="text-sm text-white/80 mt-1">Điền thông tin kiện hàng, tuyến và dịch vụ</p>

            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              <input className="rounded-xl px-4 py-3 bg-white text-slate-900 placeholder:text-slate-500 shadow ring-1 ring-white/20 focus:ring-2 focus:ring-white outline-none" placeholder="Tuyến (Mỹ/Úc/Âu…)" />
              <input className="rounded-xl px-4 py-3 bg-white text-slate-900 placeholder:text-slate-500 shadow ring-1 ring-white/20 focus:ring-2 focus:ring-white outline-none" placeholder="Khối lượng (kg)" />
              <input className="rounded-xl px-4 py-3 bg-white text-slate-900 placeholder:text-slate-500 shadow ring-1 ring-white/20 focus:ring-2 focus:ring-white outline-none" placeholder="Dịch vụ (Door to Door, Express…)" />
              <input className="rounded-xl px-4 py-3 bg-white text-slate-900 placeholder:text-slate-500 shadow ring-1 ring-white/20 focus:ring-2 focus:ring-white outline-none" placeholder="SĐT/Email liên hệ" />
            </div>

            <a
              href="https://zalo.me/0343599380"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center rounded-xl px-5 py-3 bg-white text-slate-900 font-semibold hover:bg-slate-100"
            >
              Gửi yêu cầu
            </a>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16" id="advantages">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center">Ưu điểm của TGL TRANSPORT</h2>
          <p className="text-center text-slate-600 mt-2">Uy tín – Nhanh chóng – Linh hoạt – Chi phí cạnh tranh</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Trao uy tín, sự chân thành và chuyên nghiệp", desc: "Đóng gói kỹ, quy trình chuẩn, chăm sóc khách hàng tận tâm." },
              { title: "Hỗ trợ giao nhận Door-to-Door", desc: "Linh hoạt nhiều lựa chọn, thủ tục đơn giản." },
              { title: "Theo dõi đơn hàng đến tận tay người nhận", desc: "Tracking đa kênh, cập nhật trạng thái thời gian thực." },
              { title: "Vận chuyển đến hơn 220+ quốc gia", desc: "Đáp ứng tối đa nhu cầu chuyển phát nhanh quốc tế." },
              { title: "5+ năm kinh nghiệm trong ngành", desc: "Thành thạo logistics, hải quan, xử lý phát sinh." },
              { title: "Chi phí cạnh tranh, giá trị và linh hoạt", desc: "Tối ưu tuyến, tối ưu chi phí, minh bạch bảng giá." },
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl border p-6 hover:shadow-lg transition-shadow">
                <div className="h-10 w-10 rounded-full bg-blue-600/10 flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">{idx + 1}</span>
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages / featured routes */}
      <section id="packages" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center">Gói vận chuyển tại TGL</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { img: "images/Australia.jfif", title: "Vận chuyển hàng đi Úc" },   // <— đổi tên file nếu cần
              { img: "images/myy.jpg",        title: "Vận chuyển hàng đi Mỹ" },
              { img: "images/chauau.jpg",    title: "Vận chuyển hàng đi Châu Âu" },
            ].map((card, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-shadow">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg">{card.title}</h3>
                  <p className="text-sm text-slate-600 mt-2">Door to Door, thông quan, nhiều tuỳ chọn thời gian & chi phí.</p>
                  <button className="mt-4 inline-flex items-center rounded-xl px-4 py-2 border font-semibold hover:bg-slate-50">Chi tiết</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners carousel */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center">Đối tác</h2>
          <div className="mt-6 overflow-hidden">
            {(() => {
              const logos = [
                { src: "partners/vna.png", alt: "Vietnam Airlines" },
                { src: "partners/sfexpress.png", alt: "SF Express" },
                { src: "partners/ups.png", alt: "UPS" },
                { src: "partners/dhl.png", alt: "DHL" },
                { src: "partners/fedex.png", alt: "FedEx" },
                { src: "partners/vietjet.png", alt: "Vietjet Air" },
              ];
              const loop = [...logos, ...logos];
              return (
                <div className="flex items-center gap-12 animate-[slide_18s_linear_infinite]">
                  {loop.map((p, i) => (
                    <Image
                      key={`logo-${i}-${p.src}`}
                      src={p.src}
                      alt={p.alt}
                      width={180}
                      height={40}
                      className="h-10 w-auto object-contain shrink-0"
                    />
                  ))}
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden shadow relative">
            <div className="relative aspect-[16/10]">
              <Image
                src="images/gt.jpg"
                alt="Air logistics"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">Giới thiệu về TGL TRANSPORT</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              CÔNG TY TNHH TGL TRANSPORT được thành lập vào năm 2021 với sứ mệnh cung cấp các dịch vụ vận chuyển quốc tế chuyên nghiệp, nhanh chóng và an toàn cho khách hàng cá nhân và doanh nghiệp. Với địa chỉ tại <strong>55 Trương Quốc Dung, Phường Phú Nhuận, TP. Hồ Chí Minh</strong>. Chúng tôi am hiểu sâu sắc các quy trình logistics, thủ tục hải quan quốc tế và luôn cập nhật kịp thời các quy định liên quan, nhằm đảm bảo mỗi lô hàng đều được xử lý chính xác và vận chuyển đến tay người nhận một cách hiệu quả nhất.
            </p>
            <div className="mt-6 grid grid-cols-4 gap-4">
              {[
                { k: "30+", v: "Employee" },
                { k: "1000+", v: "Customer" },
                { k: "150+", v: "Country" },
                { k: "5+", v: "Years of Experience" },
              ].map((s, i) => (
                <div key={i} className="rounded-xl border p-4 text-center">
                  <div className="text-2xl font-black text-slate-900">{s.k}</div>
                  <div className="text-xs text-slate-500 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold">Cần tư vấn tuyến & chi phí?</h3>
              <p className="mt-2 text-slate-300">Liên hệ ngay, đội ngũ TGL hỗ trợ 24/7 qua điện thoại, Zalo, WhatsApp.</p>
            </div>
            <div className="flex gap-3">
              <a href="tel:0343599380" className="rounded-xl px-5 py-3 bg-blue-600 font-semibold hover:bg-blue-700">Gọi 0343599380</a>
              <a href="mailto:infotglexp@gmail.com" className="rounded-xl px-5 py-3 bg-white text-slate-900 font-semibold hover:bg-slate-100">Gửi Email</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <Image src="images/TGLTRANS.png" alt="TGL TRANSPORT" width={40} height={40} priority />
              <span className="font-bold text-lg">TGL TRANSPORT</span>
            </div>
            <p className="mt-4 text-sm opacity-80">Kho hàng: 55 Trương Quốc Dung, Phường 10, Phú Nhuận, TP.HCM</p>
            <p className="mt-2 text-sm opacity-80">Hotline: 0343599380 (Mr.Giang)</p>
            <p className="mt-2 text-sm opacity-80">Email: infotglexp@gmail.com</p>
          </div>
          <div>
            <h4 className="font-semibold">Dịch vụ</h4>
            <ul className="mt-3 space-y-2 text-sm opacity-90">
              <li>Mở tài khoản DHL</li>
              <li>Gửi hàng hóa quốc tế</li>
              <li>Thông quan hàng nhập</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Ưu đãi</h4>
            <ul className="mt-3 space-y-2 text-sm opacity-90">
              <li>Tư vấn dịch vụ</li>
              <li>Hướng dẫn đặt hàng</li>
              <li>Ưu đãi cho đại lý</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Đăng ký nhận tin</h4>
            <div className="mt-3 flex">
              <input className="flex-1 rounded-l-xl px-4 py-3 text-slate-900" placeholder="Nhập email của bạn" />
              <button className="rounded-r-xl px-4 py-3 bg-blue-600 font-semibold">Đăng ký</button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 bg-[#1d2a8a]">
          <div className="max-w-7xl mx-auto px-4 py-3 text-center text-slate-100 text-sm">
            © 2025 by <span className="font-bold">TGL TRANSPORT</span>. All Rights Reserved.{" "}
            Design by{" "}
            <a
              href="https://www.facebook.com/thedien710"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline underline-offset-4"
              aria-label="Mở Facebook của theneid"
            >
              theneid
            </a>{" "}
            |{" "}
            <Link href="/sitemap.xml" className="hover:underline underline-offset-4">
              Sitemaps
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
