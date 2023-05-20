import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from './note/App';
// import { QueryClient, QueryClientProvider } from 'react-query';
// const client = new QueryClient();

// import './global.css';
//import App from './basic/function/App';
// import App from './shopping/App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// ReactDOM.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>,
//   <QueryClientProvider client={client}>
//   <App />
// </QueryClientProvider>,
//   document.getElementById('root')
// );
