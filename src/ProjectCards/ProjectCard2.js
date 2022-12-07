import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AlgoVisImage from '../images/algo_visualizer.PNG'; 

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ProjectCard2() {
  const classes = useStyles();

  return (

<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Algo Visualizer"
          height="200"
          image={AlgoVisImage}
          title="Algo Visualizer"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Algo Visualizer
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A webiste to visualize various path-finding algorithms
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
          href="https://github.com/vnaazleen/algo-visualizer"
          size="small" 
          color="#090030"
          target='_blank'>
          <b>View Project</b>
        </Button>
      </CardActions>
    </Card>
  );
}