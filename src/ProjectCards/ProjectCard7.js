import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import XharkTankImage from '../images/xharktank.png'; 

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ProjectCard7() {
  const classes = useStyles();

  return (

<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt=""
          height="200"
          image={XharkTankImage}
          title="XharkTankImage"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            XharkTank - Backend API
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The Backend of XharkTank where budding entrepreneurs can pitch ideas for a business or product they wish to develop 
          and Investors share their feedback/comments with a counter offer as per their interests.
        </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
          href="https://github.com/vnaazleen/XharkTank"
          size="small" 
          color="#090030"
          target='_blank'>
          <b>View Project</b>
        </Button>
      </CardActions>
    </Card>
  );
}