RMIT ITF Taekwon-Do
===================

Website of the RMIT ITF Taekwon-Do club.

**http://rmittkd.com**

Official release: 16 November 2013.

The site is **responsive** and **accessible** (WCAG 2.0 level AA).



Performance
-----------

Latest [GTmetrix](http://gtmetrix.com/) report, 11 April 2014:

- Page Speed grade: **A** (98%)
- YSlow grade: **A** (93%)
- Page load time: **1.47s**


Distribution
------------

[Grunt](http://gruntjs.com/) is used for distribution. Clone the repository on your local machine, install the project's dependencies with `npm install`, then run `grunt dist`.

This command will lint JS files, copy all source files to the **dist** folder, then minify all JS and CSS files within that folder.


Deployment
----------

The site is hosted on [Heroku](https://www.heroku.com/‎). Deploying to Heroku requires a bit of [set up](https://devcenter.heroku.com/articles/quickstart)...

1. Install the [Heroku Toolbelt](https://toolbelt.heroku.com/).
2. Login to Heroku via the command line:
   `heroku login`
3. Provide your SSH key or create a new one when prompted.
4. Add a Git remote called **heroku** to your local repository:
   `heroku git:remote -a website-rmit-tkd`

Once this is done, the following steps let you deploy the **dist** folder to Heroku.

1. Commit any changes made to the code.
2. Push the **dist** subtree to the **heroku** remote:
   `git subtree push --prefix dist heroku master`


Known issues
------------

###Accessibility###

- Lack of focus indicator when tabbing through Youtube channel widget on social page.
- Keyboard trap caused by Youtube player on social page in Firefox.
- Unable to tab inside Youtube player on social page in Chrome.
- Potential keyboard trap due to infite scroll functionnality of Facebook iframe on social page.
