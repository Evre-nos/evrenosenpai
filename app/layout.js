// Importing necessary dependencies and components
import Preloader from "@/app/components/Preloader"; // Preloader component
import "@/app/globals.css"; // Global CSS styles

// Metadata object for the website
// Contains base URL, title, description, image, keywords, Open Graph data, and Twitter card data
export const metadata = {
  metadataBase: "https://modern-personal-brand-portfolio.vercel.app", // Base URL for the website
  title: "Soren Blank", // Title of the website
  description:
    "I'm Sayeed Mahmood Evrenos, a tech devotee breaking the mold. Rejecting conventional education for hands-on expertise. Powered by Linux, fueled by ambition. Learning web development to master the digital frontier. No nonsense, just progress..", // Description of the website
  image: "https://modern-personal-brand-portfolio.vercel.app/embed.png", // Image for the website
  keywords: ["Soren", "Blank", "Soren D. Blank"], // Keywords for the website
  openGraph: {
    // Open Graph data for the website
    images: [
      {
        url: "https://modern-personal-brand-portfolio.vercel.app/og-image.png", // Open Graph image for the website
      },
    ],
  },
  twitter: {
    // Twitter card data for the website
    images: [
      {
        url: "https://modern-personal-brand-portfolio.vercel.app/og-image.png", // Twitter card image for the website
      },
    ],
  },
};

// Viewport object for the website
// Contains theme color
export const viewport = {
  themeColor: "#ffffff", // Theme color for the website
};

// RootLayout functional component
// The component receives a 'children' prop, which is the content to be rendered within the layout
export default function RootLayout({ children }) {
  // Render the RootLayout component
  // The component is an HTML document with a 'lang' attribute of 'en'
  // The body of the document has the 'loaded' class and contains the Preloader component and the children prop
  return (
    <html lang="en">
      <body className="loaded">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
