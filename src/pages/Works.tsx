import React, { useState, useEffect } from 'react';
import { Box, List, ListItem, Link, Spinner } from '@chakra-ui/react';

const WorksPage: React.FC = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/MAYKELL07/repos')
      .then(response => response.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      });
  }, []);

  return (
    <Box p={4}>
      <h2>Your GitHub Repositories:</h2>
      {loading ? (
        <Spinner />
      ) : (
        <List spacing={3}>
          {repos.map(repo => (
            <ListItem key={repo.id}>
              <Link href={repo.html_url} isExternal>
                {repo.name}
              </Link>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default WorksPage;
