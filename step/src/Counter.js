import { useState } from 'react'

export default function Counter() {
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
