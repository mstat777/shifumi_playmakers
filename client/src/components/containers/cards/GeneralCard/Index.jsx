import styles from '../Card.module.scss';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand, faHandFist, faHandScissors } from '@fortawesome/free-solid-svg-icons';

export default function GeneralCard({choice}) {
    const [image, setImage] = useState(null);
    const [bgrColor, setBgrColor] = useState(null);

    useEffect(() => {
        function changeImage(){
            if (choice === "rock") {
                setImage(faHandFist);
                setBgrColor(styles.rock);
            } else if (choice === "paper") {
                setImage(faHand);
                setBgrColor(styles.paper);
            } else if (choice === "scissors") {
                setImage(faHandScissors);
                setBgrColor(styles.scissors);
            }
        }

        changeImage();
    },[]);

    return (
        image && bgrColor &&
            <div className={`${styles.card_ctn} ${bgrColor}`}>
                <FontAwesomeIcon icon={image}/>
            </div>
    );
}