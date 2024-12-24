import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import Activityform from '../forms/ActivityForm';

interface props {
    activities: Activity[];
    selectedActivity: Activity | undefined ;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createorEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityDashboard({ activities, selectedActivity, selectActivity, deleteActivity,
    cancelSelectActivity, editMode, openForm, closeForm, createorEdit }: props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities}
                    selectactivity={selectActivity}
                    deleteActivity={deleteActivity}
                />
            </Grid.Column>
            <Grid.Column width = '6'>
                {selectedActivity && !editMode &&
                    <ActivityDetails
                    activity={selectedActivity}
                    cancelSelectActivity={cancelSelectActivity}
                    openForm={openForm}
                    />}
                {editMode &&
                    <Activityform closeForm={closeForm} activity={selectedActivity} createorEdit={createorEdit} />} 
            </Grid.Column>
        </Grid>
)
}