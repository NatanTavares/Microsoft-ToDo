import React from 'react';

import { TasksProvider } from './context/TasksContext';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import TasksGrid from './components/TasksGrid';

import { VscMenu } from 'react-icons/vsc';

import './App.css';

function App() {
  return (
    <TasksProvider>
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
    </TasksProvider>
  );
}

export default App;
