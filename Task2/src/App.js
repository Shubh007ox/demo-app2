import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NotesNavbar from './Components/nacBar';
import Notes from './Components/notes';

function App() {
  return (
    <React.Fragment>
      <NotesNavbar />
      <Notes />
      <ToastContainer  position="top-center" />
    </React.Fragment>

  );
}

export default App;