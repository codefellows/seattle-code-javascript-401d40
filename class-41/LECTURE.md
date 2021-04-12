# Class 41: React Native

## Announcements

* Whiteboard Finals: final whiteboard should scheduled / rescheduled today.
* Syncing with folks this week.
* Light labs his week.
  * Covering some Typescript
  * Other topics tha you are insterested.

## Warm Up

Creating a simple express server with a few routes, and a few error handlers.
* See `warm-up/simple-express`

## React Native / Expo

What is React Native?

* The OG React??
  * Library of components and build processes.
  * It came about a couple years after The React Library was published
  * A way to make the same React Syntax (ish) work for mobile devices
  * The goal was to make mobile app developer much easier.
    * Creating software for mobile requires 2 language code bases
    * Why not have 1?
      * that can also be used for web UI as well.
    * There are some subtle syntax differences but for he most part, the same.
      * Hardware specific things need to come from third software.
        * cocoapods / modules in android, need to be installed with npm / yarn (depency bundler).
  * We can now use hardware features only available to fancy phones.
    * cameras
    * accelerometers
    * calling and texting
      * Each feature will most liely require the installation of a library that let's us use these in JavaScript.
    * use `expo install expo-feature`
      * `expo install superagent`

### Expo Workflow Manager

* A contemporary to `create-react-app`
* Allows fast and easy source code creation and management amonsgt teams.
  * Goal: get a interface up and runnning asap
  * After a while you are probably going to want to `eject`
* Pros:
  * Codebase is easy to understand and run.
* Con:
  * Performance may suck at times.
    * In order to opimize and publish we will need to shed expo, and just manage React Naive on our own.
* do big teams keep expo around:
  * Yes, but it's not the source of truth.
