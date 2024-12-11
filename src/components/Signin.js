import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



import React from 'react'
import FormGroup from 'react-bootstrap/esm/FormGroup';
import FormLabel from 'react-bootstrap/esm/FormLabel';




export default function Signin() {




    return(
        <div>
            
            <h1>Welcome to Mynthra, Have a good sale with us</h1>

            <div className='DivSin'>
                <Form className='LoginForm'>
                    
                    
                    
                        
                        <FormGroup className='Formlabel' >
                            <FormLabel className='d-flex'>Name</FormLabel>
                            <Form><input className='Sin-Inputs-box' type='text' placeholder='Enter username'/></Form>
                        
                        
                         </FormGroup>

                        <FormGroup className='Formlabel' >
                            <FormLabel className='d-flex'>Email</FormLabel>
                            <Form><input className='Sin-Inputs-box' type='email' placeholder='Enter email'/></Form>
                        </FormGroup>

                        {/* <FormGroup className='Formlabel'>
                            <FormLabel className='d-flex' >DOB</FormLabel>
                            <Form><input className='' type='date' placeholder='Ent'/></Form>
                        </FormGroup> */}

                        <FormGroup className='Formlabel'>
                            <FormLabel className='d-flex'>Password</FormLabel>
                            <Form><input className='Sin-Inputs-box' type='password' placeholder='Enter password'/></Form>
                        </FormGroup>
                        
                        
                        <FormGroup><button className='Sin-Submit-Btn'>Submit</button></FormGroup>

                   
                        
                    

                </Form>


            </div>
            
        </div>
    )
}

