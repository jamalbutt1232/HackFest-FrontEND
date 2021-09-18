import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './MyCard.css'
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const MyCard = () => {
    const classes = useStyles();

    return (
        <>
        <div className="grandparent">

            <div className="parent" >
                <div className="child" >
                    <Link to="/detail/sd" style={{textDecoration:'none' }}>

                    <Card className={classes.root} style={{backgroundColor:"white" }}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            title="Contemplative Reptile"
                            />
                            <CardContent >
                                <Typography gutterBottom variant="h5" style={{textDecoration:'none'}} component="h2">
                                    Samnabad, Lahore
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                
                    </Card>
                    </Link>
                </div>
            
            <div className="child" >
            <Card className={classes.root} style={{backgroundColor:"white"}}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Samnabad, Lahore
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
           
            </Card>
            </div>
            <div className="child" >
            <Card className={classes.root} style={{backgroundColor:"white" }}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    title="Contemplative Reptile"
                    
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Samnabad, Lahore
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
           
            </Card>
            </div>


           
            </div>
        </div>
        </>
    )
}

export default MyCard
