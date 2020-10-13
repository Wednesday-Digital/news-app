import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      margin: "2rem auto"
    },
  });

function NewsForm({setSearchTerm, searchTerm, getData}) {

    const classes = useStyles();

  return (
    <Card className={classes.root}>
        <div style={{margin:'1rem auto'}}>
            <input value={searchTerm} style={{margin: "1rem"}} type="text" onChange={(event)=>setSearchTerm(event.target.value)}/>
            <Button variant="outlined" color="primary" type="submit" onClick={(event)=>{
                    event.preventDefault();
                    getData()
                
                }}>
                search
            </Button>
        </div>
        
    </Card>
  );
}

export default NewsForm;
