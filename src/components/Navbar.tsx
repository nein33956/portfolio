import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Plus } from "lucide-react";

const links = [
  { to: "/", label: "Giới thiệu", end: true },
  { to: "/du-an", label: "Dự án" },
  { to: "/tong-ket", label: "Tổng kết" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-x">
        <nav
          className={`glass flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled ? "shadow-soft" : "shadow-sm"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 text-white shadow-glow">
              <Plus className="h-5 w-5" strokeWidth={3} />
            </span>
            <span className="font-display text-base font-extrabold text-ink">
              Portfolio<span className="gradient-text"> Năng lực số</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-brand-600 text-white shadow-glow"
                        : "text-ink-soft hover:bg-brand-50 hover:text-brand-700"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="grid h-10 w-10 place-items-center rounded-xl text-ink hover:bg-brand-50 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Mở menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="glass mt-2 space-y-1 rounded-2xl p-2 shadow-soft md:hidden"
            >
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.end}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-sm font-semibold ${
                        isActive
                          ? "bg-brand-600 text-white"
                          : "text-ink-soft hover:bg-brand-50"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
