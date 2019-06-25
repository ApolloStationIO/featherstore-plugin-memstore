# featherstore-plugin-memstore [![Build Status](https://travis-ci.com/ApolloStationIO/featherstore-plugin-memstore.svg?branch=master)](https://travis-ci.com/ApolloStationIO/featherstore-plugin-memstore)

> Tiny, 200B in-memory storage for use with [featherstore](https://github.com/ApolloStationIO/featherstore).
> Replaces default `window.localStorage` use with in-memory storage.

_However, keep in mind that stored data will be cleared on page reload. Not recommended for storing data that you want to persist across sessions and page reloads._

## Install

`npm i featherstore featherstore-plugin-memstore`
or
`yarn add featherstore featherstore-plugin-memstore`

## Usage

```javascript
import featherstore from 'featherstore';
import memstore from 'featherstore-plugin-memstore';

const store = featherstore({
  storage: memstore // pass as `storage` in options
});
```

## License

MIT © [yatharthk](https://github.com/yatharthk)
