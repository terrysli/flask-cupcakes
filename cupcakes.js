"use strict"

$flavorInput = $("#flavor");
$sizeInput = $("#size");
$ratingInput = $("#rating");
$imgUrlInput = $("#img_URL");
$cupcakeList = $("#cupcake-list")
async function getAndShowCupcakes() {
    const response = await axios.get('/api/cupcakes');

    const cupcakes = response.data["cupcakes"]

    for (let cupcake of cupcakes) {
        let cupcakeInfo = $('<li></li>')
        cupcakeInfo.append($('<img '))
    }
}
