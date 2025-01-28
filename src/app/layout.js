import localFont from "next/font/local";
import "./globals.css";

const ppRegular = localFont({
  src: "../assets/fonts/PPMori-Regular.woff",
  variable: "--font-pp-regular",
});

const ppSemiBold = localFont({
  src: "../assets/fonts/PPMori-SemiBold.woff",
  variable: "--font-pp-semibold",
});

const ppExtraBold = localFont({
  src: "../assets/fonts/PPMori-ExtraBold.woff2",
  variable: "--font-pp-extrabold",
});

export const metadata = {
  title: "49Maine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${ppRegular.variable} ${ppSemiBold.variable} ${ppExtraBold.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
