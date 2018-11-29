import modules from './modules';
import { createStore } from 'redux';

export default function configureStore() {
  const store = createStore(
    // preLoadedState,
    modules,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__
    && (window as any).__REDUX_DEVTOOLS_EXTNSION__()
  );
  return store;
}