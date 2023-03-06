import React, { useState } from 'react'
import { InputGroup, Form, Row, Col, Button } from "react-bootstrap"
import "./ExpenseItem.css"

const AddExpenses = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [dates, setDate] = useState("");
    const [desc, setDesc] = useState("");

    const submitForm = (e) => {
        e.preventDefault();

        const expenseData = {
            title: title,
            price: price,
            date: new Date().toLocaleDateString(),
            desc:desc
        }
        props.saveExpenseData(expenseData);
        
        console.log(expenseData);
        setTitle("");
        setDate("");
        setPrice("");
        setDesc("");
    }
    return (
        <>   <h3 className='text-center' style={{letterSpacing:"2px"}} >EXPENSE APPLICATION</h3>
            <div className='expense_form' style={{marginLeft:"250px",marginRight:"250px",fontWeight:"bold"}} >
                <Form onSubmit={submitForm}><br />
                <Row > 
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-sm">Title</InputGroup.Text>
                                <Form.Control
                                    aria-label="Title"
                                    placeholder='Enter expense title...'
                                    aria-describedby="inputGroup-sizing-sm"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </InputGroup>
                        </Col>
                        </Row>
                    <Row > 
                        {/* <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-sm">Title</InputGroup.Text>
                                <Form.Control
                                    aria-label="Title"
                                    aria-describedby="inputGroup-sizing-sm"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </InputGroup>
                        </Col> */}
                        <Col>
                            <InputGroup className="mb-3" xs lg="2">
                                <InputGroup.Text>$ {price}</InputGroup.Text>
                                {/* <InputGroup.Text>0.00</InputGroup.Text> */}
                                <Form.Control
                                    min="0.01"
                                    placeholder='Enter expense price...'
                                    type="number"
                                    step="0.01"
                                    aria-label="Dollar amount (with dot and two decimal places)"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)} />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-sm">Date: {dates}</InputGroup.Text>
                                <Form.Control
                                    aria-describedby="inputGroup-sizing-sm"
                                    value={dates}
                                    type="date"
                                    onChange={(e) => setDate(e.target.value)}
                                     placeholder="Current date is here" 
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Control
                            placeholder='Explain in detail..'
                            as="textarea"
                            rows={3}
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)} disabled />
                    </Form.Group>
                    <Button type='submit'style={{backgroundColor:"#40005d",borderRadius:"10px",border:"1px solid white",padding:"10px"}} >Add Expense</Button>
                </Form>
                
            </div><hr></hr>
            
        </>
    )
}

export default AddExpenses
