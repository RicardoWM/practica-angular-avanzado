module.exports = {
  name: 'banco-mundial',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/banco-mundial',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
