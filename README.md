# Integrating Firebase 3 with AngularFire2 into Ionic3

## Install
```
npm install
```
### Use your own Firebase Account
Its contian Login page , Forgot password page , Reigster page.

### Use your own Firebase Account
You will need to change the following code in `src/app/app.module.ts`
```ts
export const firebaseConfig = {
  apiKey: "<your-key>",
  authDomain: "<your-project-authdomain>",
  databaseURL: "<your-database-URL>",
  storageBucket: "<your-storage-bucket>"
};
```


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