import viteLogo from '../public/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import InboxScreen from './components/sb/InboxScreen'
import store from './store/store';

function App() {

  return (
    <div className="App">
           <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
    
      <Provider store={store}>
        <InboxScreen />
      </Provider>
    </div>
  )
}

export default App
