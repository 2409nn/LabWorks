import React from 'react';
import { useContext } from 'react';

const StatusMessage = ({ hasWarning, message = "У вас есть незавершенные задания" }) => {
    if (!hasWarning) {
        return null;
    }

    return (
        <div style={styles.container}>
            <span style={styles.text}>{message}</span>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '12px 16px',
        backgroundColor: '#fff3cd',
        border: '1px solid #ffe399',
        borderRadius: '6px',
        margin: '10px auto',
        width: '100%',
        maxWidth: '700px',
        boxSizing: 'border-box'
    },
    text: {
        fontSize: '14px',
        color: '#856404',
        fontWeight: '600'
    }
};

export default StatusMessage;