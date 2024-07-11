import { render } from 'inferno';
import './index.css';
import Clock from './components/Clock.js';
import reportWebVitals from './reportWebVitals.js';

render(<Clock />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
