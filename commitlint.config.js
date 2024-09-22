module.exports = {
  extends: ['@commitlint/config-conventional'],

  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'chore',
        'revert',
        'ci',
        'perf',
        'build',
        'release',
        'deps',
        'config',
        'security',
      ],
    ],
    'subject-case': [2, 'always', 'sentence-case'],
  },
};
