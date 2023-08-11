import React from 'react'
import { Col, Row ,Card} from 'react-bootstrap'

function ListFood({itemData}) {
  return (
    <Row>
    {
      itemData.length ? (
          itemData.map((item) => {
              return (
                  <Col sm='12' className='mb-3'>
                  <Card className='d-flex flex-row' style={{backgroundColor:'#f8f8f8'}}>
                  <Card.Img  className='img-item w-25' variant="top" src={item.imgUrl} />
                  <Card.Body>
                    <Card.Title className='d-flex justify-content-between'>
                      <div className='item-title'>{item.title}</div>
                      <div className='item-price'>{item.price}</div>
                    </Card.Title>
                    <Card.Text className='py-2'>
                      <div className='item-description '>{item.desc}</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
                  </Col>
              )
          })
      ) : <h3 className='text-center'>عذرا لا يوجد اطعمه متاحه فى الوقت الحالى</h3>
        }
    </Row>
        
  )
}

export default ListFood
