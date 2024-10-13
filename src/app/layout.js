import "./globals.css";

export const metadata = {
  title: "Unit Converter",
  description: "Unit Converter",
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
