import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

import AuthProvider from 'contexts/AuthContext'
import 'scss/index.scss'
import ConfigProvider from './contexts/ConfigContext'
import store from './store'
import NavigationScroll from 'commons/NavigationScroll'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider>
        <ConfigProvider>
          <AuthProvider>
            <BrowserRouter>
              <NavigationScroll>
                <App />
              </NavigationScroll>
            </BrowserRouter>
          </AuthProvider>
        </ConfigProvider>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
