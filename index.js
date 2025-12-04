const express = require("express")

const app = express()
const PORT = 4000

app.get("/",()=>{
    res.send("Server is running on port 4000")
})

app.get('/data', (req, res) => {
    res.json([
                {
                    "id": 1,
                    "title": "Item One",
                    "price": 199
                },
                {
                    "id": 2,
                    "title": "Item Two",
                    "price": 299
                }
            ]
        )
})

app.listen(PORT, (req, res)=>{
    console.log("Server is running")
})