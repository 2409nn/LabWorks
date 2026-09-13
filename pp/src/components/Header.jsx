import '../styles/Header.css'

const Header = () => {
    return (
        <header id="header">
            <h1>Header</h1>
            <ul>
                <li>
                    <a href="https://github.com/vitejs/vite" target="_blank">
                        <svg
                            className="button-icon"
                            role="presentation"
                            aria-hidden="true"
                        >
                            <use href="/icons.svg#github-icon"></use>
                        </svg>
                        Iskanderious
                    </a>
                </li>
                <li>
                    <a href="https://chat.vite.dev/" target="_blank">
                        <svg
                            className="button-icon"
                            role="presentation"
                            aria-hidden="true"
                        >
                            <use href="/icons.svg#discord-icon"></use>
                        </svg>
                        Kirill
                    </a>
                </li>
                <li>
                    <a href="https://x.com/vite_js" target="_blank">
                        <svg
                            className="button-icon"
                            role="presentation"
                            aria-hidden="true"
                        >
                            <use href="/icons.svg#x-icon"></use>
                        </svg>
                        X.com
                    </a>
                </li>
                <li>
                    <a href="https://bsky.app/profile/vite.dev" target="_blank">
                        <svg
                            className="button-icon"
                            role="presentation"
                            aria-hidden="true"
                        >
                            <use href="/icons.svg#bluesky-icon"></use>
                        </svg>
                        Bluesky
                    </a>
                </li>
            </ul>
        </header>
    )
}

export default Header;