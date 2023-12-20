import React from 'react';
import styles from './about-me.modules.css';

import self from '../static/self.png';

export default function AboutMe(props) {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Hello!</h1>
            <h2 className={styles.subhead}>My name is Summer Rain Rizzo.</h2>
            <img src={self} className={styles['self-img']} alt="a picture of myself that is totally not a selfie"></img>
            <div className={styles.content}>
                <p>I'm an ex-film major who loved being on the computer so much I decided to make it my career.</p>
                <p>Currently, I work as a software engineer on the Visualization Frameworks team at Bloomberg LP. I'm a firm advocate of diversity, inclusion, and accessibility. A few other interests of mine include listening to music, film photography, making various things from scratch, eating apples, and enthusing about my interests. And if you're feeling crazy, you can ask me about my espresso machine.</p>
                <p>I'll leave the rest of getting to know me to you.</p>
                <p>♡</p>
            </div>
        </div>
    )
}