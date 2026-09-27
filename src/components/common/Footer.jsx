export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-sans text-sm font-bold tracking-[0.2em] text-text-primary mb-2">
            UNNATI
          </p>
          <p className="font-sans text-[13px] text-text-secondary">
            Thoughtfully designed residences and communities that stand the test of time.
          </p>
        </div>

        <p className="font-sans text-[11px] text-text-tertiary">
          © {year} UNNATI Real Estate. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
