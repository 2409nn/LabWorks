import '../App.css'

function WelcomePage({ title, desc }) {
    return (
        <main className="welcome-page">
            <h1 className="welcome-title">{title}</h1>
            <p className="welcome-text">{desc}</p>
        </main>
    );
}

export default WelcomePage;