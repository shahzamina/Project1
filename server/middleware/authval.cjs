const validation=(req,res,next)=>{
  
     const { name, phone, email, services } = req.body;

    if (!name || !name.trim() || !email || !email.trim() || !phone || !phone.trim() || !services?.length) {
        return res.status(400).json({ message: 'All fields are required', success: false });
    }
        const emailRegrex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!emailRegrex.test(email))
        {
              return res.status(400).json({ message: "Please enter a valid email", success: false });
        }

         const phoneRegrex=/^03\d{9}$/
        if(!phoneRegrex.test(phone))
        {
              return res.status(400).json({ message: "Please enter a valid email with 11 digits start from 03", success: false });
        }
              // ✅ If all checks pass, move to controller
        next()
}

module.exports=validation