import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Invoices from './components/Invoices';
import NewInvoice from './components/NewInvoice';
import Expenses from './components/Expenses';
import NotFound from './components/NotFound';
import Invoice from './components/Invoice';
import InvoiceIndex from './components/InvoiceIndex';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Header />} />
      <Route path={'/invoices'} element={<Invoices />}>
        <Route index element={<InvoiceIndex />} />
        <Route path={'new'} element={<NewInvoice />} />
        <Route path={'/invoices/:invoiceId'} element={<Invoice />} />
      </Route>
      <Route path='/expenses' element={<Expenses />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
