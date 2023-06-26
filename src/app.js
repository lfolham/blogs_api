const express = require('express');
const loginRouter = require('./routes/loginRouter');
const userRouter = require('./routes/userRouter');
const cotegoriesRouter = require('./routes/categoriesRouter');
const postRouter = require('./routes/postRouter');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', cotegoriesRouter);
app.use('/post', postRouter);

// ...

// É importante exportar a constante `app`,
// teste
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
