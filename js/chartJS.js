var ctx = document.getElementById("myChart");
var data1 = {
        labels : ["C", "JavaScript", "MySQL", "Python", "PHP"],
        datasets : [
            {
                label : "TeamA score",
                data : [15, 20, 15, 30, 20],
                backgroundColor : [
                    "#ff7f50",
                    "#747d8c",
                    "#ff4757",
                    "#70a1ff",
                    "#fbc531"
                ],
                borderColor : [
                    "#fff",
                    "#fff",
                    "#fff",
                    "#fff",
                    "#fff"
                ],
                borderWidth : [2, 2, 2, 2, 2]
            }
        ]
    };
var options = {
        title : {
            display : true,
            position : "top",
            text : "Skills",
            fontSize : 18,
            fontColor : "#111"
        },
        legend : {
            display : true,
            position : "bottom"
        },
        responsive: true
    };

function Pie(){
    var myPieChart = new Chart(ctx,{
    type: 'pie',
    data: data1,
    options: options
});
}


Pie();
var viewed = false;

window.addEventListener("scroll", function() {
  var elementTarget = document.getElementById("projects");
  if (window.scrollY >= elementTarget.offsetTop && window.scrollY < (elementTarget.offsetTop+elementTarget.offsetHeight)){
        if(viewed==false){ 
            Pie(); 
            viewed = true;}
  }
  else{
    viewed = false;
  }
});