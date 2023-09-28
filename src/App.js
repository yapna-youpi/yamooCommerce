import AppRoot from './components/AppRoot';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {

	return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        rtl={false}
        pauseOnHover={false}
        theme="light"
      />
      <AppRoot />
    </div>
  );
}

export default App;
