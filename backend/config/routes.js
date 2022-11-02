

module.exports = (app)=>{

app.get('/User/login', controllers.User.login.get)
app.post('/User/login', controllers.User.login.post)
app.get('/User/register',controllers.User.register.get) // get the register page
app.post('/User/register',body("username").trim(),body('password').trim().isLength({min:5}),body('repeatPassword').trim().isLength({min:5}), body("email").isEmail().normalizeEmail(), controllers.User.register.post) // register users
app.get('/User/logout', controllers.User.logout.get) // logout user
//Routes for Creating a new post and creating a post within a thread
app.get('/User/create/Post')// this gets the create post form
app.post('/User/create/Post')// this adds a new post to the page
app.get('/User/create/Post/:id')// this will create new inputs within a particular thread so that we can add to that particular thread
app.post('/User/create/Post/:id')// this will add a post within a thread

app.get('/User/create/Product')// this gets the create post form
app.post('/User/create/Product')// this adds a new post to the page
app.get('/User/create/Product/:id')// this will create new inputs within a particular thread so that we can add to that particular thread
app.post('/User/create/Product/:id')// this will add a post within a thread

///// Edit or delete particular post
app.get('/User/edit/Post/:id', controllers.Edit.get) // to get edit posts page
app.post('/User/edit/Post/:id', controllers.Edit.post) // to edit post page
app.get('/User/delete/Post/:id', controllers.Delete.get) // to get delete post page
app.post('/User/delete/Post/:id', controllers.Delete.post) // to delete post

app.get('/User/Posts', controllers.SeeAllPosts.posts.get) // get all posts

app.get('/About' )//About Page
app.get('/')// Home page
app.get('*') //404 page




}