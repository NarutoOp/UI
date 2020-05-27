//
// Charts
//

'use strict';

var Charts = (function() {

	// Variable

	var $toggle = $('[data-toggle="chart"]');
	var mode = 'light';//(themeMode) ? themeMode : 'light';
	var fonts = {
		base: 'Open Sans'
	};

	// Chart.js global options
	function chartOptions() {

		// Options
		var options = {
			defaults: {
				global: {
					responsive: true,
					maintainAspectRatio: false,

					defaultFontFamily: fonts.base,
					defaultFontSize: 13,
					legend: {
						display: false
					}
				}
			}


		}

		// yAxes
		Chart.scaleService.updateScaleDefaults('linear', {
			gridLines: {
				drawBorder: false,
				drawTicks: false,
				drawOnChartArea: true,
				zeroLineWidth: 0,
			},

			ticks: {
				display:false,
				beginAtZero: true,

			},
			stacked : true
		});

		// xAxes
		Chart.scaleService.updateScaleDefaults('category', {
			gridLines: {
				drawBorder: false,
				drawOnChartArea: false,
				drawTicks: false
			},
			ticks: {
				padding: 20
			},
			maxBarThickness: 20,
			stacked : true
		});

		return options;

	}

	// Parse global options
	function parseOptions(parent, options) {
		for (var item in options) {
			if (typeof options[item] !== 'object') {
				parent[item] = options[item];
			} else {
				parseOptions(parent[item], options[item]);
			}
		}
	}


	// Events

	// Parse global options
	if (window.Chart) {
		parseOptions(Chart, chartOptions());
	}

	// Return

	return {
		fonts: fonts,
		mode: mode
	};

})();





//
// Bars chart
//

var BarsChart = (function() {

	//
	// Variables
	//

	var $chart = $('#chart-bars');

	// Init chart
	function initChart($chart) {

		// Create chart
		var ordersChart = new Chart($chart, {
			type: 'bar',
			data: {
				labels: ['Mark', 'Smith', 'Mahesh', 'Jack','Ganesh'],
				datasets: [{
					data: [5, 10, 7, 2, 9],
					backgroundColor: '#FFA8A0'
				},
				{
					data: [15, 10, 20, 20, 7],
					backgroundColor: '#F1F1F5'
				}
				]
			}
		});
		// Save to jQuery object
		$chart.data('chart', ordersChart);
	}


	// Init chart
	if ($chart.length) {
		initChart($chart);
	}

})();

//Area or line chart
var style = getComputedStyle(document.body);
var primCol = style.getPropertyValue('--primary');

var LineChart = (function() {

  // Variables

  var $chartline = $('#area');
  // Methods
  // var gradientStroke = $chartline.createLinearGradient(500, 0, 100, 0);
	// gradientStroke.addColorStop(0, '#80b6f4');
	// gradientStroke.addColorStop(1, '#f49080');

  function init($chart) {

    var lineChart = new Chart($chartline, {
      type: 'line',
      options: {
        scales: {
          yAxes: [{
            gridLines: {
              lineWidth: 1,
              zeroLineColor: '#212529'
            },
            ticks: {
            	display:true,
            	padding: 10,
              callback: function(value,index) {
	            if(index%2==0){
	                if (!(value % 50)) {
	                  return value+50;
	                }
	            }
	            else{
	            	return '';
	            }
              }
            }
          }]
        }
      },

      
      data: {
        labels: ['Sep', 'Oct', 'Nov', 'Dec','Jan','Feb','March','Apr','May'],
        datasets: [{
          label: 'Performance',
          data: [350, 450, 300, 350, 200, 450, 350, 300, 400],
          borderWidth:1.5,
          borderColor: "rgba(143, 220, 229, 0.5)",
          backgroundColor : primCol,

        }]
      }
    });

    // Save to jQuery object

    $chartline.data('chart', lineChart);

  };


  // Events

  if ($chartline.length) {
    init($chartline);
  }

})();


var canvas = document.getElementById('area'); 
  
            var ctx = canvas.getContext('2d'); 
  
            var lingrad = ctx.createLinearGradient(0, 0, 0, 150); 
  
            lingrad.addColorStop(0, 'rgba(143, 220, 229, 0.5)'); 
            lingrad.addColorStop(0.3, 'rgba(143, 220, 229, 0.5)'); 
            lingrad.addColorStop(1,'rgba(255, 255, 255, 0)'); 
  
            ctx.fillStyle = lingrad; 