import { useState, useEffect, useContext } from "react";
import {Settings} from "../context/Settings.js";

const Header = () => {

    const Context = useContext(Settings);

    const setPageToReg = (event) => {
        event.preventDefault();
        Context.setActivePage('reg');
    }

    const toggleNotif = (event) => {
        event.preventDefault();
        Context.setHasWarning((prev) => !prev);
    }

    const setPageToMaterial = (event) => {
        event.preventDefault();
        Context.setActivePage('mat');
    }

    return (
        <header style={styles.header}>
            <div style={styles.logo}>
                <span style={styles.logoText}>Кабинет Студента</span>
            </div>

            <nav style={styles.nav}>
                <a style={styles.link} onClick={setPageToMaterial}>Материалы</a>
                <a style={styles.link} onClick={setPageToReg}>Профиль</a>
                <button style={styles.button} onClick={toggleNotif}>{Context.hasWarning ? 'выкл' : 'вкл'} уведомления</button>
            </nav>

            <div style={styles.profile}>
                <div style={styles.avatar}> { Context.userData.name[0].toUpperCase() } </div>
                <div style={styles.info}>
                    <span style={styles.name}>{ Context.userData.name }</span>
                    <span style={styles.group}>{ Context.userData.group }</span>
                </div>
            </div>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '60px',
        padding: '0px 20px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #cccccc',
        boxSizing: 'border-box'
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },
    logoText: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#333333'
    },
    nav: {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#0066cc',
        color: '#ffffff',
        border: 'none',
        padding: '10px',
        borderRadius: '5px',
    },
    link: {
        color: '#555555',
        textDecoration: 'none',
        fontSize: '15px'
    },
    profile: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },
    avatar: {
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        backgroundColor: '#0066cc',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        fontWeight: 'bold'
    },
    info: {
        display: 'flex',
        flexDirection: 'column'
    },
    name: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#333333'
    },
    group: {
        fontSize: '12px',
        color: '#666666'
    }
};

export default Header;