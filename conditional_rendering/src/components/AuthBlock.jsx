import { useContext } from "react"
import { Settings } from "../context/Settings"

const AuthBlock = () => {

    const Context = useContext(Settings)

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        Context.setUserData({
            name: formData.get('name'),
            group: formData.get('group'),
        });

        Context.setIsLoggedIn(true);
    }

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <h3>Регистрация</h3>
            <input
                type="text"
                name="name"
                placeholder="Имя студента"
                defaultValue={Context.isLoggedIn ? Context.userData.name : ''}
                required
                style={styles.input}
            />
            <input
                type="text"
                name="group"
                placeholder="Название группы"
                defaultValue={Context.isLoggedIn ? Context.userData.group : ''}
                required
                style={styles.input}
            />
            <button type="submit" style={styles.button}>
                { Context.isLoggedIn ? 'Сохранить' : 'Войти' }
            </button>
        </form>
    );
}

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '100%',
        maxWidth: '300px',
        margin: '100px auto',
    },
    input: {
        padding: '8px 12px',
        fontSize: '14px',
        border: '1px solid #cccccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
    },
    button: {
        padding: '10px',
        fontSize: '14px',
        backgroundColor: '#0066cc',
        color: '#ffffff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default AuthBlock;