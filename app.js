'use strict'

const express = require('express')
const app = express()

const host = '0.0.0.0'
const port = process.env.SERVER_PORT
const serverName = process.env.SERVER_NAME

app.get('/', (req, res) => {
  res.send({
    status: 200,
    path: req.path,
    query: req.query,
    server_name: serverName,
    pid: process.pid
  })
  console.log({
    status: 200,
    path: req.path,
    server_name: serverName,
    pid: process.pid
  })
})
app.get('/lb1', (req, res) => {
  res.send({
    status: 200,
    path: req.path,
    query: req.query,
    server_name: serverName,
    pid: process.pid
  })
  console.log({
    status: 200,
    path: req.path,
    server_name: serverName,
    pid: process.pid
  })
})
app.get('/lb1/p1', (req, res) => {
  res.send({
    status: 200,
    path: req.path,
    query: req.query,
    server_name: serverName,
    pid: process.pid
  })
  console.log({
    status: 200,
    path: req.path,
    server_name: serverName,
    pid: process.pid
  })
})
app.get('/lb1/p2', (req, res) => {
  res.send({
    status: 200,
    path: req.path,
    query: req.query,
    server_name: serverName,
    pid: process.pid
  })
  console.log({
    status: 200,
    path: req.path,
    server_name: serverName,
    pid: process.pid
  })
})
app.get('/lb2', (req, res) => {
  res.send({
    status: 200,
    path: req.path,
    query: req.query,
    server_name: serverName,
    pid: process.pid
  })
  console.log({
    status: 200,
    path: req.path,
    server_name: serverName,
    pid: process.pid
  })
})
app.get('/lb2/p1', (req, res) => {
  res.send({
    status: 200,
    path: req.path,
    query: req.query,
    server_name: serverName,
    pid: process.pid
  })
  console.log({
    status: 200,
    path: req.path,
    server_name: serverName,
    pid: process.pid
  })
})
app.get('/lb2/p2', (req, res) => {
  res.send({
    status: 200,
    path: req.path,
    query: req.query,
    server_name: serverName,
    pid: process.pid
  })
  console.log({
    status: 200,
    path: req.path,
    server_name: serverName,
    pid: process.pid
  })
})
app.get('/lb3', (req, res) => {
  res.send({
    status: 200,
    path: req.path,
    query: req.query,
    server_name: serverName,
    pid: process.pid
  })
  console.log({
    status: 200,
    path: req.path,
    server_name: serverName,
    pid: process.pid
  })
})
app.get('/lb3/p1', (req, res) => {
  res.send({
    status: 200,
    path: req.path,
    query: req.query,
    server_name: serverName,
    pid: process.pid
  })
  console.log({
    status: 200,
    path: req.path,
    server_name: serverName,
    pid: process.pid
  })
})
app.get('/lb3/p2', (req, res) => {
  res.send({
    status: 200,
    path: req.path,
    query: req.query,
    server_name: serverName,
    pid: process.pid
  })
  console.log({
    status: 200,
    path: req.path,
    server_name: serverName,
    pid: process.pid
  })
})
app.get('*', (req, res) => {
  res.send({
    status: 404,
    path: req.path,
    query: req.query,
    server_name: serverName,
    pid: process.pid
  })
  console.log({
    status: 404,
    path: req.path,
    server_name: serverName,
    pid: process.pid
  })
})

app.listen(port, host, () => {
  console.log('App Ready For War...', `http://${host}:${port}`)
})