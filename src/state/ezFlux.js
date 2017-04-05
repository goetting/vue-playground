import EZFlux from 'ez-flux';

const ezFlux = new EZFlux({
  todo: {
    values: {
      items: [
        { todoText: 'catch cat' },
        { todoText: 'clean cat' },
        { todoText: 'feed cat' },
        { todoText: 'eat cat' },
      ],
    },
    actions: {
      add: (todoText, { items }) => {
        items.push({ todoText });
        return { items };
      },
      remove: (i, { items }) => {
        items.splice(i, 1);
        return { items };
      },
    },
  },
}, {
  console: 'log',
});

if (typeof window !== 'undefined') window.ezFlux = ezFlux;

export default ezFlux;
