quicklists
===

```sh
ionic new quicklists blank --v2
ionic serve
ionic g page Intro
ionic g page Checklist
ionic g provider Data
ionic platform add android
```
## plugins
bundle现代版的browser到app里边(会增大app的体积 但能提高程序的性能)
android: crosswalk
ionic plugin add cordova-plugin-crosswalk-webview --save

ios: wkwebview-engine
ionic plugin add https://github.com/driftyco/cordova-plugin-wkwebview-engine.git --save

Cordova默认会使用UIWebView, 需要在config.xml中加入以下配置:
```xml
  <feature name="CDVWKWebViewEngine">
    <param name="ios-package" value="CDVWKWebViewEngine"/>
  </feature>
  <preference name="CordovaWebViewEngine" value="CDVWKWebViewEngine"/>
```

## csp
```html
<meta http-equiv="Content-Security-Policy"
      content="font-src 'self' data:; img-src * data:; default-src gap://ready file://* *; script-src 'self' 'unsafe-inline' 'unsafe-eval' *; style-src 'self' 'unsafe-inline' *">
```
参见: http://www.ruanyifeng.com/blog/2016/09/csp.html

