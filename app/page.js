import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";

const apiUrl = process.env.API_URL || "http://localhost:4000";
async function getData(path, fallback) {
  try {
    const response = await fetch(`${apiUrl}${path}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`API ${path}: ${response.status}`);
    return response.json();
  } catch (error) { console.error(error); return fallback; }
}

export default async function HomePage() {
  const [garderie, services, activites] = await Promise.all([
    getData("/api/garderie", { nom:"Les Petits Explorateurs", slogan:"Grandir, jouer et apprendre ensemble.", description:"Un environnement chaleureux et stimulant où chaque enfant avance à son rythme.", image:"https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80" }),
    getData("/api/services", []),
    getData("/api/activites", [])
  ]);
  return <><Navbar name={garderie.nom}/><main><Hero garderie={garderie}/><Services services={services} activites={activites}/></main></>;
}
