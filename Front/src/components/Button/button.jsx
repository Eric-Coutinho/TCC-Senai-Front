import styles from './button.module.css'

function Button({ text, type, onClick }) {
    return (
            <div className={type == "cancel" ? styles.buttonCancelBg : styles.buttonBg} onClick={onClick}>
                Cock and ball torture
            </div>
    )
}

export default Button;
