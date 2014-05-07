RMIT ITF Taekwon-Do
===================

Website of the RMIT ITF Taekwon-Do club.

**http://rmittkd.com**

Official release: 16 November 2013.

The site is **responsive** and **accessible** (WCAG 2.0 level AA).



Performance
-----------

[GTmetrix](http://gtmetrix.com/) report of 11 April 2014, when the site was hosted on Heroku and managed via Cloudfare:

- Page Speed grade: **A** (98%)
- YSlow grade: **A** (93%)
- Page load time: **1.47s**

For various reasons, the site was rolled back to 000webhost. Since then, performance has dropped slightly due to the web host's forced ads.


Distribution
------------

[Grunt](http://gruntjs.com/) is used for distribution. Clone the repository on your local machine, install the project's dependencies with `npm install`, then run `grunt dist`.

This command will lint JS files, copy all source files to the **dist** folder, then minify all JS and CSS files within that folder.


Known issues
------------

###Accessibility###

- Lack of focus indicator when tabbing through Youtube channel widget on social page.
- Keyboard trap caused by Youtube player on social page in Firefox.
- Unable to tab inside Youtube player on social page in Chrome.
- Potential keyboard trap due to infite scroll functionnality of Facebook iframe on social page.
