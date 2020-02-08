module.exports = {
  '*.{js,jsx}': filenames => [
    'pretty-quick --staged',
    `eslint --fix ${filenames.join(' ')}`,
    `jest ${filenames.join(' ')} --bail --passWithNoTests`,
    'git add',
  ],
  '*.+(json|css|md)': ['prettier --write', 'git add'],
};
