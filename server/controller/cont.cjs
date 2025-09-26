const itemModel=require('../models/contact.cjs')
const sendEmail = require('../utils/sendmail.cjs'); // adjust path


const fillCon=async(req,res)=>{

    try{
        const {name,email,phone,services,comment}=req.body
        console.log(req.body)
       
        const newCon=new itemModel({name,email,phone,services})
        await newCon.save();
              // Prepare email
        const subject = 'New Contact Form Submission';
        const html = `
          <h3>New Contact Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Services:</strong> ${services.join(', ')}</p>
          <p><strong>Comment:</strong> ${comment || 'N/A'}</p>
        `;

        // Send email asynchronously
       await sendEmail({
            subject,
            html,
            text: `New contact from ${name}`,
            to: 'alishazmina7@gmail.com',  // receiver
            from: process.env.GMAIL_USER    // authenticated sender
        }).catch(err => console.error('Email failed:', err));

        // Send response once
        res.status(200).json({
            message: 'Form submitted successfully',
            success: true,
            data: newCon
        });
         //    res.status(200).json(newCon)

     
        

    }
    catch(err){
        res.status(500).json({message:'Internal server error ',
            success:false
        })
    }
}


module.exports=fillCon