import { useContext, useEffect } from 'react';
import { TasksContext } from '../../context/TasksContext';

import './styles.css';

function Grid() {
  const { currentTask, gridWithTasks } = useContext(TasksContext);

  useEffect(() => {
    console.log(gridWithTasks)
  }, [currentTask, gridWithTasks])

  return (
    <div className="Grid-component">
      {/* {gridWithTasks} */}
    </div>
  );
}

export default Grid;
