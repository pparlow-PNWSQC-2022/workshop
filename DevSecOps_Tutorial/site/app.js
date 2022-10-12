var express               = require("express"),
    mongoose              = require("mongoose"),
    app                   = express(),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    User                  = require("./models/user");



mongoose.connect("mongodb://localhost/auth_demo_app", {useNewUrlParser: 
true});

app.use(require("express-session")({
  secret: "Secret Passage",
  resave: false,
  saveUninitialized: false
}));

app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: true}));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// app.use(require("express-session")({
//   secret: "Secret Passage",
//   resave: false,
//   saveUninitialized: false
// }));
//=======================================
//Routes
app.get("/", function(req,res){
  res.render("home")
});

app.get("/secret",isLoggedIn ,function(req,res){
    res.render("secret")
});

//Auth Routes

//Show Sign Up form
app.get("/register", function(req,res){
  res.render("register");
});

//Post request for sign up
app.post("/register", function(req,res){
  User.register(new User({username: req.body.username}), 
req.body.password, function(err, user){
    if(err){
      console.log(err);
      return res.render('register');
    }
    passport.authenticate("local")(req, res, function(){
      res.render("secret");
    });
  });
});

//Login Routes
app.get('/login', function(req,res){
  res.render("login");
})

app.post("/login", passport.authenticate("local",
  {
  successRedirect: "/secret",
  failureRedirect: "/login"
  })
  ,function(req, res){
});

app.get("/logout", function(req,res){
  req.logout();
  res.redirect("/");
});


//Middleware
function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login");
}

app.listen(3000, function(){
  console.log("Server Started");
});

