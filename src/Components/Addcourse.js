import React, { useState } from 'react'
import "antd/dist/antd.css";
import './resume.css'
import { Form, Button, Input, Row, Col, Card } from "antd";


export default function (props) {
    const[data,setdata]=useState({Coursename: "",CourseDuration:"",Price:""})


    function handleFormSubmit(e) {
        e.preventDefault();
        setdata("")
      
        props.savedata(data)
 
      
    }

    function handleProductNameChange(e) {
        

        e.preventDefault();
        var name = e.target.name;
         setdata( { ...data,Coursename: e.target.value} )
         console.log(data,"data")
    }

    function handleBrandChange(e) {
        e.preventDefault();
        var name = e.target.name;
         setdata( { ...data,CourseDuration: e.target.value} )
       
         console.log(data,"data")
  
    }

    function handleQuantityChange(e) {
        e.preventDefault();
        var name = e.target.name;
         setdata( { ...data,[name]: e.target.value} )
       
         console.log(data,"data")
    }

  


    return (
        <div style={{background: "linear-gradient( #0f0c29, #302b63,#24243e);" }}>
        
         <div className="Addcourse">
      <Card
        title="APPLY COURCES"
      >
        <Row>
          <Col>
            <Form
              name="basic"
           
              autoComplete="off"
            >
              <Row>
                <Col>
                  <Form.Item
                    label="Course Name"
                    name="Course Name"
              
                  >
                    {" "}
                  </Form.Item>{" "}
                </Col>{" "}
              </Row>
              <Row>
                {" "}
                <Col>
                  {" "}
                  <Input name="Coursename" onChange={handleProductNameChange} value={data.Coursename}/>{" "}
                </Col>{" "}
              </Row>

              <Row>
                <Col>
                  <Form.Item
                    label="Course Duration"
                    name="Course Duration"
                    //   rules={[
                    //     {
                    //       required: true,
                    //       message: "Please input your Price!",
                    //     },
                    //   ]}
                  >
                    {" "}
                  </Form.Item>{" "}
                </Col>{" "}
              </Row>
              <Row>
                {" "}
                <Col>
                  {" "}
                  <Input name="CourseDuration" onChange={handleBrandChange} value={data.CourseDuration}  />{" "}
                </Col>{" "}
              </Row>

              <Row>
                <Col>
                  <Form.Item
                    label="Price"
                    name="Price"
                    //   rules={[
                    //     {
                    //       required: true,
                    //       message: "Please input your Price!",
                    //     },
                    //   ]}
                  >
                    {" "}
                  </Form.Item>{" "}
                </Col>{" "}
              </Row>
              <Row>
                {" "}
                <Col>
                  {" "}
                  <Input name="Price" onChange={handleQuantityChange} value={data.Price}/> {" "}
                </Col>{" "}
              </Row>

              <Row>
                <Col>
                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                   
                  </Form.Item>
                </Col>{" "}
           
                            <Col offset={2} span={3}> <Button  className="btn" onClick={handleFormSubmit}>Submit</Button></Col></Row>
            
            </Form>
          </Col>
        </Row>
      </Card>
    </div>
       </div>
        
    )
}

