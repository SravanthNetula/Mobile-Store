(function () {


var app = angular.module("MobileStore",[]);
var iphone ={
    name: "iphone7 Plus",
    color:"apple Black",
    memory:"3GB RAM, 128 Internal Memory",
    Price:75699,
    image:"apple.png",
    isSoldOut:true,
    activeTab : "Specifications"

};
    var nokia  ={
        name: "nokia 3310",
        color:"gold",
        memory:"128MB",
        Price:160000,
        image:"nokia.png",
        isSoldOut:true,
        activeTab : "Specifications"


};

app.controller("StoreController",function () {
    this.mobiles=[iphone,nokia];
    this.setActiveTab = function (mobile,tab) {
    mobile.activeTab= tab;
    }
});
})();