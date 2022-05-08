/******** 
 * Modules
*********/
const mongCMD = require(__dirname + "/modules/mongCommands.ejs");

/******** 
 * Mongoose
*********/
const { Db } = require('mongodb');
const mongoose = require('mongoose');
const keys = require('./api_keys');
const userName = keys.mongooseUserName;
const password = keys.mongoosePassword;
const DB = keys.mongooseDB;
const uri = "mongodb+srv://" + userName + ":" + password + "@cluster0.rsfw2.mongodb.net/" + DB + "?retryWrites=true&w=majority";
const connection = mongoose.connect(uri, { useNewURLParser: true });

/******** 
 * Express
*********/
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
const port = 3000;

/******** 
 * Misc. Modules
*********/
app.set('view engine', 'ejs');

/******** 
 * Schema
*********/
const wikiSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Error: No task name']
    },
    content: {
        type: String,
        required: [true, 'Error: No task name']
    }
});
const Article = new mongoose.model('articles', wikiSchema);

/******** 
 * get
*********/
app.get('/', (req, res) =>
{
    Article.find(function (error, articles)
    {
        if (error)
            console.log(error);
        else if (articles.length < 1)
        {
            //if colletion is empty build it
            mongCMD.buildCollection(Article);
        }
        res.render('index', { array: articles });
    })
});


/******** 
 * routes
*********/
app.route('/articles')
    //REST: should return all articles in DB
    .get((req, res) =>
    {
        Article.find(function (error, articles)
        {
            if (error)
                console.log(error);

            else if (articles.length < 1)
            {
                //if colletion is empty build it
                mongCMD.buildCollection(Article);
            }
            res.send(articles);
        })
    })
    //REST: should add an article
    .post(async (req, res) =>
    {
        mongCMD.postArticle(Article, req.body.title, req.body.content);
    })
    //REST: should delete all articles
    .delete(async (req, res) =>
    {
        mongCMD.deleteAllArticles(Article);
    });

app.route('/articles:article')
    .get( (req, res) =>
    {
        Article.find({title: article},function (error, article)
        {
            if (error)
                console.log(error);
            res.send(article);
        })
    })
    //REST: should add an article
    .post(async (req, res) =>
    {
        mongCMD.postArticle(Article, article, req.body.content);
    })
    .delete(async (req, res) =>
    {
        mongCMD.deleteArticle(Article, article);
    });

app.listen(port, () =>
{
    console.log("Server running on port: " + port);
});