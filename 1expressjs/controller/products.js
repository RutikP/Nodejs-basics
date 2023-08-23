exports.getAddproducts = (req,res,next) => {
    // console.log('In the add-product middleware');
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    res.render('add-product', {pageTitle:'Add Product', path:'/admin/add-product'});
    // res.send('<html><body><h1>Hello in the add-product Middleware!</h1><br><form action="/admin/add-product" method="post"><label for="text"><input type="text" name="title"><button submit="button">submit</button></label></form></body></html');

};

const products = [];

exports.postAddproducts = (req,res,next)=>{
    // console.log('Entered into product');
    products.push({title:req.body.title});
    //console.log(req.body.title); //gives result as undefined if bodyParser is not installed and imported
    res.redirect('/');
    
};


exports.showAllProducts = (req,res,next) => {
    // console.log('In the middleware');
    // console.log('In shop.js ',adminData);
    // res.sendFile(path.join(__dirname,'../','views','shop.html'));
    // const products = adminData.myproducts;
    res.render('shop',{prods: products, pageTitle: 'Shopping Page', path:'/'});
    // next();
}