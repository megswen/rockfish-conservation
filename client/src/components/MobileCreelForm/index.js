import React from "react";
import "./style.css";
import { Form, InputGroup } from 'react-bootstrap';

function MobileCreelForm(props) {
    return (
        <div className="container-fluid mobile-creel-box">
            <Form className="mobile-creel-form justify-content-center container-fluid">
                <Form.Group controlId='creelInputForm' className="mobile-creel-form text-center justify-content-center">
                    <InputGroup size='lg' className='mobile-input-group'>
                        <Form.Control
                            type='text'
                            placeholder='species'
                            aria-describedby='inputGroupPrepend'
                            name='species'
                            id='creel-species-input'
                            className='mobile-creel-input'
                            onChange={props.onChange}
                        />
                    </InputGroup>
                    <InputGroup size='lg' className='mobile-input-group'>
                        <Form.Control
                            type='text'
                            placeholder='length (inches)'
                            aria-describedby='inputGroupPrepend'
                            name='length'
                            id='creel-length-input'
                            className='mobile-creel-input'
                            onChange={props.onChange}
                        />
                    </InputGroup>
                    <InputGroup size='lg' className='mobile-input-group'>
                        <Form.Control
                            type='date'
                            placeholder='mm/dd/yyyy'
                            aria-describedby='inputGroupPrepend'
                            name='date'
                            id='creel-date-input'
                            className='mobile-creel-input'
                            onChange={props.onChange}
                        />
                    </InputGroup>
                    <InputGroup size='lg' className='mobile-input-group'>
                        <Form.Control
                            type='text'
                            placeholder='location'
                            aria-describedby='inputGroupPrepend'
                            name='location'
                            id='creel-location-input'
                            className='mobile-creel-input'
                            onChange={props.onChange}
                        />
                    </InputGroup>
                </Form.Group>
            </Form>
        </div>
    );
}

export default MobileCreelForm;
