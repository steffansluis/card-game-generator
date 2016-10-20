const DEFAULT_COMPONENT = 'playing-card';

const COMPONENT_ROUTES = {
  'small-talk-concept-card': 'small-talk/concept-card',
  'small-talk-goal-card': 'small-talk/goal-card',
}

function mapComponentName(route) {
  let key = Object.keys(COMPONENT_ROUTES).find((key) => route === key);
  return key != null ? COMPONENT_ROUTES[key] : null;
}

module.exports = name => {
  let component = mapComponentName(name) || name || DEFAULT_COMPONENT;
  return require(`./components/${component}`);
}
