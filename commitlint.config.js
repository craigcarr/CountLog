// https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 120],
  }
};
