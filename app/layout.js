import { GoogleTagManager } from "@next/third-parties/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import AmbientBackground from "./components/helper/ambient-background";
import Navbar from "./components/navbar";
import "./css/globals.scss";
const siteUrl = "https://omshreechoudhary.tech";
export const metadata = {
  metadataBase: new URL(siteUrl), title: "Om Shree Choudhary | AI/ML Engineer & Builder",
  description: "Portfolio of Om Shree Choudhary — SIH 2025 national winner building machine learning systems, FastAPI backends, and cross-platform apps.",
  openGraph: { title: "Om Shree Choudhary | AI/ML Engineer & Builder", description: "SIH 2025 national winner building useful machine learning systems and reliable software.", url: siteUrl, siteName: "Om Shree Choudhary", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Om Shree Choudhary portfolio" }], type: "website" }
};
export default function RootLayout({ children }) {
  return <html lang="en" suppressHydrationWarning><body suppressHydrationWarning><AmbientBackground /><ToastContainer theme="dark" /><Navbar /><main>{children}</main><Footer /><ScrollToTop /></body><GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} /></html>;
}
