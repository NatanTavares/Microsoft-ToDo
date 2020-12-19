import React from 'react';

import './styles.css';

interface IProps {
  size: number;
}

function Grid(props: IProps) {
  function emptyGrid() {
    const grid = [];

    for (let index = 0; index <= props.size; index++) {
      grid.push(<div className="line" />);
    }

    return grid;
  }

  return (
    <div className="Grid-component">
      {emptyGrid()}
    </div>
  );
}

export default Grid;
