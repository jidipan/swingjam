const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'swing-jam',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

