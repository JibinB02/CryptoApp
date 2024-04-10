import React from 'react'
import {Line} from 'react-chartjs-2'
import {Col,Row,Typography} from 'antd';
import Chart from 'chart.js/auto';

const {Title} = Typography

const LineChart = ({coinHistory,currentPrice,coinName}) => {
    const coinPrice = [];
    const coinTimeStamp = [];

    for(let i=coinHistory?.data?.history?.length-1;i>=0;i--) {

        coinPrice.push(coinHistory.data.history[i].price)
        const timestamp = coinHistory.data.history[i].timestamp
        const dateInMilliseconds = timestamp * 1000;
        const date = new Date(dateInMilliseconds)
        const formattedDate = date.toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric'
          });
        coinTimeStamp.push(formattedDate);

    }


    const data = {
        labels: coinTimeStamp,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd'
            }
        ]
    }

    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
      

  return (
    <>
    <Row className='chart-header'>
        <Title level={2} className='chart-title'>{coinName} Price Chart</Title>
        <Col className='price-container'>
            <Title level={5} className='price-change'>{coinHistory?.data?.change}%</Title>
            <Title level={5} className='current-price'>Current {coinName} Price: ${currentPrice}</Title>

        </Col>
    </Row>

    <Line data={data} options={options}/>
    
    </>
  )
}

export default LineChart