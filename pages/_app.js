import '../styles/globals.scss'
import {Provider} from 'react-redux';
import store from '../redux/store';
import {fetchUser} from '../redux/actions';
import Header from '../components/header';
store.dispatch(fetchUser());

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  ); 
}

export default MyApp
