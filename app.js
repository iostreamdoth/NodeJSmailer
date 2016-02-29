var nodemailer = require('nodemailer');
var email = require('./email')
var loader = require('csv-load-sync');
var filename = "contacts.csv"


//CSV to JSON
var csvData = loader(filename);
var senderemail="";
var senderpassword="";
const readline = require('readline');
var transporter;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('email id? ', function(answer)  {
  senderemail = answer;
  

  	rl.question('password? ', function(password)  {
	    senderpassword= password
	    rl.close();

	    transporter = nodemailer.createTransport({
			service: 'Gmail',
		    auth: {
		        user:senderemail,
		        pass:senderpassword
		    }
		});

	    setTimeout(sendmails,3000);
	});
});

function sendmails()
{
	
	setTimeout(processObject, 10000);
	
	
}
function processObject()
{

	var obj;
	if(csvData.length>0)
	{
		obj = csvData.shift();

	}
	else
	{
		return;
	}

		var emailadd = obj.email;
		var firstname = obj.firstname;
		var company = obj.company;
		var body="Hi " + firstname + ",<br/><br/>";
		var subject = "Job Application for sotware engineer role at " + company 
		//console.log(obj)
		//Send
		if(obj.sendmail ==1){
			email.sendemail(emailadd,body,subject,"Nishant_S-Resume.pdf",transporter,function(){ 
				sendmails();
			})
		}
		else
		{
			sendmails();
		}
}




