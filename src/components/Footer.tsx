export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-stone-100" style={{ backgroundColor: "#fafaf8" }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 tracking-wide">
        <span style={{ fontFamily: "var(--font-playfair)" }} className="text-sm text-stone-500">
          Kelly Soto Photography
        </span>
        <span>© {new Date().getFullYear()} · All rights reserved</span>
      </div>
    </footer>
  )
}
