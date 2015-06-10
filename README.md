Plastic
=======

Plastic is boilerplate code that helps you to build a simple website for your game studio. Plastic uses the static blogging engine [Jekyll](http://jekyllrb.com) which is written in Ruby. Compared to blog systems like Wordpress, a static blogging engine does not require any database or server-side scripts, thus making a site easier to deploy, faster to load and be able to handle more requests.

With Jekyll you do changes locally by editing text files in the project directory. To publish your changes, run the `jekyll build` command and then upload the contents of the `_site` folder to your FTP server.

The project is prepopulated with example content from our game studio Spaces of Play. Please make sure to replace with your own content before deploying your website. "Future Unfolding" copyright 2013-2015 Spaces of Play UG (haftungsbeschränkt).

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
The homepage is represented by index.html in the project directory. General information about your studio is stored in `_data/studio.yml`.

# Game pages

## Adding a new game

To add a new game, duplicate an existing game folder (e.g. `future-unfolding`) to use as a template. Name the new folder after your game using `-` instead of spaces. Open the file `_includes/navigation` and add a link to the game page inside the `ul` element.

## Promoter integration

You can load public review quotes and awards from [Promoter](http://www.promoterapp.com) automatically for each game page. In the Front Matter of your game page, set the `promoter-url` variable to your the url of your public page (without `http://`). The reviews and awards will be displayed inside the `<ul id="awards"></ul>` and `<ul id="reviews"></ul>` container tags. You can move the container tags around on your page however you wish. You can also delete one of them if you only want to display awards or review quotes.

## Gallery

Plastic allows you to quickly add a simple gallery with screenshots to each game page. See `future-unfolding/index.html` for an example. Note that the `slug` front matter must be set to the name of the folder where you game page resides.

## Social icons

Plastic supports quick and easy inclusion of social icons for Twitch, Twitter, Facebook and Tumblr. See `future-unfolding/index.html` for an example.

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

* Color schemes
* Move site options into separate config/data file
* Populate meta tags from config file
* Support for Twitter Cards and Facebook Open Graph
* Add option to automatically include EU Cookie Consent
* Add instructions how to host on Heroku
* Setup RSS
* Create default CSS theme
* Option to host assets on CDN