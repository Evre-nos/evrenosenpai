import "@/app/globals.css";
import Preloader from "@/app/components/Preloader";


export const metadata = {
  metadataBase: "https://modern-personal-brand-portfolio.vercel.app",
  title: "Soren Blank",
  description: "I'm Soren Blank & I have a team of professionals who can help you grow your business. We offer web development, digital marketing, and graphics design services. We are professional, creative, and responsive. We are here to help you grow your business. Period.",
  image: "https://modern-personal-brand-portfolio.vercel.app/embed.png",
  keywords: ["Soren", "Blank", "Soren D. Blank"],
  openGraph: {

    images: [
      {
        url: "https://modern-personal-brand-portfolio.vercel.app/og-image.png",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "https://modern-personal-brand-portfolio.vercel.app/og-image.png",
      },
    ]
  },
}

export const viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="loaded">
        {/* <CustomCurosr />*/}
        <Preloader /> 
        {children}
      </body>
    </html>
  );
}
