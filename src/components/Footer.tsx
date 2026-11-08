import Link from 'next/link';

export default function Footer() {
  const letters = [
    { char: 'C', height: 'h-[18vw] max-h-40 min-h-24', bg: 'bg-surface' },
    { char: 'O', height: 'h-[22vw] max-h-48 min-h-28', bg: 'bg-surface-alt' },
    { char: 'C', height: 'h-[16vw] max-h-36 min-h-20', bg: 'bg-surface' },
    { char: 'O', height: 'h-[24vw] max-h-52 min-h-32', bg: 'bg-surface-alt' },
    { char: 'B', height: 'h-[20vw] max-h-44 min-h-26', bg: 'bg-accent text-accent-ink' },
    { char: 'L', height: 'h-[15vw] max-h-32 min-h-20', bg: 'bg-surface' },
    { char: 'I', height: 'h-[26vw] max-h-56 min-h-36', bg: 'bg-surface-alt' },
    { char: 'M', height: 'h-[19vw] max-h-40 min-h-24', bg: 'bg-surface' },
  ];

  return (
    <footer className="bg-bg text-ink pt-8 pb-12">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* The Mark, built large from architectural blocks */}
        <div className="w-full flex items-end gap-1 md:gap-2 mb-12 overflow-hidden">
          {letters.map((item, idx) => (
            <div
              key={idx}
              className={`flex-1 ${item.height} ${item.bg} flex items-center justify-center`}
            >
              <span className="font-display font-bold text-4xl sm:text-6xl md:text-8xl select-none">
                {item.char}
              </span>
            </div>
          ))}
        </div>

        {/* 4 Columns of Links & Contact Lines */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 text-sm">
          {/* Col 1-3: Products */}
          <div className="md:col-span-3 space-y-3">
            <p className="font-bold text-ink text-base">Carbon Products</p>
            <ul className="space-y-2 text-muted">
              <li>
                <Link href="/products/granular-activated-carbon" className="hover:text-ink transition-colors duration-150">
                  Granular Carbon (GAC)
                </Link>
              </li>
              <li>
                <Link href="/products/powdered-activated-carbon" className="hover:text-ink transition-colors duration-150">
                  Powdered Carbon (PAC)
                </Link>
              </li>
              <li>
                <Link href="/products/pelletized-activated-carbon" className="hover:text-ink transition-colors duration-150">
                  Pelletized Extruded
                </Link>
              </li>
              <li>
                <Link href="/products/industrial-grade-gold-recovery-carbon" className="hover:text-ink transition-colors duration-150">
                  Gold CIP/CIL Leaching
                </Link>
              </li>
              <li>
                <Link href="/products/water-treatment-air-gas-purification" className="hover:text-ink transition-colors duration-150">
                  Water & Gas Treatment
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4-6: Specifications & Export */}
          <div className="md:col-span-3 space-y-3">
            <p className="font-bold text-ink text-base">Export Standards</p>
            <ul className="space-y-2 text-muted">
              <li>
                <a href="/#pricing" className="hover:text-ink transition-colors duration-150">
                  FOB Price List (Tanjung Priok)
                </a>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-ink transition-colors duration-150">
                  ASTM Iodine Range (900–1200)
                </a>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-ink transition-colors duration-150">
                  MOQ 15 MT (1x20ft Container)
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-ink transition-colors duration-150">
                  Free Laboratory Sample Policy
                </a>
              </li>
              <li>
                <a href="/catalog/ACTIVATED_CARBON_CATALOG.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors duration-150">
                  Official Technical Brochure (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 7-8: Production & Articles */}
          <div className="md:col-span-2 space-y-3">
            <p className="font-bold text-ink text-base">Manufacturing</p>
            <ul className="space-y-2 text-muted">
              <li>
                <Link href="/about" className="hover:text-ink transition-colors duration-150">
                  Bogor Rotary Kiln Facility
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-ink transition-colors duration-150">
                  Technical Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ink transition-colors duration-150">
                  Direct Kiln Visit
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 9-12: Contact Lines */}
          <div className="md:col-span-4 space-y-3">
            <p className="font-bold text-ink text-base">Factory & Direct Inquiries</p>
            <p className="text-muted leading-relaxed">
              C552+685, Tanjungrasa, Kec. Tanjungsari, Kabupaten Bogor, Jawa Barat 16840, Indonesia
            </p>
            <p className="text-muted">
              Email: <span className="text-ink">blim00coco@gmail.com</span>
            </p>
            <p className="text-muted">
              WhatsApp: <span className="text-accent font-bold">+62 857-7106-0462</span>
            </p>
          </div>
        </div>

        {/* Last Row: Copyright & Download Action Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-muted">
          <div>
            © 2026 CocoBlim Activated Carbon. Manufactured in Tanjungsari Bogor, Indonesia.
          </div>
          <a
            href="/catalog/ACTIVATED_CARBON_CATALOG.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 px-5 bg-surface text-ink hover:bg-surface-alt font-semibold text-sm transition-colors duration-150"
          >
            Download Catalog (PDF)
          </a>
        </div>
      </div>
    </footer>
  );
}
