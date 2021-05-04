// Une fonction basique qui représente un composant (un bloc de l'interface graphique)
// Ici on utilise une fonction et non une classe que le header ne supporte pas d'intéractions avec l'utilisateur
function Header() {
    // Un composant doit renvoyer une structure HTML (JSX en réalité) pour afficher quelque chose
    return (
        <header className="text-center py-5">
            <section className="container">
                <h1>JEAN Thibaut</h1>
                <p>Développeur Web</p>
            </section>
        </header>
    );
}

// On exporte notre fonction Header afin de pouvoir charger ce composant dans d'autres composants comme App
export default Header;