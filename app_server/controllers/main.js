module.exports.index=function(req,res){
    res.render('index', { title: 'INDEX' });
   };
   module.exports.signin=function(req,res){
    res.render('signin', { title: 'SIGN IN' });
   };
   module.exports.review=function(req,res){
    res.render('review', { title: 'REVIEW' });
   };