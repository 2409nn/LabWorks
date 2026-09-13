import { useContext } from "react";
import { Settings } from "../context/Settings";
import EmptyState from "./EmptyState";

const ProductList = () => {
    const { materials } = useContext(Settings);

    if (!materials || materials.length === 0) {
        return (
            <div style={styles.container}>
                <EmptyState />
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <h3 style={styles.heading}>Учебные материалы</h3>
            <ul style={styles.list}>
                {materials.map((material) => (
                    <li key={material.id} style={styles.item}>
                        <span style={styles.title}>{material.title}</span>
                        <span
                            style={{
                                ...styles.status,
                                ...(material.completed ? styles.completed : styles.pending),
                            }}
                        >
              {material.completed ? "Завершен" : "В процессе"}
            </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    container: {
        width: "100%",
        maxWidth: "500px",
        margin: "40px auto",
        boxSizing: "border-box",
    },
    heading: {
        fontSize: "16px",
        fontWeight: "bold",
        margin: "0px 0px 12px 0px",
    },
    list: {
        listStyle: "none",
        padding: "0px",
        margin: "0px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    item: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 16px",
        backgroundColor: "var(--item-background)",
        borderRadius: "6px",
    },
    title: {
        fontSize: "14px",
        fontWeight: "500",
    },
    status: {
        fontSize: "12px",
        padding: "4px 8px",
        borderRadius: "4px",
        fontWeight: "bold",
    },
    completed: {
        backgroundColor: "#e6f4ea",
        color: "#1e7e34",
    },
    pending: {
        backgroundColor: "#fff3cd",
        color: "#856404",
    },
};

export default ProductList;