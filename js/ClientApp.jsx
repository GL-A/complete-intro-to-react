const ce = React.createElement;
const MyTitle = function(props) {
  return ce(
    'div',
    null,
    ce('h1', { style: { color: props.color } }, props.title)
  );
};
const MyFirstComponent = function() {
  return ce(
    'div',
    { id: 'first-comp' },
    ce(MyTitle, {
      title: 'Game of thrones',
      color: 'YellowGreen'
    }),
    ce(MyTitle, { title: 'Power', color: 'GreenYellow' }),
    ce(MyTitle, { title: 'Your face', color: 'peru' })
  );
};
ReactDOM.render(
  React.createElement(MyFirstComponent),
  document.getElementById('app')
);
