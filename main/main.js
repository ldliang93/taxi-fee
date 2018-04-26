module.exports = function calculatePrice(miles) {
   let price = 6;
   if(miles > 2){
     price += 0.8;
   }
   return price;
};
