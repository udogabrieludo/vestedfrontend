import React from 'react'
import { Doughnut, Bar, Line } from 'react-chartjs-2';

const LineChart = () => {

    const options ={
        legend: {
            labels: {
               fontColor: '#000',
               fontSize: 16
            }
         },
         scales: {
            yAxes: [{
                ticks: {
                    fontColor: "#000",
                    fontSize: 14,
                    
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "#000",
                    fontSize: 14,
                    stepSize: 1,
                    
                }
            }]
        }
    }

    const data = {
      labels :[
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', "Sept", "Oct", "Nov", "Dec"
      ],
      datasets:[
          {
              label:"Sales for 2019",
              data:[ 30000, 5000, 60000, 60000, 110000, 5000, 3000, 50000, 60000, 80000, 7000, 10000],
              borderColor: ['rgba(88, 226, 194, 0.8)'],
              backgroundColor: ['rgba(88, 226, 194, 0.8)'],
              pointBackgroundColor: ['255, 255, 255, 1)'],
              pointBorderColor: ['rgba(255, 255, 255, 1)'],
          },
          {
            label:"Sales for 2020",
            data:[ 30000, 5000, 10000, 30000, 80000, 3000, 1000, 50000, 6000, 60000,3000, 1000],
            borderColor: ['rgba(0,255,255, 0.2)'],
              backgroundColor: ['rgba(0,255,255, 0.6)'],
              pointBackgroundColor: ['rgba(0,255,255,  0.2)'],
              pointBorderColor: ['rgba(0,255,255,  0.2)'],
        }
      ],
      

    }

    return (
        <div>
            <Line  data={data} options={options}/>        
        </div>
    )
}

export default LineChart
