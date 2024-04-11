const express = require("express")
const collection = require("./mongo")
const Complaint = require("./mongo1");
const Admin = require("./mongo3");
const  AdminData= require("./mongo4");
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())





app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.post("/complaint", async (req, res) => {
    const { name, complaintType, location, description } = req.body;

    try {
        // Create a new complaint instance
        const newComplaint = new Complaint({
            name,
            complaintType,
            location,
            description
        });

        // Save the complaint to the database
        await newComplaint.save();

        // Respond with success message
        res.json({ message: "Complaint submitted successfully!" });
    } catch (error) {
        // Handle errors
        console.error("Error submitting complaint:", error);
        res.status(500).json({ error: "Failed to submit complaint. Please try again later." });
    }
})

// app.post("/", async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         // Find admin by email and password
//         const admin = await Admin.findOne({ email, password });

//         if (admin) {
//             // Admin found, send success response
//             res.json("exist");
//         } else {
//             // Admin not found, send failure response
//             res.json("notexist");
//         }
//     } catch (error) {
//         // Handle errors
//         console.error("Error logging in:", error);
//         res.status(500).json("fail");
//     }
// })


app.post("/update-data", async (req, res) => {
    const { cement, asphalt, concrete, stones, labour } = req.body;

    try {
        await AdminData.create({ cement, asphalt, concrete, stones, labour });
        res.json({ message: "Data updated successfully!" });
    } catch (error) {
        console.error("Error updating data:", error);
        res.status(500).json({ error: "Failed to update data. Please try again later." });
    }
});

app.listen(8000,()=>{
    console.log("port connected");
})

