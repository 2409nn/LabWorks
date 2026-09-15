import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Средний');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) return;

        const newTask = {
            id: Date.now(),
            title: title.trim(),
            description: description.trim(),
            isCompleted: false,
            priority,
            dueDate: dueDate || 'Не указан'
        };

        if (onAddTask) {
            onAddTask(newTask);
        }

        setTitle('');
        setDescription('');
        setPriority('Средний');
        setDueDate('');
    };

    const styles = {
        form: {
            width: '90%',
            maxWidth: '450px',
            margin: '20px auto',
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: '#ffffff',
            border: '1px solid #e0e0e0',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
            boxSizing: 'border-box',
            fontFamily: 'Arial, sans-serif'
        },
        formTitle: {
            margin: '0 0 15px 0',
            fontSize: '20px',
            color: '#333333'
        },
        fieldGroup: {
            marginBottom: '15px',
            display: 'flex',
            flexDirection: 'column'
        },
        label: {
            fontSize: '14px',
            fontWeight: 'bold',
            marginBottom: '5px',
            color: '#555555'
        },
        input: {
            padding: '10px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            fontSize: '14px',
            outline: 'none',
            width: '100%',
            boxSizing: 'border-box'
        },
        textarea: {
            padding: '10px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            fontSize: '14px',
            minHeight: '70px',
            resize: 'vertical',
            outline: 'none',
            width: '100%',
            boxSizing: 'border-box'
        },
        row: {
            display: 'flex',
            gap: '10px',
            marginBottom: '15px'
        },
        rowField: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column'
        },
        button: {
            width: '100%',
            padding: '12px',
            backgroundColor: '#007bff',
            color: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            fontSize: '15px',
            fontWeight: 'bold',
            cursor: 'pointer'
        }
    };

    return (
        <form style={styles.form} onSubmit={handleSubmit}>
            <h3 style={styles.formTitle}>Создать задачу</h3>

            <div style={styles.fieldGroup}>
                <label style={styles.label}>Название задачи *</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Введите название..."
                    style={styles.input}
                    required
                />
            </div>

            <div style={styles.fieldGroup}>
                <label style={styles.label}>Описание</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Введите подробности..."
                    style={styles.textarea}
                />
            </div>

            <div style={styles.row}>
                <div style={styles.rowField}>
                    <label style={styles.label}>Приоритет</label>
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        style={styles.input}
                    >
                        <option value="Низкий">Низкий</option>
                        <option value="Средний">Средний</option>
                        <option value="Высокий">Высокий</option>
                    </select>
                </div>

                <div style={styles.rowField}>
                    <label style={styles.label}>Срок</label>
                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        style={styles.input}
                    />
                </div>
            </div>

            <button type="submit" style={styles.button}>
                Добавить задачу
            </button>
        </form>
    );
};

export default TaskForm;