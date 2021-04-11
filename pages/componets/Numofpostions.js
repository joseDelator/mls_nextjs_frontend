import React from 'react';
import {Doughnut} from 'react-chartjs-2';
export default ({clubs}) => (
	<div>
		
		<Doughnut
			data={ {
                labels: clubs.index,
                
                datasets: [
                  {
                    label: "Paid in Salaries",
                    data: clubs.data,
                    backgroundColor:[
                      "Blue",
                      "AntiqueWhite",
                      "Darkgreen",
                      "pink",
                      "red",
                      "grey",
                      'Aqua', 
                      'gold',
                      "yellow",
                      'pruple',   
                    ]
                }
                ]
            }}
            
		/>
	</div>
);
