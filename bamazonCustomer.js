var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port:3306,
    user: "Sara",
    password: "Harley12",
    database: "bamazon_DB"
});

connection.connect(function(err){
    if(err) throw err;
    start();
});

function start(){
connection.query("SELECT * FROM products", function(err, res){
    if(err) throw err;
    console.log(res)
})
}
// function start(){
//     inquirer
//     .prompt({
//         item_id: "search",
//         type: "list",
//         message:""
        



//     })

// }