# trombone!

Play a trombone sound!

## Package name problem!

Currently, somebody else has an old package published to npm under the name 'trombone', so I can't publish it there yet!
Meanwhile, you can add trombone to your package.json dependencies like this:

```json
  "trombone": "git://github.com/bchociej/trombone"
```


## Programmatically!

```javascript
var trombone = require('trombone');
trombone.play();
```

## From command line!

```bash
$ sudo npm install -g trombone
$ trombone
```

## As an npm script!

Add "trombone" to your dependencies, run `$ npm install`, then define an npm script as `node_modules/.bin/trombone`!
