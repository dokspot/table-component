import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableComponent from './components/Table/TableComponent'
import useData from './data/hooks/useData'
import useColumns from './data/hooks/useColumns'
import useActions from './data/hooks/useActions'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <TableComponent
      loading={false}
      useData={useData} 
      useColumns={useColumns}
      useActions={useActions}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
