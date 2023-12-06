const { join } = require('path');

module.exports = {
  root: true,
  extends: ['@marble/eslint-config/react'],
  settings: {
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.js'),
    },
  },
  ignorePatterns: ['/node_modules/', '/.cache/', '/build/', '/public/build/'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        'no-restricted-properties': [
          'error',
          {
            object: 'process',
            property: 'env',
            message: 'Use getServerEnv(...) instead',
          },
        ],
      },
    },
  ],
};
