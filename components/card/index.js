import { connect } from 'react-redux';
import { addVote } from '../../redux/actions';
import Link from 'next/link';
import styles from './index.module.scss';

const Card = (props) => {
  return (
    <div className={styles.card} key={props.data.id}>
      <div className={styles.card__body}>
        <Link href={`/employee/${props.data.id}/`}>
          <img
            className={styles.card__image}
            src={`https://i.pravatar.cc/150?img=${props.data.uid}`}
            alt={props.data.name}
          />
        </Link>
        <div className={styles.card__vote}>{props.data.vote}</div>
        <h4 className={styles.card__title}>
          <Link href={`/employee/${props.data.id}/`}>{props.data.name}</Link>
        </h4>
        <p>{props.data.name}@gmail.com</p>
        <p>{props.data.rocket}</p>
        <button
          className={styles.card__button}
          onClick={() => props.addVote(props.data.id)}
        >
          OY VER
        </button>
      </div>
    </div>
  );
};

export default connect(null, { addVote })(Card);
