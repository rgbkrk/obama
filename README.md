# JavaScript Obama Style
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]

[![js-obama-style](http://i.imgur.com/69YzN85.png)](https://github.com/rgbkrk/obama)

### CODE like Obama

> Many [have asked me](https://www.quora.com/What-was-the-one-line-JavaScript-that-president-Obama-wrote-as-part-of-the-Hour-of-Code-2014) what [code] President Obama wrote. It was a single line of JavaScript:

```JavaScript
moveForward(100);
```

> The President asked if he needs to type the `F` in upper-case, and he got the `()` and the `;` right too, he was very precise and didn't make a typing mistake.

-- *Hadi Partovi, CEO, Code.org*

We all want to be precise with no typing mistakes, just like Obama. We've got your back with `obama`!

## Install

```bash
npm install -g obama
```

## Rules

![Like a mic drop but for semi-colons](http://i.imgur.com/jbXMppy.png)

Importantly:

- **semicolons**
- Presidential Seal of Approval
- Check [feross/standard] for the rest of the rules.

## Badge

Use this in one of your projects? Include one of these badges in your readme to
let people know that your code is using obama style.

[![js-obama-style](https://cloud.githubusercontent.com/assets/836375/9341487/d9b0f024-45bb-11e5-9da4-0de5a9f922da.png)](https://github.com/rgbkrk/obama)

```markdown
[![js-obama-style](https://cloud.githubusercontent.com/assets/836375/9341487/d9b0f024-45bb-11e5-9da4-0de5a9f922da.png)](https://github.com/rgbkrk/obama)
```

[![js-obama-style](https://img.shields.io/badge/code%20style-obama-brightgreen.svg?style=flat-square)](https://github.com/rgbkrk/obama)

```markdown
[![js-obama-style](https://img.shields.io/badge/code%20style-obama-brightgreen.svg?style=flat-square)](https://github.com/rgbkrk/obama)
```

## Usage

The easiest way to use JavaScript Obama Style to check your code is to install it
globally as a Node command line program. To do so, simply run the following command in
your terminal (flag `-g` installs `obama` globally on your system, omit it if you want
to install in the current working directory):

```bash
npm install obama -g
```

After you've done that you should be able to use the `obama` program. The simplest use
case would be checking the style of all JavaScript files in the current working directory:

```
$ obama
Error: Use JavaScript Obama Style
  lib/wh.js:950:11: Expected '===' and instead saw '=='.
```

### What you might do if you're clever

1. Add it to `package.json`

  ```json
  {
    "name": "my-cool-package",
    "devDependencies": {
      "obama": "*"
    },
    "scripts": {
      "test": "obama && node my-normal-tests-littered-with-semicolons.js"
    }
  }
  ```

2. Check style automatically when you run `npm test`

  ```
  $ npm test
  Error: Code style check failed:
    lib/wh.js:950:11: Expected '===' and instead saw '=='.
  ```

3. Never give style feedback on a pull request again! (unless it's about semicolons)

### Custom Parser
To use a custom parser, install it from npm (example: `npm install
babel-eslint`) and add this to your package.json:

```json
{
  "obama": {
    "parser": "babel-eslint"
  }
}
```

### Ignoring files

Just like in `standard`, The paths `node_modules/**`, `*.min.js`, `bundle.js`, `coverage/**`, hidden files/folders
(beginning with `.`), and all patterns in a project's root `.gitignore` file are
automatically excluded when looking for `.js` files to check.

Sometimes you need to ignore additional folders or specific minfied files. To do that, add
a `obama.ignore` property to `package.json`:

```json
"obama": {
  "ignore": [
    "**/out/",
    "/lib/select2/",
    "/lib/ckeditor/",
    "tmp.js"
  ]
}
```

### Make it look `snazzy`
If you want prettier output, just install the [`snazzy`](https://github.com/feross/snazzy) package and pipe `obama` to it:

```bash
$ obama --verbose | snazzy
```

See [feross/standard] for more information.

![Gah look at that CODE](http://i.imgur.com/Z6HlOOg.png)

[travis-image]: https://img.shields.io/travis/rgbkrk/obama.svg?style=flat-square
[travis-url]: https://travis-ci.org/rgbkrk/obama
[npm-image]: https://img.shields.io/npm/v/obama.svg?style=flat-square
[npm-url]: https://npmjs.org/package/obama
[downloads-image]: https://img.shields.io/npm/dm/obama.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/obama
[feross/standard]: https://github.com/feross/standard
[Flet/semistandard]: https://github.com/Flet/semistandard
