var allthedata = [];
var express = require('express')
var app = express()

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data
app.use(urlencodedParser);

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

app.set('view engine', 'ejs');

app.use(express.static("public"));

//iThinkThat;comment; username
app.post('/upload', upload.single('pic'), function (req, res) {
	console.log(req.body.file);
	res.send("uploaded: " + req.body.file);
	// req.file is the uploaded file information
  	// req.body will hold the other text fields
});

app.post('/form', function (req, res) {

  let data = new Object();
  data.username = req.body.userName;
  data.origin = req.body.origin;
  data.destination = req.body.destination;
  data.pic = req.body.pic;
  data.time = req.body.time;
  data.time2 = req.body.time2;
  data.length = req.body.length;
  data.length2 = req.body.length2;
  data.comment = req.body.comment;
  data.picture = req.body.file;
  data.recommendation = req.body.repeatValue;
  data.howtravel = req.body.howDidYouTravel;
  data.purposetravel = req.body.purposeOfTrip;
  data.partytravel = req.body.recommendationParty;
  data.culturetravel = req.body.recommendationCulture;

  allthedata.push(data);

  let passedindata = new Object();
  passedindata.allthedata = allthedata;

  res.render("output.ejs", passedindata);
})


app.listen(80, function () {
  console.log('Example app listening on port 80!')
})
