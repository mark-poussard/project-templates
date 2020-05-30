import React from 'react';
import './App.scss';
// import LoadData from './lib/view/components/async/LoadData';

const App : React.FunctionComponent = props => {
  return (
    <div className={`App`}>
      <h1>Welcome to the tsx client template app</h1>
      {/* <LoadData promise={Promise.resolve("Tying to add lib with symlink")}>
        {str => <p>{str}</p>}
      </LoadData> */}
    </div>
  )
}
export default App;
