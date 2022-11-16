const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();

// function jsonToCsv(items) {
//     const header = Object.keys(items[0]);

//     const headerString = header.join(',');

//     // handle null or undefined values here
//     const replacer = (key, value) => value ?? '';

//     const rowItems = items.map((row) =>
//     header
//         .map((fieldName) => JSON.stringify(row[fieldName], replacer))
//         .join(',')
//     );

//     // join header and body, and break into separate lines
//     const csv = [headerString, ...rowItems].join('\r\n');

//     return csv;
// }


// getProducts(keyword, limit, callback) takes in a keyword and limit and returns a product array 
// sneaks.getProducts("Nike", 1000, function(err, products){
//     console.log(products);
//     var arrayLength = products.length;
//     var csv = 'lowestResellPrice' +", " + 'id' + ", " + 'shoeName' + ", " + 'brand' + ", " + 'silhoutte' + ", " + 'styleID' + ", " 
//     + 'retailPrice'+ ", " + 'releaseDate' + ", " + "description" + "\r\n";
//     for (var i = 0; i < arrayLength; i++) {
//         if(products[i]['description'] == ''){
//             continue;
//         }
//         //remove all line breaks, <br>'s, and comma from the 'description' string 
//         var description = products[i]['description'].replace(/(\r\n|\n|\r)/gm, "")
//         description = description.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,"");
//         description = description.replace(/,/g, "");
//         csv += products[i]['lowestResellPrice']['stockX']+", " + products[i]['_id'] +  ", "  + products[i]['shoeName'] + ", " +
//         products[i]['brand'] + ", " + products[i]['silhoutte'] + ", " + products[i]['styleID'] + ", " + products[i]['retailPrice'] + ", " +
//         products[i]['releaseDate'] + ", " + description + "\r\n";

//     }
//     const fs = require("fs");
//     fs.writeFileSync("nike.csv", csv);
//     console.log(csv);
// })
// ["Carbon Plated Shoes", "Super Shoes", "New Balance", "Puma", "Adidas Running", "Asics","Nike Running", "Pegasus", "Ultra Boost", "Brooks", "HOKA", "Atra", "Mizuno","On" , "Karhu Ikoni" , "Saucony", "Trail Running"]
const brands = ["on running", "Brooks", "Hoka"]
// for (var i = 0; i < brands.length; i++){
//     console.log(brands[i]);
// }
for (var i = 0; i < brands.length; i++){
    let shoebrand = brands[i];
    sneaks.getProducts(shoebrand, 1000, function(err, products){
        console.log(products);
        var arrayLength = products.length;
        var csv = 'shoeName' + ", " +  'brand' + ", " + 'styleID' + ", " + 'retailPrice'+ ", " + 'lowestResellPrice_StockX' + ", " + 'lowestResellPrice_Goat'+ ", " + 'lowestResellPrice_flightClub'  +", " + 'id' + ", " + 'silhoutte' + ", " + 
        "Colorway" +  ", " + 'releaseDate' + ", " + "description" + "\r\n";
        for (var i = 0; i < arrayLength; i++) {
            //filter out the shoes that do not have descriptions 
            // if(products[i]['description'] == '' || products[i]['description'] == null){
            //     continue;
            // }
            //remove all line breaks, <br>'s, and comma from the 'description' string 
            var description = products[i]['description'].replace(/(\r\n|\n|\r)/gm, "")
            description = description.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,"");
            description = description.replace(/,/g, "");
            csv += products[i]['shoeName'] + ", " + products[i]['brand'] + ", " + products[i]['styleID'] + ", " + products[i]['retailPrice'] +  ", " + products[i]['lowestResellPrice']['stockX']+", "+ products[i]['lowestResellPrice']['goat']+", " + products[i]['lowestResellPrice']['flightClub']+", " + 
            products[i]['_id'] +  ", "  + products[i]['silhoutte'] + ", " + products[i]['colorway']  + ", " + products[i]['releaseDate'] + ", " + description + "\r\n";
        }
        const fs = require("fs");
        // console.log(brand);
        // console.log(brands[i]);
        // let brandnamecsv = brand + ".csv"
        fs.writeFileSync(shoebrand + ".csv", csv);
        // console.log(brandnamecsv);
        console.log(csv);
    })
}








