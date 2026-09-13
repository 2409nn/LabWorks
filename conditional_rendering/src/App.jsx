import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AuthBlock from "./components/AuthBlock";
import StatusMessage from "./components/StatusMessage";
import ProductList from "./components/ProductList";
import { Settings } from "./context/Settings";

export default function App() {

    const [userData, setUserData] = useState({ name: 'Гость', group: '' });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activePage, setActivePage] = useState('reg');
    const [hasWarning, setHasWarning] = useState(true);

    const materials = [
        { id: 1, title: "JSX синтаксис", completed: true },
        { id: 2, title: "Props в компонентах", completed: false },
        { id: 3, title: "Условный рендеринг", completed: false },
    ];

    return (
        <Settings.Provider value={{
            userData,
            setUserData,
            activePage,
            setActivePage,
            isLoggedIn,
            setIsLoggedIn,
            hasWarning,
            setHasWarning,
            materials,
        }}>
            <main className="app">
                <Header />
                <StatusMessage hasWarning={hasWarning} />
                { activePage === 'reg' && (<AuthBlock />) }
                { activePage === 'mat' && (<ProductList />) }
            </main>
        </Settings.Provider>
    );
}