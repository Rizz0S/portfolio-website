import React, {useState} from 'react';
import styles from './resume.modules.css';

import resume from '../static/resume.pdf'

export default function Resume () {

    return (
        <div className={styles.content}>
            <object data={resume} className={styles['resume-pdf']}/>
        </div>
    )
}