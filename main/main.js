module.exports = function calculatePrice(input) {
   let price = 6;
   if(input.miles > 2 && input.miles <= 8){
     price += 0.8*(input.miles-2);
   }
   if (input.miles >8) {
     price += (4.8 + 1.2*(input.miles-8));
   }
   price += input.wait*0.25;

   return Math.round(price);
};
