const app=require('express')()

app.get('/',((req,res)=>{
    res.status(200).json({msg:"ok"})
}))

app.listen('5000')