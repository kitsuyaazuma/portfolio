"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { TbMenu2, TbX } from "react-icons/tb";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { AnimatedHeaderLogo } from "./AnimatedHeaderLogo";
import { routing } from "@/i18n/routing";

function LocaleSwitcher({
  locale,
  onSelect,
  size,
}: {
  locale: string;
  onSelect: (lang: string) => void;
  size: "btn-xs" | "btn-sm";
}) {
  return (
    <div className="join">
      {routing.locales.map((lang) => (
        <button
          key={lang}
          onClick={() => onSelect(lang)}
          className={`join-item btn ${size} ${locale === lang ? "btn-primary text-white" : "btn-ghost"}`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const [opened, setOpened] = useState(false);

  const t = useTranslations("Navigation");
  const tFooter = useTranslations("Footer");
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const handleLocaleChange = (lang: string) => {
    router.replace(pathname, {
      locale: lang as (typeof routing.locales)[number],
    });
  };

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/publications", label: t("publication") },
    { href: "/bookshelf", label: t("bookshelf") },
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 h-[50px] flex justify-between items-center">
        {pathname === "/" ? (
          <AnimatedHeaderLogo />
        ) : (
          <Link href="/" className="text-primary text-lg">
            {tFooter("name")}
          </Link>
        )}

        <div className="flex items-center gap-2">
          {/* Desktop nav */}
          <ul className="menu menu-horizontal px-0 hidden sm:flex text-sm">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={pathname === link.href ? "active" : ""}
              >
                <Link
                  href={link.href}
                  className={
                    pathname === link.href
                      ? "font-medium bg-primary/10 text-primary"
                      : ""
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="hidden sm:block h-6 w-px bg-base-300" />

          {/* Language switcher — desktop */}
          <div className="hidden sm:flex">
            <LocaleSwitcher
              locale={locale}
              onSelect={handleLocaleChange}
              size="btn-xs"
            />
          </div>

          {/* Burger */}
          <button
            onClick={() => setOpened(!opened)}
            className="sm:hidden btn btn-circle btn-ghost btn-sm text-primary"
            aria-label="Toggle menu"
          >
            {opened ? <TbX size={18} /> : <TbMenu2 size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {opened && (
          <motion.div
            className="sm:hidden fixed inset-0 top-[50px] z-40 bg-base-100 flex flex-col items-center justify-center gap-2"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <ul className="menu text-xl w-full max-w-sm">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className={pathname === link.href ? "active" : ""}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpened(false)}
                    className={
                      pathname === link.href
                        ? "font-medium bg-primary/10 text-primary"
                        : ""
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <LocaleSwitcher
              locale={locale}
              onSelect={(lang) => {
                handleLocaleChange(lang);
                setOpened(false);
              }}
              size="btn-sm"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
