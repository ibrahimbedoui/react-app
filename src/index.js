import ReactDOM from 'react-dom/client';
import App from "./App";

import {store} from './app/store';
import { Provider } from 'react-redux';


{/*ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider> 
  
  </React.StrictMode>,
  document.getElementById('root')
);*/}
//new react 18 set up 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store ={store}> <App/> </Provider>);