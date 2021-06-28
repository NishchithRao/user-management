import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const StatCard = ({Icon,title,count}) => {
  console.log(title);
    return (
        <Card variant="outlined">
      <CardContent>
        <Icon/>
                <Typography variant="h4" component="p">{title}</Typography>
        <Typography color="textSecondary" gutterBottom>
          {count} total users
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">Learn More</Button>
      </CardActions>
    </Card>
    )
}

export default StatCard
