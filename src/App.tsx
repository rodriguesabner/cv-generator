import { RouterProvider } from 'react-router-dom'
import router from './routes'
import GlobalStyles from './styles/GlobalStyles'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Modal from './components/Modal'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Modal />
        <GlobalStyles />
        <RouterProvider router={router} />
      </div>
    </Provider>
  )
}

export default App
