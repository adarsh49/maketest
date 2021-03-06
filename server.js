var express = require('express');
const port = 4200;
const app = express();
const path = require('path');
const router = express.Router();
const baffle = require('baffle');


router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/src/js/baffle_example.js',function(req,res){
  res.sendFile(path.join(__dirname+'/src/js/baffle_example.js'));
  //__dirname : It will resolve to your project folder.
});
router.get('/src/js/baffle.min.js',function(req,res){
  res.sendFile(path.join(__dirname+'/src/js/baffle.min.js'));
  //__dirname : It will resolve to your project folder.
});
app.use('/', router);
app.listen(port,()=>console.log(`Server Running on Port ${port}`));
