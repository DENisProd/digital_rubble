import styles from ''

export const Button = ( {children, buttonProps}) => {
    return (
        <button className={styles.button} {...buttonProps}>
            {children}
        </button>
    )
}