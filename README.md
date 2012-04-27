# remark

A simplistic, in-browser, markdown-driven slideshow tool targeted at people who know their way around HTML and CSS, featuring:

- Markdown formatting, with smart extensions

- Automatic syntax highlighting, with optional language hinting

- Slide scaling, thus similar appearance on all devices / resolutions

- Touch support for smart phones and pads, i.e. swipe to navigate slides

Check out [this remark slideshow](http://gnab.github.com/remark) for a brief introduction.

### Usage

It takes only a few, simple steps to get up and running with remark:

1. Create a boilerplate HTML container:

        <!DOCTYPE html>
        <html>
          <head>
            <title>Title</title>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
            <script src="https://github.com/downloads/gnab/remark/remark-0.3.5.min.js" type="text/javascript"></script>
            <style type="text/css" media="screen">
              /* Slideshow styles */
            </style>
          </head>
          <body>
            <textarea id="source">

        .center.middle
        # Title

        ---

        # Agenda

        1. Introduction
        2. Deep-dive
        3. ...

        ---

        # Introduction

            </textarea>
            <div id="slideshow"></div>
          </body>
        </html>

2. Enter you Markdown-formatted slideshow and any styles needed in the assigned areas.

3. Launch the HTML file in a decent browser and enjoy!

Check out [the remark wiki](http://github.com/gnab/remark/wiki) for more information.

### Slideshows created with remark

- [gnab.github.com/remark](http://gnab.github.com/remark)
- [gnab.github.com/editorjs](http://gnab.github.com/editorjs)
- [judoole.github.com/GroovyBDD](http://judoole.github.com/GroovyBDD)
- [kjbekkelund.github.com/nith-coffeescript](http://kjbekkelund.github.com/nith-coffeescript)
- [kjbekkelund.github.com/js-architecture-backbone](http://kjbekkelund.github.com/js-architecture-backbone)
- [bekkopen.github.com/infrastruktur-som-kode](http://bekkopen.github.com/infrastruktur-som-kode)
- [ivarconr.github.com/Test-Driven-Web-Development/slides](http://ivarconr.github.com/Test-Driven-Web-Development/slides)
- [havard.github.com/node.js-intro-norwegian](http://havard.github.com/node.js-intro-norwegian)
- [mobmad.github.com/js-tdd-erfaringer](http://mobmad.github.com/js-tdd-erfaringer)

### Credits

- [torgeir](http://github.com/torgeir), for invaluable advice and feedback.
- [kjbekkelund](https://github.com/kjbekkelund), for numerous commits.

### License

remark is licensed under the MIT license. See LICENCE for further
details.
