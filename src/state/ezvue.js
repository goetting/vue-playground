import EZFlux from 'ez-flux';
import ezFlux from './ezFlux';

export default class EZVue {
  constructor(ezFlux) {
    this.ezFlux = ezFlux;
  }
  addState(data, stateMap) {
    const result = data;
    const handlers = [];

    Object.keys(stateMap).forEach(scopeName => {
      const { change } = EZFlux.getEventNames(scopeName);
      const assignEzState = () => {
        stateMap[scopeName].forEach((key) => {
          result[scopeName][key] = this.ezFlux.state[scopeName][key];
        });
      };

      stateMap[scopeName] = {};
      handlers.push([change, assignEzState]);
      assignEzState();
      ezFlux.on(change, assignEzState);
    });

    Object.defineProperty(result, 'removeListeners', {
      enumerable: false,
      value: () =>
        handlers.forEach(([eventName, handler]) =>
          this.ezFlux.removeListener(eventName, handler)
        ),
    });
    return result;
  }
}

const ezVue = new EZVue(ezFlux);

if (typeof window !== 'undefined') window.ezFlux = ezFlux;

export default ezVue;