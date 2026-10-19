import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const metadata = {
  title: "Les Petits Explorateurs",
  description: "Une garderie bienveillante pour grandir, jouer et apprendre."
};

export default function RootLayout({ children }) {
  return <html lang="fr"><body>{children}</body></html>;
}
