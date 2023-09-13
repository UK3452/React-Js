import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Utkarsh's Blog",
  description: "Created by Utkarsh Kumar",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
