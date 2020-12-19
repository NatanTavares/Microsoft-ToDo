import React, { useState } from 'react';

import Grid from '../Grid';

import { AiOutlinePlus } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { RiArrowUpDownLine } from 'react-icons/ri';

import './styles.css';

interface ITasksGridProps {
  title?: string;
}

function TasksGrid({ title='Default title' }: ITasksGridProps) {
  const [newTaskState, setNewTaskState] = useState('');

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
          aria-label="Adicionar uma tarefa"
          aria-describedby="baseAddInput-addTask-description" 
          type="text" 
          placeholder="Adicionar uma tarefa" 
          value={newTaskState}
          onChange={event => setNewTaskState(event.target.value)}
        />
      </div>

      <div className="grid">
        <Grid size={14} />
      </div>
    </div>
  );
}

export default TasksGrid;
