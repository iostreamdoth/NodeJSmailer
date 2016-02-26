var nodemailer = require('nodemailer');
var email = require('./email')
var loader = require('csv-load-sync');
var filename = "test.csv"


//CSV to JSON
var csvData = loader(filename);
var senderemail="";
var senderpassword="";
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('email id? ', function(answer)  {
  senderemail = answer;
  

  	rl.question('password? ', function(password)  {
	    senderpassword= password
	    rl.close();

	    sendmails()
	});
});

function sendmails()
{
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
	    auth: {
	        user:senderemail,
	        pass:senderpassword
	    }
	});

	for(var n =0;n<csvData.length;n++){
		
		var emailadd = csvData[n].email;
		var firstname = csvData[n].firstname;
		var company = csvData[n].company;
		var body="Hi " + firstname + ",<br/><br/>";
		
		var subject = "Subject " + company 
		
		//Send
		if(csvData[n].sendmail ==1){
			email.sendemail(emailadd,body,subject,"Filename",transporter)
		}
	}

	
}