// sneaks.getProducts("Adidas", 1500, function(err, products){
//     console.log(products);
//     var arrayLength = products.length;
//     var csv = 'lowestResellPrice' +", " + 'id' + ", " + 'shoeName' + ", " + 'brand' + ", " + 'silhoutte' + ", " + 'styleID' + ", " 
//     + 'retailPrice'+ ", " + 'releaseDate' + ", " + "description" + "\r\n";
//     for (var i = 0; i < arrayLength; i++) {
//         if(products[i]['description'] == ''){
//             continue;
//         }
//         //remove all line breaks, <br>'s, and comma from the 'description' string 
//         var description = products[i]['description'].replace(/(\r\n|\n|\r)/gm, "")
//         description = description.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,"");
//         description = description.replace(/,/g, "");
//         csv += products[i]['lowestResellPrice']['stockX']+", " + products[i]['_id'] +  ", "  + products[i]['shoeName'] + ", " +
//         products[i]['brand'] + ", " + products[i]['silhoutte'] + ", " + products[i]['styleID'] + ", " + products[i]['retailPrice'] + ", " +
//         products[i]['releaseDate'] + ", " + description + "\r\n";

//     }
//     const fs = require("fs");
//     fs.writeFileSync("adidas.csv", csv);
//     console.log(csv);
// })

// sneaks.getProducts("Under Armour", 1500, function(err, products){
//     console.log(products);
//     var arrayLength = products.length;
//     var csv = 'lowestResellPrice' +", " + 'id' + ", " + 'shoeName' + ", " + 'brand' + ", " + 'silhoutte' + ", " + 'styleID' + ", " 
//     + 'retailPrice'+ ", " + 'releaseDate' + ", " + "description" + "\r\n";
//     for (var i = 0; i < arrayLength; i++) {
//         if(products[i]['description'] == ''){
//             continue;
//         }
//         //remove all line breaks, <br>'s, and comma from the 'description' string 
//         var description = products[i]['description'].replace(/(\r\n|\n|\r)/gm, "")
//         description = description.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,"");
//         description = description.replace(/,/g, "");
//         csv += products[i]['lowestResellPrice']['stockX']+", " + products[i]['_id'] +  ", "  + products[i]['shoeName'] + ", " +
//         products[i]['brand'] + ", " + products[i]['silhoutte'] + ", " + products[i]['styleID'] + ", " + products[i]['retailPrice'] + ", " +
//         products[i]['releaseDate'] + ", " + description + "\r\n";

//     }
//     const fs = require("fs");
//     fs.writeFileSync("UA.csv", csv);
//     console.log(csv);
// })

// sneaks.getProducts("Running", 1000, function(err, products){
//     console.log(products);
//     var arrayLength = products.length;
//     var csv = 'lowestResellPrice' +", " + 'id' + ", " + 'shoeName' + ", " + 'brand' + ", " + 'silhoutte' + ", " + 'styleID' + ", " 
//     + 'retailPrice'+ ", " + 'releaseDate' + ", " + "description" + "\r\n";
//     for (var i = 0; i < arrayLength; i++) {
//         if(products[i]['description'] == ''){
//             continue;
//         }
//         //remove all line breaks, <br>'s, and comma from the 'description' string 
//         var description = products[i]['description'].replace(/(\r\n|\n|\r)/gm, "")
//         description = description.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,"");
//         description = description.replace(/,/g, "");
//         csv += products[i]['lowestResellPrice']['stockX']+", " + products[i]['_id'] +  ", "  + products[i]['shoeName'] + ", " +
//         products[i]['brand'] + ", " + products[i]['silhoutte'] + ", " + products[i]['styleID'] + ", " + products[i]['retailPrice'] + ", " +
//         products[i]['releaseDate'] + ", " + description + "\r\n";

//     }
//     const fs = require("fs");
//     fs.writeFileSync("run.csv", csv);
//     console.log(csv);
// })


// sneaks.getProducts("Nike", 1000, function(err, products){
//     const csv = jsonToCsv(products);
//     // const fs = require("fs");
//     // // fs.writeFileSync("test.csv", csv);
//     console.log(csv)

//     console.log(products)
// })

// sneaks.getProducts("Adidas", 1000, function(err, products){
//     console.log(products)
// })

// sneaks.getProducts("Under Armour", 1000, function(err, products){
//     console.log(products)
// })

// //Product object includes styleID where you input it in the getProductPrices function
// //getProductPrices(styleID, callback) takes in a style ID and returns sneaker info including a price map and more images of the product
// sneaks.getProductPrices("FY2903", function(err, product){
//     console.log(product)
// })
//getMostPopular(limit, callback) takes in a limit and returns an array of the current popular products curated by StockX
// sneaks.getMostPopular(3000, function(err, products){
//     console.log(products)
// })