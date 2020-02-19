import React from 'react';
import ListContainer from '../modules/list/components';

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Articles</h2>
        <ListContainer />
      </div>
    );
  }
}

export default App;