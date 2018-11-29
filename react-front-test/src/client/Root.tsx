import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';

interface Props {

}

const Root: React.SFC<Props> = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root;