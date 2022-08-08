import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PortfolioImage from './images/portfolio.png'; 

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
          alt="Personal portfolio"
          height="200"
          image={PortfolioImage}
          title="Personal portfolio"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Portfolio
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Personal portfolio website, know more about me :)
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
          href="https://github.com/vnaazleen/portfolio-1"
          size="small" 
          color="#090030"
          target='_blank'>
          <b>View Project</b>
        </Button>
      </CardActions>
    </Card>
  );
}