
exports.sendemail = function(to,body,subject,attachments,transporter,callback)
{

	var mailOptions = {
	    from: '', // sender address
	    to: to, // list of receivers
	    subject: subject, // Subject line
	    html: body,
	    attachments: [{path:attachments}] // html body
	};
	

	


	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	    	console.log("Not sent to : ",to)
	        return;
	    }
	    console.log("Sent to : ",to)
	    //console.log('Message sent: ' + info.response);
	    callback();
	});
	//callback();
}