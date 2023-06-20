import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import styles from './styles.module.css'

function Loader() {
    return (
        <div className={styles.loaderContainer}>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}

export default Loader;