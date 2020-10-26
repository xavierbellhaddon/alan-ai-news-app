import React from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import classNames from "classnames";
import useStyles from "./styles.js";

const NewsCard = ({
  article: { description, title, publishedAt, source, url, urlToImage },
  i, activeArticle
}) => {
    const classes = useStyles();
  return (
    <div>
      <Card className={classNames(classes.card, activeArticle === i ? classes.activeCard : null)}>
        <CardActionArea href={url} target="_blank">
          <CardMedia
             className={classes.media}
            image={
              urlToImage ||
              "https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            }
          />
          <div className={classes.details}>
            <Typography
              variant="body2"
              color="textSecondary"
              component="h2"
        >{(new Date(publishedAt)).toDateString()}</Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="h2"
            >{source.name}</Typography>
          </div>
          <Typography gutterBottom variant="h5" className={classes.title}>{title}</Typography>
          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            >{description}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary">Learn More</Button>
          <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
        </CardActions>
      </Card>
    </div>
  );
};

export default NewsCard;
