import React from 'react';
import {Line} from 'react-chartjs-2';
export default () => (
	<div>
	
		<Line
			data={ {
                labels: [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,],
        
                datasets: [
                  {
                   label: "Averge Salaries  by Year 2007 to 2017",
                    data: [104000, 105000, 121000, 156000,143000, 156000, 147000, 204000, 264000, 290000, 297000 ],
                    backgroundColor: "rgba(79, 195, 161, 0.5)",
                    pointBackgroundColor:"#324960",
                    pointRadius:"5",
                    pointHoverRadius:'5'
                  }
                ]
              }
            }
            options={  {
                scales: {
                    yAxes: [
                      {
                        ticks: {
                          min: 0,
                          
                        }
                      }
                    ]
                  },
                  tooltips: {
                    displayColors: false,
                    titleFontSize: 16,
                    bodyFontSize: 14,
                    xPadding: 10,
                    yPadding: 10,
                    callbacks: {
                        label: (tooltipItem, data) => {
                            return'$' + tooltipItem.value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
                        }
                    }
                }
                }
            }
        
          
			
		/>
	</div>
);
