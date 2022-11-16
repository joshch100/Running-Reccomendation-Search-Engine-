const brands = ["Carbon Plated Shoes", "Super Shoes", "New Balance", "Puma", "Adidas Running", "Asics","Nike Running", "Pegasus", "Ultra Boost", "Brooks", "HOKA", "Atra", "Mizuno","On" , "Karhu Ikoni" , "Saucony", "Trail Running"]
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
            if(products[i]['description'] == '' || products[i]['description'] == null){
                continue;
            }
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