import { Inter } from "next/font/google";
import Nav from '../components/Nav';
import "./globals.css";
import { NavProvider } from '../context/NavContext';
import '@fortawesome/fontawesome-svg-core/styles.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavProvider>
          <Nav />
          <div className="content">
            {children}
          </div>
        </NavProvider>
      </body>
    </html>
  );
}