# Class 43: Gatsby and Contemporary Frameworks / TypeScript Basics

## Code Review

What did you create?!!
  * what went well, what was hard?

* James: Artistic App that asks - Is your data private?
* Jason Q: Uses accelerometer - displays phone movements?
  * expo-motion api.

* Bill: Pokemon fetch.
  * expo-speech - pass a string and audio is output.

* Nick: Hello Me / Mirror app
  * Getting the things up and running on the phone.

* Hardware specific features are hard test.

## Gatsby

A static website generator. Runs some JS and outputs HTML, CSS, and JS.  Uses JAM stack design principles.

* JAM stack breaks up you apllication into Javascript, APIs, and Markup.
  * APIs - a list of interfaces that run to query data.  Build Static files.
  * JS - the language that does the things.
  * Markup - metadata that you app needs to inject into your build.

Gatsby uses these principles to create HTML CSS and JS.

* Provides a cli: `npm install -g gatsby-cli`
* Use he cli to create your template, much like create-react-app
  * Use react by default.
  * Gatsby Markup uses JSX, but you can change if needed.
    * API - get data from sources
      * fetch from a CMS.
      * fetch from messages database.
  * Improves SEO.
    * static site have more data and thuse search engines can supply better info to searches.
    * Dyanmic sites need to be inerfaced with.
    * Automaticalluy adds meta tags to your html / adds site maps for seatch engines.
* Gatsby is NOT designed for dynamic content such as web applications.
  * Chat - 1 page, and all your messages are dynamically created.
    * updates mutiple times a second.
  * Great for portfolios, blog platforms.
    * updates multiple times a day, hour.
      * Each updates can trigger a rebuild of static files.

## Typescript

JavaScript without any abbiguty in terms of wha types things are:
  * Immutable Types
    * string
    * numbers
    * boolean
      * undefined
      * null
  * Complex / Compound type
    * Array []
    * Objects {} (Typescript will force to define our properties).

Using typescript intrduces the need to compile your code.
  * Superset of javascript: all javascript is technically valid typescript, but typescript will not compile if you do not declare your types.
