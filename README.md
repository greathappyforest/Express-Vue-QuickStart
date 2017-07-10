# Express-Vue-QuickStart

## Introduction
A quick start setup for build MongoDB+Express+VueJS+Nodejs+Axios . Front-end and Back-end separation makes web application Scalable stable and maintainable. In this QuickStart, 
* Vuejs-->  Frontend  framewok
* Express-->  Web server and back-end API and  back-end service 
* MongoDB --> No-SQL database
* Axios --> Promise based HTTP client for the browser and node.js

Node: This web server not supporting IE8 and below because it uses ECMAScript 5 features. 


## Get Start

Download or clone from repo

Github: https://github.com/greathappyforest/Express-Vue-QuickStart

Running MongoDB in the local

Running ``` Npm install ```in both 'QuickStart' and 'client' folder. 

under 'client' folder
```Npm run build ```

Back to 'QuickStart' folder

```npm start```

Default server running on: http://127.0.0.1:9000

## Note:
### hostconfig
Change server Address and port in ''hostconfig.json'. After that make sure rebuild in client again.
### New component
When adding new component, for axios resful request:
```
import hostconfig from '../../../hostconfig.json'
```

Example of Get request
```
      getItems:function(){
	        axios.get('http://'+hostconfig.hostip+':'+ hostconfig.hostport+
	        '/api/marketplacedb')
	          .then(response => {
            // JSON responses are automatically parsed.
            this.items = response.data
          })
          .catch(e => {
            console.log(this.errors)
          })
      }
```
More restful check axios github documentation.

### Fresh get blank of child page
Reason for this error is Vuejs setting with history mod, and Server Configurations in the back-end.Make sure install middleware 
```
npm install connect-history-api-fallback --save
```
### http-proxy in the cloud
In the cloud deploy environment. Setting up a proxy mapping the port your running server to 80 port.

Use ```http-proxy``` middleware 
proxy.js setting up your domain, and runing with ```forever start xx.js``` as service.

## Refrerence 
https://vuejs.org/v2/guide/installation.html#Compatibility-Note
https://github.com/mzabriskie/axios
https://router.vuejs.org/en/essentials/history-mode.html
