import React from 'react';

import Header from './components/Header';
import SideMenu from './components/SideMenu';
import TasksGrid from './components/TasksGrid';

import { VscMenu } from 'react-icons/vsc';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <main>
        <aside>
          <div className="menu-position">
            <button>
              <VscMenu className="icon" />
            </button>
          </div>
          
          <SideMenu />
        </aside>
        
        <section>
          <TasksGrid title="Tarefas" />
        </section>
      </main>
    </div>
  );
}

export default App;
