import React from 'react'
import styles from './Message.module.css'

type MessageType={
    avatar: string
    name: string
    message: string
    time: string
}
function Message(props: MessageType) {
    return (
        <div className={styles.wrapper}>

            <div className={styles.img}><img className={styles.radius} src={props.avatar} alt=""/></div>

            <div className={styles.text}>
                <div >
                    <p className={styles.name}>{props.name}</p>
                    <p className={styles.message}> {props.message}</p>
                </div>

                <div className={styles.time}>{props.time}</div>

            </div>

        </div>
    )
}

export default Message
