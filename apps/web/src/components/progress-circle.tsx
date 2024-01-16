
// Ver documentação Tailwind para importe da estrutura!
export interface ProgressCircleProps {
    progress: number
  }
  
  export function ProgressCircle({ progress }: ProgressCircleProps) {
    return (
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className="text-black-200 stroke-current" // substituímos para as nossas cores!
          strokeWidth="12"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        ></circle>
  
        <circle
          className="text-aquamarine-400 progress-ring__circle stroke-current" // substituímos para as nossas cores!
          strokeWidth="12"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          strokeDashoffset="calc(400 - (400 * 45) / 100)"
        ></circle>
      </svg>
    )
  }