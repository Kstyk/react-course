import React from 'react';
import Task from './Task';

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active)
    const done = props.tasks.filter(task => !task.active)

    done.sort((a, b) => {
        return b.finishDate - a.finishDate
    })

    active.sort((a,b) => {
        a = a.text.toLowerCase()
        b = b.text.toLowerCase()

        if(a < b) return -1;
        if(a > b) return 1;
        return 0;
    })

    const activeTasks = active.map(task => <Task key={task.id}
    task={task}
    delete={props.delete}
    status={props.status}
    />)
    
    const doneTasks = done.map(task => <Task key={task.id}
    task={task}
    delete={props.delete}
    status={props.status}
    />)

    return (
        <>
            <div className='active'>
                <h1>Zadania do zrobienia</h1>
                {activeTasks.length > 0 ? activeTasks : "Nie ma nic do wyświetlenia"}
            </div>
            <hr />
            <div className='active'>
                <h1>Zadania zrobione ({doneTasks.length})</h1>
                {done.length > 5 && <span>Wyświetlonych jest jedynie 5 ostatnich elementów</span>}
                {doneTasks.slice(0, 5)}
            </div>
        </>
    );
}

export default TaskList;