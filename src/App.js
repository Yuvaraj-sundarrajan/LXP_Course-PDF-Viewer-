// import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/video';
// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//     </div>
//   );
// }

// export default App;
// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/store/fetchPdfStore';
import Pdfviewwithbtn from './components/pdfviewwithbtn';
// import  PDFViewer from '../src/components/PDFViewer' 
const App = () => (
  <Provider store={store}>
    <div className='App'>
     < Pdfviewwithbtn/>
    </div>

  </Provider>
);
 
export default App;
