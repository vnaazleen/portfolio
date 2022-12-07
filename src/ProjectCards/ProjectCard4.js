import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AlumniProjectImage from '../images/alumni_project.png'; 

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ProjectCard4() {
  const classes = useStyles();

  return (

<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Alumni-Connect portfolio"
          height="200"
          image={AlumniProjectImage}
          title="Alumni Connect"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Alumni Connect
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            College alumni website to keep alumni connected with college
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
          href="https://github.com/AbdulMuheeth/vvit-alumni-connect"
          size="small" 
          color="#090030"
          target='_blank'>
          <b>View Project</b>
        </Button>
      </CardActions>
    </Card>
  );
}