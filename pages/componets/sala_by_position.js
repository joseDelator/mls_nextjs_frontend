import React from 'react';
import {Bar} from 'react-chartjs-2';




export default ({clubs}) => ({
  
  render() {
    return (
      <div className = "Ba2">
       
        <Bar
          data={{
            labels: clubs.index,
            datasets: [
              {
               label: "Averge Salaries",
                data: clubs.data,
                backgroundColor: "#4FC3A1",
                hoverBackgroundColor:"#324960"
              }
            ]
          }
        }
        options= {{
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
  }
});