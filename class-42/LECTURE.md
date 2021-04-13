# Class 42: Advanced React Native

## Warm Up

Continue working on our Express warm up server.

* Check out your pull requests! [Express Warm Up Application](https://github.com/jacobknaack/express-warmup)

## Code Review

* James building with Xcode.
  * iOS simulator not linked correctly.
* Carly needed to install Xcode.
* Jason D and Bill: Expo CLI misconfigures WSL.
  * Android studio SDK can break WSL.

* How was using hardware features?
  * Camera
  * Permissions
  * Accelerometer / Motion

Jason Q: Permissions / Contacts working
James: Location services.

* Options for running a dev build.
  * 3 Options
    * Running things through the simulator for iOS
      * Running code on your iOS is kinda hard
      * Apple has super stict privacy requirements for developers.
      * You can add you app bundle, to Test Flight.
        * Requires a developer account with Apple that costs about 100 bucks a year.
        * Requires a re$$view process by apple.
    * Emulation on your actual device.
      * Works for iOS devices as well.
      * Take your android and plug it in via usb
      * Android studion will build your application bundle.
      * No simulator as far as I know.
    * Publishing you bundle to the Expo CDN (content delivery network)
      * allows anyone with an `expo` url to open yor app with expo go.

* EXPO bundler uses a URL to serve your application that is build from expo build tools
  * local: points to your the machine running the `start` script
  * LAN: points to your router, but ends up getting the same built code.
  * Tunnel: provides a public url that points to remote bundling server.
    * Remote server gets an upload of the bundle and serves it to an devide with the exp:// url

## Publish and Building our Applications

### Publish

* Part of CLI commands
* Puts your source code on the EXPO CDN
* Build your app binaries so no need to build yourself (either with the bundler or with Xcode / Android)
* Takes a (little) while, but there are more roadblocks.
  * Issues with your `app.json` will result in cryptic errors.

### Expo Build

Command for creating a complete standalone application.

* When you are ready to publish for real (android play, iOS app store)
  * You have to specify a release type:
    * android
    * ios
* Still requires an expo account.
* In order to build properly we need to tell our app.json file what to call our application.
  * iOS: add `bundleIdentifier` and `buildNumber`
  * Android: add `package` and `versionCode`
    * represents a name for your application ie: `com.organizationName.appName`
    * represents a semantic version number: `1.0.0` - iOS , 1 - android
