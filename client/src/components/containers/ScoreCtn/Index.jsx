import styles from './ScoreCtn.module.scss';

export default function ScoreCtn(props) {
    const { playerName, 
            playerPoints, 
            opponentPoints } = props;

    return (
        <div className={styles.score_ctn}>
            <p>{playerName}</p>
            <p className={styles.score_player}>{playerPoints}</p>
            <p>:</p>
            <p className={styles.score_computer}>{opponentPoints}</p>
            <p>computer</p>
        </div>
    )
}