// app/layout.tsx
import "./globals.css";
import Navbar from "../components/ui/Navbar";
import { SessionWrapper } from "../components/SessionWrapper";

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
        <SessionWrapper>
          <Navbar />
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
