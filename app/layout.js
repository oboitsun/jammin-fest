import "./globals.css";

export const metadata = {
  title: "Jammin 25'",
  description: "Jammin - Australia Reggae festival",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
