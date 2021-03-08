import { useContext } from 'react';
import { TasksContext } from '../../context/TasksContext';

import Grid from '../Grid';

import { AiOutlinePlus } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { RiArrowUpDownLine } from 'react-icons/ri';

import './styles.css';

interface ITasksGridProps {
  title?: string;
}

function TasksGrid({ title='Default title' }: ITasksGridProps) {
  const { handleInputValue, handleNewTask } = useContext(TasksContext);

  return (
    <div className="TasksGrid-component">
      <div className="top-section">
        <div className="title-position">
          <h2>{title}</h2>
          <button>
            <BsThreeDots className="icon-toolbar" />
          </button>
        </div>

        <button>
          <RiArrowUpDownLine className="icon-toolbar" />
          
          <span>
            Classificar
          </span>
        </button>
      </div>

      <div className="add-new-task">
        <AiOutlinePlus id="add-task-icon" className="icon" />
        <input
          placeholder="Adicionar uma tarefa" 
          onChange={event => handleInputValue(event.target.value)}
          onKeyPress={event => handleNewTask(event)}
        />
      </div>

      <div className="grid">
        <Grid />
      </div>
    </div>
  );
}

export default TasksGrid;
