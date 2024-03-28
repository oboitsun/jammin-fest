import "./globals.css";

export const metadata = {
  title: "Juicy Fest 25'",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
