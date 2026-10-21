import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://omshreechoudhary.tech";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Om Shree Choudhary | CSE (AI&ML), SIH 2025 Winner",
  description:
    "Portfolio of Om Shree Choudhary, final-year CSE (AI&ML) student at RNSIT Bengaluru and Smart India Hackathon 2025 national winner. Machine learning systems, FastAPI backends, and cross-platform apps.",
  openGraph: {
    title: "Om Shree Choudhary | CSE (AI&ML), SIH 2025 Winner",
    description:
      "Final-year CSE (AI&ML) student at RNSIT Bengaluru, Smart India Hackathon 2025 national winner. ML systems, FastAPI backends, cross-platform apps.",
    url: siteUrl,
    siteName: "Om Shree Choudhary",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Om Shree Choudhary - Portfolio" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Shree Choudhary | CSE (AI&ML), SIH 2025 Winner",
    description:
      "Final-year CSE (AI&ML) student at RNSIT Bengaluru, Smart India Hackathon 2025 national winner. ML systems, FastAPI backends, cross-platform apps.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
