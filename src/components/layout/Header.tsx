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
          className={`join-item btn ${size} ${locale === lang ? "btn-neutral" : "btn-ghost"}`}
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
    { href: "/reads", label: t("reads") },
  ];

  return (
    <div className="navbar mx-auto h-[50px] min-h-[50px] max-w-6xl px-4 py-0">
      <div className="navbar-start">
        {pathname === "/" ? (
          <AnimatedHeaderLogo />
        ) : (
          <Link href="/" className="text-neutral text-lg">
            {tFooter("name")}
          </Link>
        )}
      </div>

      <div className="navbar-end gap-2">
        <ul className="menu menu-horizontal hidden px-0 text-sm sm:flex">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={pathname === link.href ? "active" : ""}
            >
              <Link
                href={link.href}
                className={
                  pathname === link.href
                    ? "bg-neutral font-medium text-neutral-content"
                    : ""
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden h-6 w-px bg-base-300 sm:block" />

        <div className="hidden sm:flex">
          <LocaleSwitcher
            locale={locale}
            onSelect={handleLocaleChange}
            size="btn-xs"
          />
        </div>

        <div className="relative sm:hidden">
          <button
            type="button"
            onClick={() => setOpened(!opened)}
            className="btn btn-circle btn-ghost btn-sm text-neutral"
            aria-label="Toggle menu"
            aria-expanded={opened}
          >
            {opened ? <TbX size={18} /> : <TbMenu2 size={18} />}
          </button>

          <AnimatePresence>
            {opened && (
              <motion.div
                className="absolute end-0 top-full z-50 mt-2 w-64 rounded-box border border-base-300 bg-base-100 p-2 shadow-lg"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                <ul className="menu w-full text-base">
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
                            ? "bg-neutral font-medium text-neutral-content"
                            : ""
                        }
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-end border-t border-base-300 px-2 pt-2">
                  <LocaleSwitcher
                    locale={locale}
                    onSelect={(lang) => {
                      handleLocaleChange(lang);
                      setOpened(false);
                    }}
                    size="btn-sm"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
