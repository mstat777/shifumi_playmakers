import styles from './MainBtn.module.scss';

export default function MainBtn(props){
    const {type, text, onClick, className} = props;

    return <button 
                type={type}
                onClick={onClick} 
                className={`${styles.button} ${className}`}>
                    {text}
            </button>
}