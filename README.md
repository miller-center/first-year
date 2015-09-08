# Foundation libsass template

This is a template to start your own project that uses Grunt and libsass!

## Requirements

You'll need to have the following items installed before continuing.

  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Grunt](http://gruntjs.com/): Run `[sudo] npm install -g grunt-cli`
  * [Bower](http://bower.io): Run `[sudo] npm install -g bower`

## Components

This project uses the following open-source libraries and frameworks:

  * Foundation 5
  * JQuery 2
  * [Precision Icons](http://tomswebspace.com/round-social-media-icons)
  * Slick Carousel

## Quickstart

```bash
git clone git@github.com:zurb/foundation-libsass-template.git
npm install && bower install
```

While you're working on your project, run:

`grunt`

And you're set!

Leave a Terminal window open with Grunt running on it.  It will watch your directory and compile .jade and .scss files into .html and .css

## Directory Structure

  * `scss/_settings.scss`: Foundation configuration settings go in here
  * `scss/first-year.scss`: Project-wide styles go here
  * `scss/home.scss`: Landing page styles go here
  * `scss/issue.scss`: 'Bucket' Page styles go here
  * `scss/essay.scss`: Essay styles go here
  * Other subcomponents can get their own pages, e.g `_header.scss` and are included in major pages.
