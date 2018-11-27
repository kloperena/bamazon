var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "bamazon"
  });

  function promptUser(){
    inquirer.prompt([
		{
            type: "input",
            name: "Id",
            message: 'Please enter the ID of the product which you would like to purchase!',
        },
		{
			type: 'input',
			name: 'quantity',
			message: 'How many do you need?',
        }
  //from the inputs of the prompts we need to create another function to do something w/ the info 
  //(1)get results from input 
  //(2)pull up the info from mysql 
  //(3)after asking for how many,remeber to take the desired quantity away from the quantity in stock!!!!
  //Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
// However, if your store does have enough of the product, you should fulfill the customer's order.

// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.
  ]).then(function(input){
      var product = input.Id;
      var units = input.quantity;

      connection.query("SELECT * items FROM Products", function(err, res) {
        if (err) throw err;
        console.log(res);

        var productRes = res[];
        if (quantity <= productRes.stock_quantity) {
            console.log('The product you requested is in stock!');
        
            var newStockQuantity = "UPDATE products SET stock_quantity

  }