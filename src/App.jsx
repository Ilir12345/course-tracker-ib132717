import { useState, useCallback, useRef } from 'react'
import StudentCard from './components/StudentCard'
import RegisterCourse from './components/RegisterCourse'

function App() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Client-Side Programming",
      credits: 6,
      grade: 8,
      attending: true,
      difficulty: "Moderate"
    },
    {
      id: 2,
      name: "Operating System",
      credits: 6,
      grade: 7,
      attending: true,
      difficulty: "Hard"
    },
    {
      id: 3,
      name: "Databases",
      credits: 6,
      grade: 8,
      attending: true,
      difficulty: "Moderate"
    },
    {
      id: 4,
      name: "English Language",
      credits: 4,
      grade: 9,
      attending: true,
      difficulty: "Easy"
    },
    {
      id: 5,
      name: "Written Communication",
      credits: 4,
      grade: 8,
      attending: true,
      difficulty: "Easy"
    },
    {
      id: 6,
      name: "Applied Probability and Statistics",
      credits: 6,
      grade: 7,
      attending: true,
      difficulty: "Hard"
    }
  ])

  // useRef is used here instead of useState because we want to track the count without causing a re-render
  const addedCount = useRef(0)

  const handleAddCourse = useCallback((newCourse) => {
    addedCount.current += 1
    setCourses(prev => [
      ...prev,
      { id: prev.length + 1, ...newCourse }
    ])
  }, [])

  return (
      <div>
        <h1>Ilir Bajrami</h1>
        <h2>Student ID: ib132717</h2>
        <p>These are my enrolled courses for this semester:</p>
        {courses.map(course => (
            <StudentCard key={course.id} course={course} />
        ))}
        <RegisterCourse onAdd={handleAddCourse} />
      </div>
  )
}

export default App