import React from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import NewsList from '../NewsList';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


function NewsForm({news}) {
  const classes = useStyles()
  return (
    <List className={classes.root}>
      {news&&news.map((item)=>{
        return <NewsList key={item.id} news={item}/>;
      })}
    </List>
  );
}

export default NewsForm;
