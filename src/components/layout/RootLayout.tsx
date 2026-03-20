// RootLayout is a Server Component: it has no state or hooks of its own.
// Header (Client) and Footer (Server) are composed here.
import { Header } from "./Header";
import { Footer } from "./Footer";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-base-100 text-base-content">
      <header className="sticky top-0 z-50 h-[50px] bg-base-100 border-b border-base-300">
        <Header />
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
