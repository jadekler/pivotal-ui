const _ = require('lodash');

function assignToGlobal(modules) {
  modules.forEach((module) => {
    _.each(module, function(value, key) {
      global[key] = value;
    });
  });
}

assignToGlobal([
  require('pui-react-alerts'),
  require('pui-react-autocomplete'),
  require('pui-react-back-to-top'),
  require('pui-react-buttons'),
  require('pui-react-collapse'),
  require('pui-react-dividers'),
  require('pui-react-draggable-list'),
  require('pui-react-lists'),
  require('pui-react-dropdowns'),
  require('pui-react-expander'),
  require('pui-react-grids'),
  require('pui-react-iconography'),
  require('pui-react-images'),
  require('pui-react-labels'),
  require('pui-react-typography'),
  require('pui-react-media'),
  require('pui-react-modals'),
  require('pui-react-notifications'),
]);