import Head from 'next/head';
import { connect } from 'react-redux';
import styles from '../styles/home.module.scss';
import Card from '../components/card';

function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Employees</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          {props.employee
            ? Object.values(props.employee).map((launch, i) => (
                <Card data={launch} index={i} key={i} />
              ))
            : null}
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  employee: state.employees,
});

export default connect(mapStateToProps, null)(Home);
