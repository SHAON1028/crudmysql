//npm install --save mysql express
const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const mysql = require('mysql')
const app = express()
app.listen('3003',()=>{
    console.log('server is connected on port 3000');
})
//create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'crud'
});
//connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});
//create database
app.get('/createdb',(req,res)=>{
    let sql = "CREATE DATABASE crud";
    db.query(sql,(err,result)=>{
        if(err)
        {throw err
        }
        console.log(result);
        res.send('Database Created...')

    })
})
//create table
app.get('/createtable',(req,res)=>{
    let sql  = "CREATE TABLE crud1 (id int AUTO_INCREMENT,name VARCHAR(255), address VARCHAR(255),email VARCHAR(255),PRIMARY KEY(id))";
    db.query(sql,(err,result)=>{
        if(err){
            throw err
        }
        console.log(result);
        res.send('Table Created...')
    })
})
//insert post1
app.get('/addpost1',(req,res)=>{
    let post = {name:'Shaon',address:'Dhaka',email:'shaon@gmail.com'}
    let sql = 'INSERT INTO crud1 SET ?';
    db.query(sql,post,(err,result)=>{
        if(err){
            throw err
        }
        console.log(result);
        res.send('Post1 added...')
    })
})
//insert post2
app.get('/addpost2',(req,res)=>{
    let post = {name:'khairul',address:'Tangail',email:'khairul@gmail.com'}
    let sql = 'INSERT INTO crud1 SET ?';
    db.query(sql,post,(err,result)=>{
        if(err){
            throw err
        }
        console.log(result);
        res.send('Post2 added...')
    })
})
//selectpost
app.get('/selectpost',(req,res)=>{
    let sql = 'SELECT * FROM crud1';
    db.query(sql,(err,results)=>{
        if(err){
            throw err
        }
        console.log(results)
        res.send('Post selected');
    })
})
//select single post
app.get('/selecsingletpost/:id',(req,res)=>{
    let sql = `SELECT * FROM crud1 WHERE id = ${req.params.id}`;
    db.query(sql,(err,results)=>{
        if(err){
            throw err
        }
        console.log(results)
        res.send('Single Post selected');
    })
})
//updatepost
app.get('/updatepost/:id',(req,res)=>{
    let change_name = 'Shaon123'
    let sql = `UPDATE crud1 SET name = '${change_name}' WHERE id = ${req.params.id}` 
    db.query(sql,(err,result)=>{
        if(err){
            throw err
        }
        console.log(result);
        res.send('Post Updated...')
    })
})
//deletepost
app.get('/deletepost/:id', (req, res) => {
    let sql = `DELETE FROM crud1 WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post deleted...');
    });
});
