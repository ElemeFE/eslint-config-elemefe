# eslint-config-elemefe

This package provides Elemefe's base JS .eslintrc as an extensible shared config.

## Usage

### eslint-config-elemefe

Our default export contains all of our ESLint rules, including ECMAScript 6.

First, install this package
```sh
npm install --save-dev eslint-config-elemefe eslint
```
Then add following contents to your .eslintrc file
```
{
  "extends": "elemefe"
}
```

### eslint-config-elemefe/legacy

For some legacy project using es5.

First, install this package
```sh
npm install --save-dev eslint-config-elemefe eslint
```
Then add following contents to your .eslintrc file
```
{
  "extends": "elemefe/legacy"
}
```

### eslint-config-elemefe/react
First, install this package and necessary plugins
```sh
npm install --save-dev eslint-config-elemefe eslint babel-eslint eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y
```
Then add following contents to your .eslintrc file
```
{
  "extends": "elemefe/react"
}
```

## License
MIT
