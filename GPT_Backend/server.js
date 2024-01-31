
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 8000;
const APIKEY = "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";
const APIURL = "https://api.openai.com/v1/chat/completions"

const app = express();


app.use(express.json());
app.use(cors());


app.post('/aichatbot', async (req,res) => {

const options = {
    method:"POST",
    headers: {
        "Authorization": `Bearer ${APIKEY}`,
        "Content-Type":"application/json"
    },

    body: JSON.stringify({
        model : "gpt-3.5-turbo",
        messages: [{role: "user", content: req.body.message}],
        max_tokens:100,
    })
}
try{

    const response = await fetch(APIURL,options)
    const data = await response.json()
    res.send(data)

}catch ( error) {
    console.error(error);
}


});

app.get('/',(req,res)=>{
    res.send("HELLO THERE TEST TEST 123")
})
app.listen(PORT , () => {
    console.log(`Server is running on hhtp://localhost:${PORT}`)
});


module.exports = app;