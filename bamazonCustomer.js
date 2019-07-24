var mysql = require("mysql");
var inquirer=require("inquirer")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "Sara",
    password: "Harley12",
    database: "bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    start();
});

function start() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
       // console.log(res)
        console.table(res)
        menu()
    })
}

function menu() {
    inquirer
        .prompt([
            {
                name: "id",
                type: "input",
                message: " What is the Product ID?",
                validate: function(value){
                    if(isNaN(value)){
                        return false
                    }else{
                        return true
                    }
                }
            },
            {
                name: "quantity",
                type: "input",
                message: " How many would you like to purchase?",
                validate: function(value){
                    if (isNaN(value)){
                        return false
                        
                    }else{
                        return true
                    }
                }
            },
        ]).then(function (answer) {
            // console.log(answer)

            connection.query("select * from products  where item_id = ? ", [answer.id], function(err, result){

                var tableQuantity = result[0].stock_quantity
                var userinputQuantity = answer.quantity
                 
                var finalQuantity =  tableQuantity - userinputQuantity;
                    

                if (finalQuantity>=0){
                    connection.query("update products set stock_quantity = ? where item_id = ? ", [finalQuantity,answer.id] , function(err, result){
                        if (err) throw err
                        
                        start()
                        
                    })
                }
                else{
                    console.log ("sorry insufficiant quantity selection, please try again")
                    start()
                }
                 
            })

      


          });
        }

