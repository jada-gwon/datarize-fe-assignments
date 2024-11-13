import clsx from 'clsx'
import { useEffect, useState } from 'react'

import IconTime from './icon-time.svg?react'

type PeriodSelectorInput = {
  from: string
  to: string
}

type PeriodSelectorProps = {
  onChange: (input: PeriodSelectorInput | null) => void
}

const PeriodSelector: React.FC<PeriodSelectorProps> = ({ onChange }) => {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  const reset = () => {
    setFrom('')
    setTo('')
    onChange(null)
  }

  useEffect(() => {
    if (from && to) {
      onChange({ from, to })
    }
    if (!from || !to) {
      onChange(null)
    }
  }, [from, to, onChange])

  return (
    <>
      <div className="inline-flex items-center justify-center gap-4 rounded-full border border-zinc-300 px-4 py-1.5">
        <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} />
        <span>~</span>
        <input type="date" value={to} onChange={(e) => setTo(e.target.value)} />
      </div>
      <button
        type="submit"
        className={clsx('ml-2 size-9 rounded-full border-2 border-blue-500 bg-white text-blue-500', {
          invisible: !from || !to,
        })}
        onClick={reset}
      >
        <span className="inline-block align-bottom">
          <IconTime />
        </span>
      </button>
    </>
  )
}

export default PeriodSelector
