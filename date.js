
module.exports.getDate =getDate;

function getDate (){

 const today=new Date();

 const options = {
  weekday:"long",
  day: "numeric",
  month: "long"

};

let day = today.toLocaleDateString("en-US", options);
return day;
}
//   the second function is simplifide regarding the code but functionally of two part is the same.
exports.getDay = function (){

 const today=new Date();

 const options = {
  weekday:"long",
};

let day = today.toLocaleDateString("en-US", options);
return day;
}
