import "./globals.css";

export const metadata = {
  title: "Names",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
