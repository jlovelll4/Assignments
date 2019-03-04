var shopper = {
                name: "who",
                savingsCardNum: 200,
                isPremierMember: true,
                shopperID: function() {
                    return this.name + "" + this.isPremierMember;
                }
};

console.log(shopper.shopperID());