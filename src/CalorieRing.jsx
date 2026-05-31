import React from 'react'

/**
 * CalorieRing — large hero ring with optional progress bar below.
 * Changes color when goal is exceeded.
 *
 * @param {number}  value        - current calories
 * @param {number}  goal         - calorie goal
 * @param {string}  color        - normal stroke color (default: '#52B788')
 * @param {string}  overColor    - color when over goal (default: '#F0B429')
 * @param {string}  trackColor   - background track color
 * @param {number}  size         - ring diameter in px (default: 80)
 * @param {number}  strokeWidth  - ring stroke thickness (default: 7)
 * @param {boolean} showBar      - show progress bar below (default: true)
 * @param {boolean} animate      - animate on mount (default: true)
 * @param {object}  style        - override wrapper style
 */
export function CalorieRing({
  value = 0,
  goal = 2000,
  color = '#52B788',
  overColor = '#F0B429',
  trackColor = 'rgba(255,255,255,0.08)',
  size = 80,
  strokeWidth = 7,
  showBar = true,
  animate = true,
  style = {},
}) {
  const pct = Math.min(goal > 0 ? (value / goal) * 100 : 0, 100)
  const isOver = value > goal
  const activeColor = isOver ? overColor : color
  const cx = size / 2
  const r = (size - strokeWidth) / 2
  const circ = 2 * Math.PI * r
  const offset = circ - (pct / 100) * circ
  const remaining = goal - value

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Text side */}
        <div>
          <p style={{ margin: '0 0 4px', fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
            Calories
          </p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <span style={{ fontSize: 48, fontWeight: 700, color: '#ffffff', lineHeight: 1 }}>
              {value.toLocaleString()}
            </span>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>
              / {goal.toLocaleString()}
            </span>
          </div>
          <p style={{ margin: '4px 0 0', fontSize: 13, fontWeight: 500, color: activeColor }}>
            {remaining > 0
              ? `${remaining.toLocaleString()} remaining`
              : `${Math.abs(remaining).toLocaleString()} over goal`}
          </p>
        </div>

        {/* Ring */}
        <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}
            style={{ transform: 'rotate(-90deg)' }}>
            <circle cx={cx} cy={cx} r={r} fill="none" stroke={trackColor} strokeWidth={strokeWidth} />
            <circle cx={cx} cy={cx} r={r} fill="none"
              stroke={activeColor} strokeWidth={strokeWidth}
              strokeDasharray={circ} strokeDashoffset={offset}
              strokeLinecap="round"
              style={{ transition: animate ? 'stroke-dashoffset 0.7s ease, stroke 0.3s ease' : 'none' }}
            />
          </svg>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#ffffff' }}>{Math.round(pct)}%</span>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      {showBar && (
        <div style={{ height: 6, background: trackColor, borderRadius: 99, overflow: 'hidden' }}>
          <div style={{
            height: '100%',
            width: `${pct}%`,
            background: activeColor,
            borderRadius: 99,
            transition: animate ? 'width 0.7s ease, background 0.3s ease' : 'none',
          }} />
        </div>
      )}
    </div>
  )
}
