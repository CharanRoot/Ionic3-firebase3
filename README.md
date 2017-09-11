# Ionic 3 Authentication Using Firebase 3 with AngularFire2.
This is starter repo for Ionic 3 Authentication with Firebase 3.

This Project have Reigster page, Forgot password page, Login in, Home page with All check and error message.

## Install
```
1) Download Project

2) npm install

3) ionic serve.
```
### Firebase Account

Create your firebase account and create new Project.

Get your newly created firebase project config and update following code in `src/app/app.module.ts`
```ts
export const firebaseConfig = {
  apiKey: "<your-key>",
  authDomain: "<your-project-authdomain>",
  databaseURL: "<your-database-URL>",
  storageBucket: "<your-storage-bucket>"
};
```


## Sample Screen App screen shoots

![signin](https://user-images.githubusercontent.com/27700962/30284198-40d3888c-96e8-11e7-9ed5-8bade2347646.JPG)
![register](https://user-images.githubusercontent.com/27700962/30284216-4d8abd84-96e8-11e7-95e9-9aef9e75bfd4.JPG)
![forgot](https://user-images.githubusercontent.com/27700962/30284221-51c0a3c8-96e8-11e7-9d7b-cf265ace0b2f.JPG)
![errors](https://user-images.githubusercontent.com/27700962/30284229-5422c146-96e8-11e7-9304-cc19acb4e320.JPG)
![success](https://user-images.githubusercontent.com/27700962/30284232-55d519f8-96e8-11e7-8233-b790b77e2189.JPG)

## This Application was tested with the following configuration
```
cli packages:

    @ionic/cli-plugin-ionic-angular : 1.4.0 
    @ionic/cli-utils                : 1.6.0 
    ionic (Ionic CLI)               : 3.6.0 

local packages:

    @ionic/app-scripts : 2.1.3
    Ionic Framework    : ionic-angular 3.6.0

System:

    Node       : v6.9.5
    OS         : macOS Sierra
    Xcode      : Xcode 8.3.3 Build version 8E3004b
    ios-deploy : 1.9.1
    ios-sim    : 5.0.8
    npm        : 3.10.10
```
