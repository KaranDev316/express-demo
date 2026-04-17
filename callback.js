getUser(1, (user) => {
    console.log('User:', user);
    const repos = getRepositories(user);
    console.log('Repos:', repos);
});

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a user from a database...');
    callback({ id: id, name: 'Alfred' });
  }, 2000);
}

function getRepositories(username) {
    return ['repo1', 'repo2', 'repo3'];
}
  
   