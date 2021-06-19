import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NeuralArtImage from './images/neural_art.jpeg'; 

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ProjectCard1() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Neural Art"
          height="200"
          image={NeuralArtImage}
          title="Neural Art"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Neural Art
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A webiste implementing Neural Style Transfer to stylize images
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
          href="https://github.com/vnaazleen/NeuralArt-Website"
          size="small" 
          color="#090030"
          target='_blank' 
          >
          <b>View Project</b>
        </Button>
      </CardActions>
    </Card>
  );
}