import React from 'react'

/**
 * MacroRing — single animated circular progress ring.
 *
 * @param {number}  value        - current value
 * @param {number}  goal         - target value
 * @param {string}  color        - stroke color (hex or css color)
 * @param {string}  label        - label shown below ring
 * @param {string}  unit         - unit shown with value (e.g. 'g', 'kcal')
 * @param {number}  size         - ring diameter in px (default: 64)
 * @param {number}  strokeWidth  - ring stroke thickness (default: 6)
 * @param {string}  trackColor   - background track color (default: '#1a2e1a')
 * @param {boolean} showPercent  - show % in center (default: true)
 * @param {boolean} showLabel    - show label + value below ring (default: true)
 * @param {boolean} animate      - animate on mount (default: true)
 * @param {object}  style        - override wrapper style
 */
export function MacroRing({
  value = 0,
  goal = 100,
  color = '#52B788',
  label = '',
  unit = '',
  size = 64,
  strokeWidth = 6,
  trackColor = 'rgba(255,255,255,0.08)',
  showPercent = true,
  showLabel = true,
  animate = true,
  style = {},
}) {
  const pct = Math.min(goal > 0 ? (value / goal) * 100 : 0, 100)
  const cx = size / 2
  const r = (size - strokeWidth) / 2
  const circ = 2 * Math.PI * r
  const offset = circ - (pct / 100) * circ

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', ...style }}>
      <div style={{ position: 'relative', width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          style={{ transform: 'rotate(-90deg)' }}
        >
          {/* Track */}
          <circle
            cx={cx} cy={cx} r={r}
            fill="none"
            stroke={trackColor}
            strokeWidth={strokeWidth}
          />
          {/* Progress */}
          <circle
            cx={cx} cy={cx} r={r}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circ}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: animate ? 'stroke-dashoffset 0.7s ease' : 'none' }}
          />
        </svg>
        {showPercent && (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: size * 0.175, fontWeight: 600, color: '#ffffff', lineHeight: 1 }}>
              {Math.round(pct)}%
            </span>
          </div>
        )}
      </div>

      {showLabel && (
        <div style={{ textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: 12, fontWeight: 600, color }}>{value}{unit}</p>
          {label && <p style={{ margin: 0, fontSize: 10, color: 'rgba(255,255,255,0.3)', marginTop: 2 }}>{label}</p>}
        </div>
      )}
    </div>
  )
}
