import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Category({filterCat,allCategory}) {

  const onFilter = (cat) => {
    filterCat(cat);
  }
  return (
    <Row className='my-2 mb-5'>
        <Col className='justify-content-center d-flex' >
        {
          allCategory.length >=1 ? (
            allCategory.map((cat) => {
              return (
                <div>
                    <button onClick={() => onFilter(cat)} className='btn-category mx-2'>{cat}</button>
                </div>
              )
            })
          ) : <h4>لا يوجد تصنيفات</h4>
        }
        </Col>
    </Row>
  )
}

export default Category
