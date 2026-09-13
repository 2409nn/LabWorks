import React from 'react';

const EmptyState = ({
                        title = "Нет данных",
                        description = "Здесь пока ничего нет",
                        onAction,
                        actionText = "Обновить"
                    }) => {
    return (
        <div style={styles.container}>
            <h3 style={styles.title}>{title}</h3>
            <p style={styles.description}>{description}</p>
            {onAction && (
                <button style={styles.button} onClick={onAction}>
                    {actionText}
                </button>
            )}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        textAlign: 'center',
        width: '100%',
        boxSizing: 'border-box'
    },

    title: {
        margin: '0 0 6px 0',
        fontSize: '18px',
        fontWeight: 'bold',
    },
    description: {
        margin: '0 0 16px 0',
        fontSize: '14px',
    },
    button: {
        padding: '8px 16px',
        fontSize: '14px',
        backgroundColor: '#0066cc',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    }
};

export default EmptyState;