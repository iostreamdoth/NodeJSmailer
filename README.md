# (NodeJSMailer) Mailer client application for nodejs

NodeJSMailer provides basic functionalities to send emails. This project is useful to those who want to send an emails using a csv file.

csv columns-> firstname,lastname,email,company,jobtitle,sendmail

Basic useful feature list:

 * Send emails.
 * Use and csv file to send emails.
 * Add delays in in consecutive emails.
 * No need to store password and username, it's readline.
 * State whether a mail to be send to an email address by just setting a flag.




Pre requisties!

 * npm
 * nodejs

Node Modules required!

 * nodemailer
 * csv-load-sync
 * readline


clone this repository in to a directory.
```shell
$ git clone https://github.com/nishantsharmajecrc/NodeJSmailer.git
```
```shell
$ cd NodeJSmailer
$ npm install
```

To change the body of the mail modify these lines.



```javascript
var body="Hi " + firstname + ",<br/><br/>";
body += "My name is Name of myself. What's up"
body += "I'm looking for someone who can sell something to someone through someone like me" 
body +=	"<br/><br/>I have 4+ years of work experience salesman." 
body += "<br/><br/>Attached is my resume. Please refer me if you come across any salesman."
body += "<br/><br/>Thanks,<br/>Name of myself";
body += "<br/>LinkedIn: Some link<br/> Cell: Some cell number"
 ```
to start the application.
```javascript
//in Ubuntu
$ nodejs app.js 

// In other os
$ node app.js //in other OS's 
```
to start the application.
```javascript
email id? enter emailid
password? enter password 
// let the magic begin
```



Hope this helps.