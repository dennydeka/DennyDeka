import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Alamat from './components/Alamat';
import Konten from './components/Konten';
import Waktu from './components/Waktu';
import Penutup from './components/Penutup';

import ReactFullpage from '@fullpage/react-fullpage'
function App() {
  return (
    
      <ReactFullpage
        //fullpage options
        licenseKey = {'YOUR_KEY_HERE'}
        scrollingSpeed = {1000} 
        controlArrows={false}
        scrollBar={false}
        loopBottom={false}

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Header/>
              <Konten/>
              <Waktu/>
              <Alamat/>
              <Penutup/>
            </ReactFullpage.Wrapper>
          );
        }}
      />
  );
}

export default App;
