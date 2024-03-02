// import Message from './message'

import { useState } from 'react'

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
]

export default function App() {
  return (
    <div>
      <Steps />
      <Counter />
    </div>
  )
}
function Steps() {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)
  // const [test, setTest] = useState({ name: 'Zane' })

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1)
  }

  function handleNext() {
    if (step < 3) {
      // setStep(step + 1)
      setStep((s) => s + 1)
      // setStep((s) => s + 1)
    }

    // BAD PRACTICE
    // test.name = 'Zanebla'
    // setTest({ name: 'Zanebla' })
  }

  // function handleClose() {
  //   setIsOpen(!isOpen)
  // }

  return (
    <div>
      {/* <button className="close" onClick={() => setIsOpen(!isOpen)}> */}
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          {/* <Message className="message"></Message> */}
          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: '#7950f2', color: '#ffffff' }}
              onClick={handlePrevious}
              // onMouseOver={() => alert('TEST')}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: '#7950f2', color: '#ffffff' }}
              onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  function handleReset() {
    setCount(0)
    setStep(1)
  }
  const date = new Date('July 21 2027')
  date.setDate(date.getDate() + count)

  return (
    <div>
      <div className="counter">
        {/* <button onClick={() => setStep((s) => s - 1)}>-</button>
        <button onClick={() => setStep((s) => s + 1)}>+</button> */}
        <span> Step: {step} &nbsp;</span>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>
      <div className="counter">
        Count: {count} &nbsp;&nbsp;
        <button
          onClick={() => {
            setCount((c) => c - step)
          }}>
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button
          onClick={() => {
            setCount((c) => c + step)
          }}>
          +
        </button>
      </div>
      <div className="counter">
        <span>
          {count === 0
            ? 'Today is'
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was`}
        </span>
        <span>&nbsp;</span>
        <span>{date.toDateString()}</span>
      </div>
      {count !== 0 || step !== 1 ? (
        <div className="counter">
          <button onClick={handleReset}>RESET</button>
        </div>
      ) : null}
    </div>
  )
}
