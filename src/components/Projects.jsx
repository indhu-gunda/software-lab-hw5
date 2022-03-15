import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Projects({ initialValue }) {
  const [viewProjects, setViewProjects] = useState(true);
  const [projectsCount, setProjectsCount] = useState(initialValue);
  return (
    <>
      <FormGroup>
        <FormControlLabel control={
          <Checkbox defaultChecked onClick={() => setViewProjects(!viewProjects)} />}
          label='Show Projects' />
      </FormGroup>
      <Button variant="contained" onClick={() => setProjectsCount(projectsCount + 1)}>Add Project</Button>
      {viewProjects && (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {[...Array(projectsCount).keys()].map((key) => (
            <ListItem key={key}>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={"Project " + key} secondary="Jan 9, 2014" />
            </ListItem>
          ))}
        </List>
      )}

    </>
  );
}

Projects.propTypes = {
  initialValue: PropTypes.number.isRequired,
};
