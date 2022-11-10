import React, { useEffect, useReducer, useState } from 'react'
import CourseInfo from './CourseInfo';
import Form from './Form';

const courses = [
  {
    id: '1',
    title: 'course 1'
  },
  {
    id: '2',
    title: 'course 2'
  },
  {
    id: '3',
    title: 'course 3'
  },
  {
    id: '4',
    title: 'course 4'
  },
  {
    id: '5',
    title: 'course 5'
  },
  {
    id: '6',
    title: 'course 6'
  },
]



//obiekt akcji
// {
//   type: 'ADD' //obowiazkowe
// }

const coursesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.object];
    case 'REMOVE':
      return state.filter(course => course.id !== action.id);
    case 'FETCH':
      return action.data;
    default:
      throw new Error('something went wrong');
  }
}

const fetchAsyncData = async () => {
  await new Promise(resolve => setTimeout(resolve, 3000))
}

const App = () => {
  const [state, dispatch] = useReducer(coursesReducer, [])

  const asyncFetch = async () => {
    await fetchAsyncData();
    dispatch({ type: 'FETCH', data: courses })
  }

  useEffect(() => {
    asyncFetch()
  }, [])

  const coursesElement = state.map(course => (
    <CourseInfo
      key={course.id}
      onClickHandler={dispatch}
      {...course}
    />
  ))

  return (
    <div>
      <Form addHandler={dispatch} />
      {coursesElement}
    </div>
  );
}

export default App;