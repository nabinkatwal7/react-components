import React from 'react';
import styles from './alert.module.css'

function Alert({isDefaultShown=false, timeout=250, type, message}: {isDefaultShown?: boolean, timeout?: number, type?: string, message?: string}) {
    const [isShown, setIsShown] = React.useState(isDefaultShown);
    const [isLeaving, setIsLeaving] = React.useState(false);

    let timeoutId = null

    React.useEffect(() => {
        setIsShown(true)
        return () => {
            clearTimeout(timeoutId)
        }
    },[isDefaultShown, timeout, timeoutId])

    const closeAlert = () => {
        setIsLeaving(true)
        timeoutId = setTimeout(() => {
            setIsLeaving(false)
            setIsShown(false)
        }, timeout)
    }

    return (
        isShown && (
            <div className={`${styles.alert} ${type} ${isLeaving ? styles.leaving : ''}`}
                 role="alert">
                <button className={styles.close} onClick={closeAlert} />
                {message}
            </div>
        )
    );
}

export default Alert;