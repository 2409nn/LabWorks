import React from 'react';

const Task = ({ taskData }) => {
    const {
        title = 'Без названия',
        description = '',
        isCompleted = false,
    } = taskData || {};

    const styles = {
        card: {
            width: '90%',
            maxWidth: '450px',
            margin: '20px auto',
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: '#ffffff',
            border: '1px solid #e0e0e0',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
            boxSizing: 'border-box',
            fontFamily: 'Arial, sans-serif',
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '12px'
        },
        title: {
            fontSize: '18px',
            fontWeight: 'bold',
            margin: 0,
            color: '#333333',
            textDecoration: isCompleted ? 'line-through' : 'none'
        },
        badge: {
            padding: '4px 10px',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: 'bold',
            color: isCompleted ? '#155724' : '#856404',
            backgroundColor: isCompleted ? '#d4edda' : '#fff3cd'
        },
        description: {
            fontSize: '14px',
            color: '#666666',
            lineHeight: '1.4',
            marginBottom: '16px'
        },
        footer: {
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '12px',
            color: '#888888',
            borderTop: '1px solid #f0f0f0',
            paddingTop: '10px'
        }
    };

    return (
        <div style={styles.card}>
            <div style={styles.header}>
                <h3 style={styles.title}>{title}</h3>
                <span style={styles.badge}>
          {isCompleted ? 'Завершено' : 'В процессе'}
        </span>
            </div>

            <p style={styles.description}>{description}</p>

        </div>
    );
};

export default Task;