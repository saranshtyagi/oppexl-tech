import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

function Blogs() {
  const blogPosts = [
    { title: 'Transforming HR with AI', summary: 'Explore how artificial intelligence is reshaping modern HR practices.' },
    { title: '5 Must-Have LMS Features', summary: 'Discover the top features you need in a corporate LMS.' },
    { title: 'Recruitment Trends 2025', summary: 'Stay ahead with the latest in hiring and talent management.' },
  ];

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>Our Latest Blogs</Typography>
      <Grid container spacing={4}>
        {blogPosts.map((blog, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{blog.title}</Typography>
                <Typography variant="body2">{blog.summary}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Blogs;
