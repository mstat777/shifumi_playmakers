import styles from './ChoiceBtn.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ChoiceBtn(props) {
    const {onClick, className, icon, tooltip} = props;

    return (
        <button type="button"
                onClick={onClick} 
                className={`${styles.button} ${className}`}>
            <FontAwesomeIcon icon={icon}/>
            <p className={styles.tooltip}>{tooltip}</p>
        </button>
    );
}