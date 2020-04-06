import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './styles/Content.scss';
import Header from './Header'
import Footer from './Footer'

function ViewAll() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
      async function loadPosts() {
          const response = await fetch('https://heat-n-cooling.local/wp-json/wp/v2/test');
          if(!response.ok) {
              // oups! something went wrong
              console.log('something went wrong');
              return;
          }
  
          const posts = await response.json();
          setPosts(posts);
      }
  
      loadPosts();
 }, [])
return (
  <React.Fragment>
    <Header />
    <main>
    <Grid container spacing={2}>
        {posts.map((post, index) => (
        <Grid item xs={4} key={index}>
        <Card>
            <CardContent>
                <Typography
                    color="textSecondary"
                    gutterBottom
                    dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                <Typography
                    variant="body2"
                    component="p"
                    dangerouslySetInnerHTML={{__html: post.content.rendered}} />
            </CardContent>
        </Card>
        </Grid>
    ))}
    </Grid>
    </main>
    <Footer />
  </React.Fragment>
);
}

export default ViewAll;
