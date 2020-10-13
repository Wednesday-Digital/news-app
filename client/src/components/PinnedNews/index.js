import React from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import PinnedNewsListItems from '../PinnedNewsListItems';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


function PinnedNews({pinnedNews}) {
  const classes = useStyles()
  return (
    <List className={classes.root}>
      {pinnedNews&&pinnedNews.map((item)=>{
        return <PinnedNewsListItems key={item.id} news={item}/>;
      })}
    </List>
  );
}

export default PinnedNews;
