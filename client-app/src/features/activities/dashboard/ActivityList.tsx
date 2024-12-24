import React from 'react';
import { Activity } from '../../../app/models/activity';
import { Button, Item, Label, Segment } from 'semantic-ui-react';

interface Props {
    activities: Activity[];
    selectactivity: any;
    deleteActivity: any;
}
export default function ActivityList({activities,selectactivity,deleteActivity} : Props) {
    return (
        <Segment>
            <Item.Group divided>
                {activities.map(activity => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <Item.Extra>
                                    <Button onClick={() => selectactivity(activity.id)} floated='right' content='View' color='blue' />
                                    <Button onClick={() => deleteActivity(activity.id)} floated='right' content='Delete' color='red' />
                                    <Label basic content={ activity.category} />
                                </Item.Extra>
                            </Item.Description>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
)
}
