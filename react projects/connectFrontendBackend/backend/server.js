import express from 'express';

const app = express();

const quotesArray = [
    {
      id: 1,
      title: "Inspiration",
      content: "The best way to predict the future is to invent it."
    },
    {
      id: 2,
      title: "Motivation",
      content: "Do what you can, with what you have, where you are."
    },
    {
      id: 3,
      title: "Success",
      content: "Success is not the key to happiness. Happiness is the key to success."
    },
    {
      id: 4,
      title: "Perseverance",
      content: "It does not matter how slowly you go as long as you do not stop."
    },
    {
      id: 5,
      title: "Courage",
      content: "Courage is not the absence of fear, but the triumph over it."
    }
  ];
  
app.get('/',(req,res)=>{
    res.send('hi there hope youre doing well and studying hard with full enjoyment')
});

app.get('/quotes',(req,res)=>{
    res.send(quotesArray);
})

const port = process.env.PORT || 3000 ;

app.listen(port , (req,res)=>{
    console.log('web server is started and serving/listning on port 3000');
});