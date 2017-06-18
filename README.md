# t-scroll
[![Backers on Open Collective](https://opencollective.com/t-scroll/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/t-scroll/sponsors/badge.svg)](#sponsors) 

![enter image description here](http://t-scroll.com/theme/images/about.png)

## Quick start
* Clone the repo: `git clone git@github.com:crazychicken/t-scroll.git`
* Install with npm: `npm install --save-dev t-scroll`
* Install with npm: `npm install --save-dev crazychicken/t-scroll`
* Or download the [latest release](https://github.com/crazychicken/t-scroll/archive/master.zip)

## Demo
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

* If you need `setTimeout`, you need insert the container attribute `t_show="..."`
```html
<div class="zoomIn" t_show="1">"..."</div>
<div class="zoomIn" t_show="2">"..."</div>
```

* Or you want to `t_show` run see first screen. You have to add `.t_animated`
```html
<div class="box-center">
    <div class="zoomIn t_animated" t_show="1"> ... </div>
    <div class="zoomIn t_animated" t_show="2"> ... </div>
</div>
```

## Call the function

```html
<script type="text/javascript">
    Tu.t_scroll({
      't_element': '.zoomIn'
    })
</script>
```

## Options
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
  |   ├── style.css
  |   └── t-scroll.min.css
  └── js/
        └── t-scroll.min.css
sass/
  ├── // All Folders Sass Files
  ├── style.scss
  └── t-scroll.min.scss
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

This project exists thanks to all the people who contribute. [[Contribute]](blob/master/CONTRIBUTING.md).
<a href="graphs/contributors"><img src="https://opencollective.com/t-scroll/contributors.svg?width=890" /></a>


## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/t-scroll#backer)]

<a href="https://opencollective.com/t-scroll#backers" target="_blank"><img src="https://opencollective.com/t-scroll/backers.svg?width=890"></a>


## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/t-scroll#sponsor)]

<a href="https://opencollective.com/t-scroll/sponsor/0/website" target="_blank"><img src="https://opencollective.com/t-scroll/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/t-scroll/sponsor/1/website" target="_blank"><img src="https://opencollective.com/t-scroll/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/t-scroll/sponsor/2/website" target="_blank"><img src="https://opencollective.com/t-scroll/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/t-scroll/sponsor/3/website" target="_blank"><img src="https://opencollective.com/t-scroll/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/t-scroll/sponsor/4/website" target="_blank"><img src="https://opencollective.com/t-scroll/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/t-scroll/sponsor/5/website" target="_blank"><img src="https://opencollective.com/t-scroll/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/t-scroll/sponsor/6/website" target="_blank"><img src="https://opencollective.com/t-scroll/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/t-scroll/sponsor/7/website" target="_blank"><img src="https://opencollective.com/t-scroll/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/t-scroll/sponsor/8/website" target="_blank"><img src="https://opencollective.com/t-scroll/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/t-scroll/sponsor/9/website" target="_blank"><img src="https://opencollective.com/t-scroll/sponsor/9/avatar.svg"></a>



## Copyright and license

Code and documentation copyright 2017, MIT license.
