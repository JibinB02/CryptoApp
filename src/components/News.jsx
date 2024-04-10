import React from 'react'
import {Select,Typography,Row,Col,Avatar,Card} from 'antd'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
const {Text,Title} = Typography
const {Option} = Select

const News = ({simplified}) => {
  const {data: cryptoNews} = useGetCryptoNewsQuery();
  console.log(cryptoNews)

  if(!cryptoNews?.data)
  return "Loading...";

  return (
    <Row gutter={[24,24]}>
      {cryptoNews.data.map((news,i)=> (
        <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className='news-card'>
              <a href = {news.url} target='_blank' rel="noreferrer">
                  <div className='news-image-container'>
                    <Title className='news-title' level={4}>{news.title}</Title>
                    <img src={news.thumbnail} alt='news' style={{ maxWidth: '100%', maxHeight: '200px' }}/>
                  </div>
                  <p>
                    {news.description > 100 ? `${news.description.substring(0,100)}...` 
                    : news.description
                    } 
                  </p>
              </a>
            </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News