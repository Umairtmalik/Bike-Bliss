import "./globals.css";
import Navbar from "../components\\ui/Navbar";


export const metadata = {
  title: "Bike Bliss",
  description: "Ride with passion. Ride with us.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
