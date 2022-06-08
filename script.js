
var submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  var startDate = new Date(document.getElementById("SDate").value);
  var endDate = new Date(document.getElementById("EDate").value);
  
  var timeGap = endDate.getTime() - startDate.getTime();
  var dayGap = timeGap/(1000*3600*24);
  console.log(dayGap);

  document.write("D-day까지 "+dayGap+"일")
});

