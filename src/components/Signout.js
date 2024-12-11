import React from 'react'

import FormGroup from 'react-bootstrap/esm/FormGroup';
import FormLabel from 'react-bootstrap/esm/FormLabel';

import Form from 'react-bootstrap/Form';



export default function SignOut() {
    return(
        <div>
            <h1> Fill to Login </h1>
            <div>
            <Form className='LoginForm'>
                    
                    
                    
                        
                    <FormGroup className='Formlabel' >
                        <FormLabel className='d-flex'>Name :</FormLabel>
                        <Form><input className='Sin-Inputs-box' type='text' placeholder='Enter username'/></Form>
                    
                    
                     </FormGroup>

                    <FormGroup className='Formlabel' >
                        <FormLabel className='d-flex'>Email :</FormLabel>
                        <Form><input className='Sin-Inputs-box' type='email' placeholder='Enter email'/></Form>
                    </FormGroup>

                    {/* <FormGroup className='Formlabel'>
                        <FormLabel className='d-flex' >DOB</FormLabel>
                        <Form><input className='' type='date' placeholder='Ent'/></Form>
                    </FormGroup> */}

                    <FormGroup className='Formlabel'>
                        <FormLabel className='d-flex'>Password :</FormLabel>
                        <Form><input className='Sin-Inputs-box' type='password' placeholder='Enter password'/></Form>
                    </FormGroup>
                    
                    
                    <FormGroup><button className='Sin-Submit-Btn'>Submit</button></FormGroup>

               
                    
                

            </Form>



            </div>
            


        </div>
    )
}