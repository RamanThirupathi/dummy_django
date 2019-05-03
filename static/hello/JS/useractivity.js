function getmyactivities (mydata,mylables, mymonth) {
var barcolors =[]
var brdrcolors =[]


for (var i in mydata) {
            barcolors.push(randomColor({
   luminosity: 'light',
   luminosity: 'light',
   format: 'rgb' // e.g. 'rgb(225,200,20)'
}));
            //barcolors.push(getRandomColorHex());
            brdrcolors.push("#111");
            //var color = ;
         }

/*
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
 	responsive:true,
    maintainAspectRatio: false,
    type: 'bar',
    data: {
        labels: {{ stats.0|safe }},
        datasets: [{
            label: ' {{ month }} # of Requests',
            data: mydata,
			backgroundColor :  barcolors ,
				borderColor :  brdrcolors,
				borderWidth : 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
}); */


$('.counter-count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });




var config = {
     type: 'bar',
    data: {
        labels: mylables,
        datasets: [{
            //label: ' {{ month }} # of Requests',
            data: mydata,
			backgroundColor :  barcolors ,
				borderColor :  brdrcolors,
				borderWidth : 1
        }]
    },
	options: {
				responsive: true,
				legend: {
        display: false
    },
				plugins: {
         			labels: [
					    {
					      render: 'label',
					      position: 'outside'
					    },
					    {
					      render: 'percentage'
					    }
					  ]
        		},

				title: {
					display: true,
					text:   mymonth + '  # of Requests'
				},
				animation: {
					animateScale: true,
					animateRotate: true
				}
				/*scales: {
            		yAxes: [{
                		ticks: {
                    	beginAtZero:true
                				}
           			}]
       			 }*/
	}
};


var config2 = {
     type: 'bar',
    data: {
       	labels: mylables,
        datasets: [{
            //label: ' {{ month }} # of Requests',
            data: mydata,
			backgroundColor :  barcolors ,
				borderColor :  brdrcolors,
				borderWidth : 1
        }]
    },
	options: {
				responsive: true,
				legend: {
        display: false
    },
				plugins: {
         			labels: {
					    render: 'value'
					  }
				},

				title: {
					display: true,
					text: mymonth +' # of Requests'
				},
				animation: {
					animateScale: true,
					animateRotate: true
				},
				scales: {
            		yAxes: [{
                		ticks: {
                    	beginAtZero:true ,
                    	autoSkip: true
                				}
           			}] ,
           			xAxes: [{
						ticks: {
						autoSkip: false
						}
						}]
       			 }
	}
};

var myChart2;
change('pie');

$("#line").click(function() {
  change('pie');
});

$("#bar").click(function() {
  change2('bar');
});

function change(newType) {
  var ctx2 = document.getElementById("myChart2").getContext("2d");

  // Remove the old chart and all its event handles
  if (myChart2) {
    myChart2.destroy();
  }

  // Chart.js modifies the object you pass in. Pass a copy of the object so we can use the original object later
  var temp = jQuery.extend(true, {}, config);
  temp.type = newType;
  myChart2 = new Chart(ctx2, temp);
};

function change2(newType) {
  var ctx2 = document.getElementById("myChart2").getContext("2d");

  // Remove the old chart and all its event handles
  if (myChart2) {
    myChart2.destroy();
  }

  // Chart.js modifies the object you pass in. Pass a copy of the object so we can use the original object later
  var temp = jQuery.extend(true, {}, config2);
  temp.type = newType;
  myChart2 = new Chart(ctx2, temp);
};



  function getRandomColorHex() {
    var hex = "0123456789ABCDEF",
        color = "#";
    for (var i = 1; i <= 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
      console.log(Math.floor(Math.random() * 16))
    }
    return color;
  }



  function getRandomColorlist() {
var myArray = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2' ,'rgba(75, 192, 192, 0.2)',
 'rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)'];
var color = myArray[Math.floor(Math.random() * myArray.length)];
    return color;
  }




}