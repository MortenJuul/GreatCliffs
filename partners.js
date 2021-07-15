let photos = [];
let fileNames = ["bustour", "cabinrental", "campingadv", "collegetours", "rentalbike", "tourgroup"];
let imageList = [];
let image;
let openList = "<li class='partner'>";
let  closeList = "</li>";

for (let i = 0; i < 6; i++) {
    photos.push(`<img src='Images/partners/partner-${fileNames[i]}.png'>`);
    image = openList + photos[i] + closeList;
    imageList.push(image);
}
document.getElementById("partners").innerHTML = imageList.join("");