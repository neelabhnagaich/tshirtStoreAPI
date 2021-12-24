const BigPromise = require('../middleware/bigPromise')

exports.home = BigPromise(async(req,res)=>{

    // const db = await somethingfromDB()
    res.status(200).json({
        success: true,
        "greeting":"Hello from API"
    })
})


// alternative way of above used here as try catch
exports.home = (req,res)=>{
    try {

        // const db = await somethingfromDB()
        res.status(200).json({
            success: true,
            "greeting":"this is a dummy route"
        })

        
    } catch (error) {
        console.log(error);
    }
    
}