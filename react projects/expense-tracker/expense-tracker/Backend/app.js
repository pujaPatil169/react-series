const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
// const methodOverride = require('methodOverride');
const ejsMate = require('ejs-mate');
const Expense = require('./model/expenses.js');
const Campground = require('./model/campground.js');
mongoose.connect('mongodb://localhost:27017/yelp-camp')
.then(()=>{
    console.log("mongo connection open ");
})
.catch((err)=>{
    console.log("mongo connection error");
    console.log(err);
})

mongoose.connect('mongodb://localhost:27017/expenseTracker')
.then(()=>{
    console.log("mongo connection open ");
})
.catch((err)=>{
    console.log("mongo connection error");
    console.log(err);
})
app.engine('ejs',ejsMate)
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'public')));

//-----------Routes---------

app.get('/api/expenses',async(req,res)=>{
    const expense = await Expense.find({});
    console.log(expense);
    res.send(expense);

});
app.get('/api/campgrounds',async(req,res)=>{
    const campgrounds =await Campground.find({});
    res.send(campgrounds);

})

app.get('/home',(req,res)=>{
    res.render('home');
})

app.get('/expenses/new',(req,res)=>{
    res.render('new');
});

app.get('/loginForm',(req,res)=>{
    res.render('login');
})

app.get('/registerForm',(req,res)=>{
    res.render('register');
})

app.post('/expenses',async(req,res)=>{
    const expense = new Expense(req.body.expense);
    await expense.save();
    res.redirect(`/expense/${expense._id}`)
})
app.get('/expense/:id',async (req,res)=>{
    const expense = await Expense.findById(req.params.id);
    res.render('show',{expense});
})

app.listen(3000,()=>{
    console.log('listening on port 3000');
})


