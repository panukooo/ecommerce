import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import EShopMain from './Components/EShop';
import ShoppingCart from './Components/ShoppingCart';
import store from './store.js';
import {Provider} from 'react-redux';
import SuperConcha from './Components/SuperConcha';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <EShopMain />
      <ShoppingCart />
      <SuperConcha />
    </Provider>
  </StrictMode>,
)
