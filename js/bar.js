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

var LineaChart = (function() {

  // Variables

  var $chart = $('#area');
  // Methods

  function init($chart) {

    var lineChart = new Chart($chart, {
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

        }]
      }
    });

    // Save to jQuery object

    $chart.data('chart', lineChart);

  };


  // Events

  if ($chart.length) {
    init($chart);
  }

})();