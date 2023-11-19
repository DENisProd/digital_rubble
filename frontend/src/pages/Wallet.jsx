import styles from './wallet.module.scss'
import {useState} from "react";
import cn from 'classnames'
import UserAvatar from '../assets/user_avatar.jpg'

export const Wallet = () => {
    const [totalBalance, setTotalBalance] = useState(8973.00)

    const send = () => {

    }

    const get = () => {

    }

    return (
        <div className={styles.wallet_container}>
            <div className={styles.balance_container}>
                <header>
                    <div className={cn(styles.flex_hor, styles.jc_between)}>
                        <div className={cn(styles.user_card, styles.flex_hor, styles.jc_center)}>
                            <img src={UserAvatar}/>
                            <p>Alexander</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                 fill="none">
                                <g clipPath="url(#clip0_458_3613)">
                                    <path d="M13.875 7.5L9 12.375L4.125 7.5" stroke="white" stroke-width="1.5"
                                          stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_458_3613">
                                        <rect width="18" height="18" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                        <div className={styles.notify}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22"
                                 fill="none">
                                <path
                                    d="M10.0167 18.9582C7.86672 18.9582 5.72505 18.6165 3.68339 17.9332C2.92505 17.6832 2.35005 17.1415 2.10005 16.4582C1.85005 15.7749 1.93339 14.9915 2.34172 14.3082L3.40005 12.5415C3.63339 12.1499 3.84172 11.4165 3.84172 10.9582V9.2082C3.84172 5.79987 6.60839 3.0332 10.0167 3.0332C13.4251 3.0332 16.1917 5.79987 16.1917 9.2082V10.9582C16.1917 11.4082 16.4001 12.1499 16.6334 12.5415L17.6917 14.3082C18.0834 14.9582 18.1501 15.7332 17.8917 16.4415C17.6334 17.1499 17.0667 17.6915 16.3501 17.9332C14.3084 18.6249 12.1667 18.9582 10.0167 18.9582Z"
                                    fill="white"/>
                                <path
                                    d="M10.0001 21.0831C9.10843 21.0831 8.23343 20.7164 7.6001 20.0831C6.96676 19.4498 6.6001 18.5748 6.6001 17.6831H7.8501C7.8501 18.2498 8.08343 18.7998 8.48343 19.1998C8.88343 19.5998 9.43343 19.8331 10.0001 19.8331C11.1834 19.8331 12.1501 18.8664 12.1501 17.6831H13.4001C13.4001 19.5581 11.8751 21.0831 10.0001 21.0831Z"
                                    fill="white"/>
                                <path
                                    d="M10 10.7662C9.65833 10.7662 9.375 10.4829 9.375 10.1412V7.36621C9.375 7.02454 9.65833 6.74121 10 6.74121C10.3417 6.74121 10.625 7.02454 10.625 7.36621V10.1412C10.625 10.4912 10.3417 10.7662 10 10.7662Z"
                                    fill="white" fill-opacity="0.3"/>
                                <rect x="12.6" y="0.6" width="6.8" height="6.8" rx="3.4" fill="#7264FF" stroke="#E597FF"
                                      stroke-width="1.2"/>
                            </svg>
                        </div>
                    </div>

                    <div className={styles.balance_cont}>
                        <h1>Общий баланс: </h1>

                        <div className={styles.total_balance}>₽ <span>{totalBalance}</span></div>
                    </div>

                    <div className={cn(styles.flex_hor, styles.jc_center)}>
                        <button className={"button"} onClick={send}>Отправить</button>
                        <button className={"button"} onClick={get}>Принять</button>
                    </div>
                </header>
            </div>

            <main>
                <div className={cn(styles.flex_hor, styles.jc_between, styles.title_container)}>
                    <h2>Быстрые переводы</h2>
                    <button>Посмотреть все</button>
                </div>

                <div className={cn(styles.flex_hor, styles.column)}>

                </div>

            </main>
        </div>
    )
}