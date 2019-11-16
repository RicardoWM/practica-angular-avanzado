module.exports = {
  name: 'pais',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/pais',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
