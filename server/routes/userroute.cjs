const router=require('express').Router()
const fillCon=require('../controller/cont.cjs')
const userVal=require('../middleware/authval.cjs')
router.post('/fillCon' , userVal,fillCon)






module.exports=router