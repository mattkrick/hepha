# Hepha
_"aphrodite's ugly husband for global styles"_ 

##Installation
`npm i -S hepha`

## What's it do
Allows you to write global inline styles (normalizers, resets, 3rd party css overrides)

aphrodite is a 2-part contract. 
It uses `StyleShee.create` to generate a unique, modular classname, 
and then `css()` to inject the styles and definitions into the DOM.
That's what makes aphrodite beautiful.

Globals are ugly. 
They aren't unique.
They are rarely `!important`.

...but they're necessary.

That's where Hepha comes in.

## API

```js
injectGlobals(injectStyleOnce, globalStyles)
```

## Example

```js
import {injectGlobals} from 'hepha';
import {injectStyleOnce} from 'aphrodite/lib/inject';
import {themeColors} from './myThemeColors';
const globalStyles = {
  html: {
    fontFamily: [
      {
        "fontFamily": "FontFoo",
        "fontWeight": 400,
        "fontStyle": "normal",
        "src": "url('data:application/octet-stream;base64,d09...') format('woff2')"
      },
      {
        "fontFamily": "FontFoo",
        "fontWeight": 400,
        "fontStyle": "italic",
        "src": "url('/static/fonts/foo.woff2') format('woff2')"
      }
    ]
  },
  '*': {
   boxSizing: 'border-box' 
  },
  'body #a0-namespace.a0-theme-default .a0-panel button.a0-primary': {
    backgroundColor: `${themeColors.warm} !important`
  }
};

const statelessComponent = (props) => {
  // it MUST go inside your component, just like `css()` 
  injectGlobals(injectStyleOnce, globalStyles);
  return <div>Foo</div>
}
```

## How it works

Heaven forbid you read 11 lines of code.

## Is it performant?

Aphrodite only injects to the DOM when necessary.
Hepha only calls aphrodite once per object (so don't recreate your `globalStyles` object on rerender).


## License

MIT
