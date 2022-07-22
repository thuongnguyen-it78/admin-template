import { ConfigProvider as AntDConfigProvider } from 'antd'
import 'antd/dist/antd.min.css'
import NavigationScroll from 'commons/NavigationScroll'
import { antDConfig } from 'config'
import AuthProvider from 'contexts/AuthContext'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import 'scss/index.scss'
import App from './App'
import ConfigProvider from './contexts/ConfigContext'
import reportWebVitals from './reportWebVitals'
import store from './store'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AntDConfigProvider {...antDConfig}>
          <ConfigProvider>
            <AuthProvider>
              <BrowserRouter>
                <NavigationScroll>
                  <App />
                </NavigationScroll>
              </BrowserRouter>
            </AuthProvider>
          </ConfigProvider>
        </AntDConfigProvider>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
