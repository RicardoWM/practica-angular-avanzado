module.exports = {
  name: 'external-pais',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/external-pais',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
