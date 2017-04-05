import EZFlux from 'ez-flux';
import ezFlux from './ezFlux';

class EZVue {
  constructor(ez) {
    this.ez = ez;
  }
  addState(data, stateMap) {
    const stateFulData = data;
    const handlers = [];

    Object
      .keys(stateMap)
      .forEach((scopeName) => {
        const { change } = EZFlux.getEventNames(scopeName);
        const assignEzState = () =>
          stateMap[scopeName].forEach((key) => {
            stateFulData[scopeName][key] = this.ez.state[scopeName][key];
          });

        stateFulData[scopeName] = {};
        assignEzState();

        handlers.push([change, assignEzState]);
        this.ez.on(change, assignEzState);
      });

    Object.defineProperty(stateFulData, 'removeListeners', {
      enumerable: false,
      value: () =>
        handlers.forEach(([eventName, handler]) =>
          this.ez.removeListener(eventName, handler),
        ),
    });
    return stateFulData;
  }
}

const ezVue = new EZVue(ezFlux);

if (typeof window !== 'undefined') window.ezFlux = ezFlux;

export default ezVue;
