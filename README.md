Plastic
=======

Plastic is boilerplate code that helps you to build a simple website for your game or game studio. Plastic uses the static blogging engine [Jekyll](http://jekyllrb.com) which is written in Ruby. Compared to blogging systems like Wordpress, a static blogging engine does not require any database or server-side scripts, thus making a site easier to deploy, faster to load and be able to handle more requests.

The project is prepopulated with example content from our game studio Spaces of Play. Please make sure to replace with your own content before deploying your website. __"Future Unfolding" copyright 2013-2015 Spaces of Play UG (haftungsbeschränkt).__

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
# Table of Contents

- [Local setup on Windows](#local-setup-on-windows)
  - [Install Ruby](#install-ruby)
  - [Install Jekyll](#install-jekyll)
- [Run the site locally](#run-the-site-locally)
- [Site structure](#site-structure)
- [Game pages](#game-pages)
  - [Adding a new game](#adding-a-new-game)
  - [Promoter integration](#promoter-integration)
  - [Gallery](#gallery)
  - [Social icons](#social-icons)
  - [Twitter cards and Facebook Open Graph](#twitter-cards-and-facebook-open-graph)
- [Writing blog posts](#writing-blog-posts)
- [Images](#images)
- [Layouts](#layouts)
  - [Color schemes](#color-schemes)
- [Deploy](#deploy)
- [Thank you](#thank-you)
- [TODO](#todo)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Local setup on Windows

## Install Ruby

To run Jekyll locally you need to have Ruby installed.

First, download and install [Ruby 1.9.3](http://dl.bintray.com/oneclick/rubyinstaller/rubyinstaller-1.9.3-p551.exe?direct).

Now download the [Ruby Development Kit](https://github.com/downloads/oneclick/rubyinstaller/DevKit-tdm-32-4.5.2-20111229-1559-sfx.exe
).

Double-click the self-extracting executable and choose `C:\DevKit` as the directory to install the files into.

Open `Start Command Prompt with Ruby` and type the following:

```
cd C:\DevKit
ruby dk.rb init
ruby dk.rb install
```

Ruby is now installed on your Windows machine.

## Install Jekyll

To install Jekyll, make sure you're in the Ruby Command Prompt, `cd` into the project directory and then run:

```
gem install bundler
bundle install --without heroku
```

# Run the site locally

Start the Jekyll server to be able to view the site locally in your browser.

```
jekyll serve --no-watch
```

Open http://127.0.0.1:4000/ in your browser to view the site.

To preview your changes (such as a new blog post), open a second Command Prompt and then run the following command to export the site into the `_site` folder:

```
jekyll build
```

(The second Command Prompt allows you to keep the server running, instead of stopping and starting it again between building.)

# Site structure

All folders in the project that do _not_ start with an underscore are accessible on the website. 

The homepage is represented by `index.html` in the project directory. General information about your studio is stored in `_data/studio.yml`.

# Game pages

## Adding a new game

To add a new game, duplicate an existing game folder (e.g. `future-unfolding`) to use as a template. Name the new folder after your game using `-` instead of spaces. Open the file `_includes/navigation` and add a link to the game page inside the `ul` element.

## Promoter integration

You can load public review quotes and awards from [Promoter](http://www.promoterapp.com) automatically for each game page. In the Front Matter of your game page, set the `promoter-url` variable to your the url of your public page (without `http://`). The reviews and awards will be displayed inside the `<ul id="awards"></ul>` and `<ul id="reviews"></ul>` container tags. You can move the container tags around on your page however you wish. You can also delete one of them if you only want to display awards or review quotes.

## Gallery

Plastic allows you to quickly add a simple gallery with screenshots to each game page. See `future-unfolding/index.html` for an example. Note that the `slug` front matter must be set to the name of the folder where you game page resides.

## Social icons

Plastic supports quick and easy inclusion of social icons for Twitch, Twitter, Facebook and Tumblr. See `future-unfolding/index.html` for an example.

## Twitter cards and Facebook Open Graph

It is recommended to provide a key art asset or screenshot of your game that will automatically be displayed when someone shares the url of your game page on Twitter or Facebook. In the example setup, the path for that image is `_assets/images/future-unfolding/social`. The name of your image file is defined in the front matter:

```
social:
  image: futureunfolding.jpg
```

# Writing blog posts

To create a new blog post, create a new file in `_posts` with the following file name syntax: `2015-01-31-blog-post-title.md`

You can use both [Markdown](http://daringfireball.net/projects/markdown/syntax) as well as plain HTML to write your blog posts.

You can keep unfinished drafts of your blog posts in the [drafts folder](http://jekyllrb.com/docs/drafts/).

# Images

Images are stored in the `_assets/images` folder. To display an image on a page use the following syntax:

```
{% image logo.png alt="Logo" %}
```

Images should have double the size of the size that they are rendered in the browser to account for high-resolution (Retina) displays if possible.

* Blog post images should have a width of 1620px if they should span the whole column
* Game screenshots for image galleries should use the original size so they are easy for press to download and use in good quality 

# Layouts

There are five different layout templates available:

* page (general pages such as contact)
* post (blog posts)
* game (game pages)

You can choose the layout for a page using the so-called [Front Matter](http://jekyllrb.com/docs/frontmatter/) in Jekyll (a fancy word for meta data).

## Color schemes

You can define a color scheme per page. This is useful if you for example want a game page to reflect the color scheme of your game. Schemes are defined in the front matter of a page:

```
colors:
  - '#ffefc1'
  - '#e31616'
  - '#610b0b'
```

Colors are defined in the following order:

1. background color
2. link color
3. body text color

# Deploy

To build and deploy the site run the following command:

```
glynn
```

When being asked, enter your FTP password.

# Thank you

* Rudolf Kremers for allowing me to open source my Jekyll setup that has initially been created for his studio website [omni-labs.com](http://www.omni-labs.com)
* Ed Key for being the first test user of Plastic
* Erik Svedäng for introducing me to Jekyll

# TODO

* Add option to automatically include EU Cookie Consent
* Add instructions how to host on Heroku
* Setup RSS
* Create default CSS theme
* Option to host assets on CDN
* Instructions for Wordpress import