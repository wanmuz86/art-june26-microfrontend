import './public-path'
import { createRoot } from 'react-dom/client';
import type { Root } from 'react-dom/client';
import './index.css';
import App from './App';

let root: Root | null = null;

// Similar to previous code, 
// rewrite it so that root - windows can be exposed to the host app

// Modify the definition to accept props
// Default it to {}
function renderApp(props: MicroAppProps = {}) {
 const rootElement = document.getElementById('root') as HTMLElement;
 root = createRoot(rootElement);
 // pass down the code to the App Component
 root.render(<App {...props}/>);
}


// Qiankun lifecycle methods
// To override the event whem the microapp is loaded
export async function bootstrap() {
 console.log('Micro-app bootstrapped');
}
// To override the event when the microapp is mounted to parent app
// this method receive a props as parameter
// prop handling - data from parent to microapp will be retrieved here here
// props - is what is passed from the hostapp to microapp

export async function mount(props: MicroAppProps) {
 console.log('Micro-app mounted', props);
 // pass the props inside renderApp function
 renderApp(props);
}


// remove hostapp from the parent app
export async function unmount() {
 console.log('Micro-app unmounted');
 if (root) {
   root.unmount();
   root = null;
 }
}

// window.__POWERED_BY_QIANKUN__ - > it is a microapp (called from the parent)
if (window.__POWERED_BY_QIANKUN__) {
  window['micro-app'] = { bootstrap, mount, unmount };
} else {
  // it is nor a microapp -> called directly : localhost:4173
 renderApp();
}
