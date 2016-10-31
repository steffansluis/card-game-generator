const DEFAULT_COMPONENT = 'playing-card';

const COMPONENT_ROUTES = {
  'small-talk-title': 'small-talk/v2/title',
  'small-talk-type': 'small-talk/v2/type',
  'small-talk-background': 'small-talk/v2/background',

  'small-talk-card': 'small-talk/v2/card',

  'small-talk-goal-card': 'small-talk/v1/goal-card',

  'small-talk-concept-card': 'small-talk/v2/concept/card',
  'small-talk-concept-left': 'small-talk/v2/concept/left',
  'small-talk-concept-right': 'small-talk/v2/concept/right',
};

function mapComponentName(route) {
  let key = Object.keys(COMPONENT_ROUTES).find((key) => route === key);
  return key != null ? COMPONENT_ROUTES[key] : null;
}

module.exports = name => {
  let component = mapComponentName(name) || name || DEFAULT_COMPONENT;
  return require(`./components/${component}`);
}
