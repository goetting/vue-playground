import EZFlux from 'ez-flux';

const ezFlux = new EZFlux({
  todo: {
    items: [],
  },
  actions: {
    add: (item, { items }) => items.push(),
    remove: (i, { items }) => items.splice(i, 1),
  },
});

if (typeof window !== 'undefined') window.ezFlux = ezFlux;

export default ezFlux;