import Body from './components/Body';
import AppStore from './utils/Appstore';
import {Provider} from "react-redux";


function App() {
  return (
    <Provider store={AppStore}>
    <Body/>
    </Provider>
  )
  
  
}

export default App;
