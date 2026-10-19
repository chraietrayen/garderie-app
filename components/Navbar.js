export default function Navbar({ name }) {
  return <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top"><div className="container py-2">
    <a className="navbar-brand fw-bold text-dark" href="#accueil"><span className="brand-mark" aria-hidden="true">★</span>{name}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavigation" aria-label="Afficher le menu"><span className="navbar-toggler-icon"/></button>
    <div className="collapse navbar-collapse" id="mainNavigation"><ul className="navbar-nav ms-auto gap-lg-3"><li className="nav-item"><a className="nav-link" href="#accueil">Accueil</a></li><li className="nav-item"><a className="nav-link" href="#services">Services</a></li><li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li></ul></div>
  </div></nav>;
}
