import "./globals.css";

export const metadata = {
  title: "CPRG 306 Assignment",
  description: "CPRG306-Assignment-Sukhman-Singh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}