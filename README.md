TS react
========

A working React typescript skeleton. Application code is written in ES6 Typescript and compiled for the browser via gulp, typescript, babel and browserify. 

To make the magic
--------------

```
$ npm run bootstrap
$ npm run likehell
```

Build
-----

See `gulpfile.js` for the shell commands that are run for the build. The process:

1. src/ (Typescript ES6) -> tsc -> build/es6 (ES6)
1. build/es6 -> babel -> build/es5 (ES5)
1. build/es5 -> browserify -> bundle.js (ES5 concatenated for the browser)
