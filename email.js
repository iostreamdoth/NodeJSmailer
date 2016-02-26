
exports.sendemail = function(to,body,subject,attachments,transporter)
{

	var mailOptions = {
	    from: '', // sender address
	    to: to, // list of receivers
	    subject: subject, // Subject line
	    html: body, // html body
	    attachments: [{path:attachments}] // attachments
	};
	console.log(to,to)

	


	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    console.log('Message sent: ' + info.response);

	});
}