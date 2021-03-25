import React, {useState , useCallback} from 'react';
import './App.css'
import MyModal from "./MyModal";
import ModalPortal from "./MyModalPotal";

const App = () => {

  const [state , setState] = useState(false);

  const handleOpen = useCallback(() => {
    setState(true);
  },[]);

  const handleClose = useCallback(() => {
    setState(false);
  },[]);

  return (
    <div className='App'>
      <h1>안녕하세요 원동휘!</h1>
      <button onClick={handleOpen}>모달열기</button>
      {state && (
        <ModalPortal>
          <MyModal onClose={handleClose}/>
        </ModalPortal>
      )}
    </div>
  );
};

export default App;