import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ChurnImage from '../images/churn.png'; 

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ProjectCard5() {
  const classes = useStyles();

  return (

<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt=""
          height="200"
          image={ChurnImage}
          title="ChurnImage"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Telecom Churn Prediction
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Using ML Algorithms to Predict Customer Churn
        </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
          href="https://github.com/vnaazleen/teleco-churn-prediction"
          size="small" 
          color="#090030"
          target='_blank'>
          <b>View Project</b>
        </Button>
      </CardActions>
    </Card>
  );
}