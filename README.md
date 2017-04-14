# eslint-config-elemefe

This package provides Elemefe's base JS .eslintrc as an extensible shared config.

## Usage

### eslint-config-elemefe

Our default export contains all of our ESLint rules, including ECMAScript 6.

1. `npm install --save-dev eslint-config-elemefe eslint`
2. add `"extends": "elemefe"` to your .eslintrc

### eslint-config-elemefe/legacy

For some legacy project using es5.

1. `npm install --save-dev eslint-config-elemefe eslint`
2. add `"extends": "elemefe/legacy"` to your .eslintrc

### eslint-config-elemefe/react

1. `npm install --save-dev eslint-config-elemefe eslint babel-eslint eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y`
2. add `"extends": "elemefe/react"` to your .eslintrc

## License
MIT
