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

const NewsCard = ({
  article: { description, title, publishedAt, source, url, urlToImage },
  i,
}) => {
  return (
    <div>
      <Card>
        <CardActionArea>
          <CardMedia
            image={
              urlToImage ||
              "https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            }
          />
          <div>
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
          <Typography gutterBottom varian="h5">{title}</Typography>
          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            >{description}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">Learn More</Button>
          <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
        </CardActions>
      </Card>
    </div>
  );
};

export default NewsCard;
