var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    displayItems();
});

function displayItems() {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;
        for (let i = 0; i < res.length; i++) {
            console.log("Item number: " + res[i].item_id);
            console.log("Product name: " + res[i].product_name);
            console.log("Price: " + res[i].price);
        }
        buyProducts();
    });
};

function buyProducts() {
    inquirer.prompt([{
        type: "list",
        name: "buyproduct",
        message: "Would you like to purchase an item?",
        choices: ["Yes", "No"]
    }
    ]).then(function (value) {
        if (value.buyproduct === "Yes") {
            selectProducts();
        }
        else if (value.buyproduct === "No") {
            console.log("Thank you for shopping at Bamazon.")
            connection.end();
        }
    });
};



function selectProducts() {
    inquirer.prompt([
        {
            name: "itemNumber",
            type: "input",
            message: "Please enter product ID number.",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        },
        {
            name: "quantity",
            type: "input",
            message: "Please enter quantity",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }
    ]).then(function (n) {
        console.log("Adding item to checkout.");
        connection.query("SELECT * FROM products WHERE ?", { item_id: n.itemNumber }, function (err, res){
            if (err) throw err;

            if (n.quantity <= res[0].stock_quantity){
                console.log("Purchasing itmes...\n");

                connection.query("UPDATE products SET stock_quantity = " + (res[0].stock_quantity - n.quantity) + "WHERE item_id = " + n.itemNumber, function (err){
                    if (err) throw err;
                    console.log("your order has been placed. Your total charged in your cart is $" + res[0].price * n.quantity + "\nAdios");
                    connection.end();
                })
            } else {
                console.log("\nNot enough product in stock.");
                buyProducts();
            }
        })
        //     "UPDATE products SET ? WHERE?",
        //     [
        //         {
        //             stock_quantity: n.quantity
        //         },
        //         {
        //             item_id: n.itemNumber
        //         }
        //     ],
        //     function (error) {
        //         if (error) throw err;
        //         console.log("Product has been added to your checkout.");
        //         console.log("Your total cost is $");
        //         buyProducts();
        //     }
        // )
    })
};

