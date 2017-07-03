![enter image description here](http://t-scroll.com/theme/images/about.png)

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Backers on Open Collective](https://opencollective.com/t-scroll/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/t-scroll/sponsors/badge.svg)](#sponsors) 

## Quick start t-scroll
* Clone the repo: `git clone git@github.com:crazychicken/t-scroll.git`
* Install with npm: `npm install --save-dev t-scroll`
* Install with npm: `npm install --save-dev crazychicken/t-scroll`
* Or download the [latest release](https://github.com/crazychicken/t-scroll/archive/master.zip)

## Demo
http://t-scroll.com/demo.html

## Demo Options
http://t-scroll.com/t-animate-options.html

## Documentation
http://t-scroll.com/documents.html

## How to use

* First, include CSS files into your HTML head:
```html
<link type="text/css" rel="stylesheet" href="./public/theme/css/t-scroll.min.css">
```

* Include file `t-scroll.min.js` into the footer.
```html
<script type="text/javascript" src="./public/theme/js/t-scroll.min.js"></script>
```

* Set HTML
```html
<div class="zoomIn">"..."</div>
<div class="zoomIn">"..."</div>
```

* If you need `setTimeout`, you need insert the container attribute `data-t-show="..."`
```html
<div class="zoomIn" data-t-show="1">"..."</div>
<div class="zoomIn" data-t-show="2">"..."</div>
```

* Or you want to `data-t-show` run see first screen. You have to add `.t-animated`
```html
<div class="box-center">
    <div class="zoomIn t-animated" data-t-show="1"> ... </div>
    <div class="zoomIn t-animated" data-t-show="2"> ... </div>
</div>
```

## Call the function

```html
<script type="text/javascript">
    Tu.tScroll({
      't-element': '.zoomIn'
    })
</script>
```

## Options t-animate
* bounceIn
* bounceOut
* bounceUp
* bounceDown
* bounceLeft
* bounceRight
* fadeIn
* fadeUp
* fadeDown
* fadeLeft
* fadeRight
* fadeUpBig
* fadeDownBig
* fadeLeftBig
* fadeRightBig
* flip
* flipX
* flipY
* lightSpeedUp
* lightSpeedRight
* lightSpeedDown
* lightSpeedLeft
* rollUp
* rollRight
* rollDown
* rollLeft
* rotate
* rotateUpLeft
* rotateUpRight
* rotateDownLeft
* rotateDownRight
* slideUp
* slideDown
* slideLeft
* slideRight
* zoomIn
* zoomInUp
* zoomInLeft
* zoomInDown
* zoomInRight
* zoomOut
* zoomOutUp
* zoomOutLeft
* zoomOutDown
* zoomOutRight

## Tree
```
public/
  └── theme/
      └── css/
      |   └── t-scroll.min.css
      └── js/
            └── t-scroll.min.js
sass/
  ├── // All Folders Sass Files
  └── t-scroll.min.scss // @import 'path sass file your project';
```

## Template full feature list

* Semantically Correct / Valid HTML Code
* HTML5, CSS3
* Javascript / JS6
* Full project and seed project (build with: Gulp, Sass, Javascript, Npm, Babel)
* Cross browser compatible ( Internet Explorer 10+, Firefox, Safari, Opera, Chrome etc. )
* W3C Valid source code, properly formatted and commented
* Animations CSS3

## Creators

#### Tuds - Crazychicken (CLGT Groups)
* website:  http://t-scroll.com/
* Github:   https://github.com/crazychicken/t-scroll
* Facebook: https://www.facebook.com/tudscss/
* Youtube:  https://www.youtube.com/channel/UCDACe-7BFGDucQoxTDfPotw
* Twtter:   https://twitter.com/mtu_truong

## Contributors

This project exists thanks to all the people who contribute. [[Contribute]](https://github.com/crazychicken/t-scroll/blob/master/CONTRIBUTING.md).

<a href="https://github.com/crazychicken/t-scroll/blob/master/CONTRIBUTING.md"><img src="https://opencollective.com/t-scroll/contributors.svg" /></a>


## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/t-scroll#backer)]

<a href="https://opencollective.com/t-scroll#backers" target="_blank"><img src="https://opencollective.com/t-scroll/backers.svg"></a>


## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/t-scroll#sponsor)]

<a href="https://opencollective.com/t-scroll#sponsor" target="_blank"><img src="https://opencollective.com/t-scroll/sponsors.svg"></a>


[downloads-image]: https://img.shields.io/npm/dm/t-scroll.svg
[npm-url]: https://www.npmjs.com/package/t-scroll
[npm-image]: https://img.shields.io/npm/v/t-scroll.svg


## Copyright and license

Code and documentation copyright 2017, MIT license.
