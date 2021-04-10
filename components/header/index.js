import Link from 'next/link'
import styles from './index.module.scss'

const Header = () => { 
  return (
    <header className={styles.header}>
      <div className="container">
        <Link href='/'><a className={styles.link}>Anasayfa</a></Link>
      </div>
    </header>
  );
}

export default Header;