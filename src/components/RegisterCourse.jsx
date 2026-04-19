import { useState } from 'react'

function RegisterCourse({ onAdd }) {
    const [name, setName] = useState('')
    const [credits, setCredits] = useState('')
    const [grade, setGrade] = useState('')
    const [attending, setAttending] = useState(false)
    const [difficulty, setDifficulty] = useState('Easy')
    const [error, setError] = useState('')

    function handleSubmit() {
        if (name.trim() === '') {
            setError('Course name cannot be empty.')
            return
        }
        if (grade === '' || isNaN(grade) || grade < 5 || grade > 10) {
            setError('Grade must be a number between 5 and 10.')
            return
        }

        setError('')
        onAdd({
            name,
            credits: Number(credits),
            grade: Number(grade),
            attending,
            difficulty
        })

        setName('')
        setCredits('')
        setGrade('')
        setAttending(false)
        setDifficulty('Easy')
    }

    return (
        <div>
            <h2>Register New Course</h2>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div>
                <label>Course Name:</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </div>

            <div>
                <label>Credit Hours:</label>
                <input type="number" value={credits} onChange={e => setCredits(e.target.value)} />
            </div>

            <div>
                <label>Current Grade:</label>
                <input type="number" value={grade} onChange={e => setGrade(e.target.value)} />
            </div>

            <div>
                <label>Attending Regularly:</label>
                <input type="checkbox" checked={attending} onChange={e => setAttending(e.target.checked)} />
            </div>

            <div>
                <label>Difficulty:</label>
                <select value={difficulty} onChange={e => setDifficulty(e.target.value)}>
                    <option value="Easy">Easy</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>

            <button onClick={handleSubmit}>Register</button>
        </div>
    )
}

export default RegisterCourse