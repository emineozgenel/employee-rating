import Head from 'next/head';
import { useEffect } from 'react';
import { gql } from '@apollo/client';
import client from '../../api/apollo-client';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import styles from '../../styles/employee.module.scss';

const Employee = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const user = Object.values(props.employee).find((c) => c.id === id);

  useEffect(() => {
    if (!props.post) router.push('/404');
  });

  return (
    <div className="employee">
      {props.post ? (
        <div className={styles.employee_info}>
          <Head>
            <title>{props.post.name} | Employees</title>
          </Head>
          <div className="container">
            <div className="d-flex flex-wrap">
              <img
                className={styles.employee_info__img}
                src="https://i.pravatar.cc/200"
                alt={props.post.name}
              />
              <div className={styles.employee_info__right}>
                <h2>{props.post.name}</h2>
                <p>Product Lead, CEO</p>
                <p>{props.post.name}@gmail.com</p>
                <p>17 Sage St. Jamestown, NY 14701</p>
                <p>0544 545 00 60</p>
                {user ? (
                  <p className={styles.employee_info__vote}>
                    Oy Sayısı: {user.vote}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="container">
        <h3>Hakkında</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim eu
          turpis egestas pretium aenean pharetra. Consectetur purus ut faucibus
          pulvinar elementum integer. In nisl nisi scelerisque eu ultrices vitae
          auctor eu. Cras semper auctor neque vitae tempus quam. Imperdiet proin
          fermentum leo vel orci porta non. Arcu vitae elementum curabitur vitae
          nunc sed velit. Ac tortor dignissim convallis aenean et. Nunc
          consequat interdum varius sit amet. Libero volutpat sed cras ornare
          arcu. Amet consectetur adipiscing elit pellentesque. Lectus quam id
          leo in vitae turpis. Quam lacus suspendisse faucibus interdum posuere
          lorem ipsum dolor. Neque sodales ut etiam sit amet nisl.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim eu
          turpis egestas pretium aenean pharetra. Consectetur purus ut faucibus
          pulvinar elementum integer. In nisl nisi scelerisque eu ultrices vitae
          auctor eu. Cras semper auctor neque vitae tempus quam. Imperdiet proin
          fermentum leo vel orci porta non. Arcu vitae elementum curabitur vitae
          nunc sed velit. Ac tortor dignissim convallis aenean et. Nunc
          consequat interdum varius sit amet. Libero volutpat sed cras ornare
          arcu. Amet consectetur adipiscing elit pellentesque. Lectus quam id
          leo in vitae turpis. Quam lacus suspendisse faucibus interdum posuere
          lorem ipsum dolor. Neque sodales ut etiam sit amet nisl.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim eu
          turpis egestas pretium aenean pharetra. Consectetur purus ut faucibus
          pulvinar elementum integer. In nisl nisi scelerisque eu ultrices vitae
          auctor eu. Cras semper auctor neque vitae tempus quam. Imperdiet proin
          fermentum leo vel orci porta non. Arcu vitae elementum curabitur vitae
          nunc sed velit. Ac tortor dignissim convallis aenean et. Nunc
          consequat interdum varius sit amet. Libero volutpat sed cras ornare
          arcu. Amet consectetur adipiscing elit pellentesque. Lectus quam id
          leo in vitae turpis. Quam lacus suspendisse faucibus interdum posuere
          lorem ipsum dolor. Neque sodales ut etiam sit amet nisl.
        </p>
      </div>
    </div>
  );
};

Employee.getInitialProps = async ({ query }) => {
  try {
    const { data } = await client.query({
      query: gql`
        query GetUser {
          users_by_pk(id: "${query.id}") {
            id
            name
            rocket
            timestamp
            twitter
          }
        }
      `,
    });
    return { 
      post: data ? data.users_by_pk : {}
    }
  } catch (e){
    return {}
  }
}

const mapStateToProps = (state) => ({
  employee: state.employees,
});

export default connect(mapStateToProps, null)(Employee);