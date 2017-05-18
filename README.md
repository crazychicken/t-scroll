# t-scroll

![enter image description here](http://t-scroll.com/theme/images/about.png)

## Quick start
* Clone the repo: git clone git@github.com:crazychicken/t-scroll.git
* Install with npm: `npm install --save-dev t-scroll`
* Install with npm: `npm install --save-dev crazychicken/t-scroll`
* Or download the [latest release] (https://github.com/crazychicken/t-scroll/archive/master.zip)

## How to use

* First, include CSS files into your HTML head:
```html
<head>
    <link type="text/css" rel="stylesheet" href="./public/theme/css/t-scroll.min.css">
</head>
```

* Include file `t-scroll.min.js` into the footer.
```html
<script type="text/javascript" src="./public/theme/js/animation-scroll.min.js"></script>
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

* Or you want to `t_show` run see first screen. You have to add `.t_default .t_animated`
```html
<div class="box-center">
    <div class="zoomIn t_default t_animated" t_show="1"> ... </div>
    <div class="zoomIn t_default t_animated" t_show="2"> ... </div>
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

## Tree
```
public/
    └── theme/
    |   └── css/
    |       ├── style.css
    |       └── t-scroll.min.css
    |   └── js/
    |       └── t-scroll.min.css
    └── sass/
        ├── // All Folders Sass Files
        ├── style.scss
        └── t-scroll.min.scss
```

## Demo
http://t-scroll.com/t-animate-options.html

## Documentation
http://t-scroll.com/documents.html

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

## Copyright and license

Code and documentation copyright 2017, MIT license.
