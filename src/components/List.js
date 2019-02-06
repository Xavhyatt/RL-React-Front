import React, { Component } from 'react';

class List extends Component {
    render() {
        const { isLoading, users, error } = this.state;
        return (
          <React.Fragment>
            <h1>Random User</h1>
            // Display a message if we encounter an error
            {error ? <p>{error.message}</p> : null}
            // Here's our data check
            {!isLoading ? (
              users.map(user => {
                const { username, name, email } = user;
                return (
                  <div key={username}>
                    <p>Name: {name}</p>
                    <p>Email Address: {email}</p>
                    <hr />
                  </div>
                );
              })
            // If there is a delay in data, let's let the user know it's loading
            ) : (
              <h3>Loading...</h3>
            )}
          </React.Fragment>
        );
            }
        }
      
export default List;