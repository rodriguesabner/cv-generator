import { RouterProvider } from 'react-router-dom'
import router from './routes'
import GlobalStyles from './styles/GlobalStyles'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Modal from './components/Modal'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        <div className='App'>
          <Modal />
          <GlobalStyles />
          <RouterProvider router={router} />
        </div>
      </Provider>
    </DndProvider>
  )
}

export default App
