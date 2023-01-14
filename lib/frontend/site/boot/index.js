var express = require('express')
var app = module.exports = express()

app.use(require('lib/frontend/site/sign-in'))
app.use(require('lib/frontend/site/sign-up'))
app.use(require('lib/frontend/site/forgot'))
app.use(require('lib/frontend/site/reset'))
app.use(require('lib/frontend/site/help'))
app.use(require('lib/frontend/site/home-multiforum'))
app.use(require('lib/frontend/site/home-forum'))
app.use(require('lib/frontend/site/topic-layout'))
app.use(require('lib/frontend/site/notifications'))
app.use(require('lib/frontend/site/error-pages/not-allowed'))
app.use(require('lib/frontend/site/error-pages/not-found'))