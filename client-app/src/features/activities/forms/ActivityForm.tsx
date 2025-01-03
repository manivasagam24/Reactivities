import React, { ChangeEvent, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'

interface props {
    activity: Activity | undefined;
    closeForm: () => void;
    createorEdit: () => void;
}

export default function Activityform({ activity : selectedActivity, closeForm, createorEdit }: props) {

    const intialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setactivity] = useState(intialState);

    function handleSubmit() {
        createorEdit(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setactivity({...activity, [name] : value})
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete ='off'>
                <Form.Input placeholder='Title' value={activity.title} name='title'  onChange={handleInputChange} />
                <Form.TextArea placeholder='Description' value={activity.description} name='description' onChange={handleInputChange}  />
                <Form.Input placeholder='Category' value={activity.category} name='category' onChange={handleInputChange} />
                <Form.Input placeholder='Date' value={activity.date} name='date' onChange={handleInputChange} />
                <Form.Input placeholder='City' value={activity.city} name='city' onChange={handleInputChange} />
                <Form.Input placeholder='Venue' value={activity.venue} name='venue' onChange={handleInputChange} />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm}  floated='right'  type='button' content='Cancel' />
            </Form>
        </Segment>
)
}