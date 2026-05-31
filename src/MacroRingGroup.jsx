import React from 'react'
import { MacroRing } from './MacroRing.jsx'

/**
 * MacroRingGroup — renders multiple MacroRings in a row.
 *
 * @param {array}   rings        - array of MacroRing props objects
 * @param {number}  size         - ring size for all rings (default: 64)
 * @param {number}  strokeWidth  - stroke width for all rings (default: 6)
 * @param {string}  gap          - CSS gap between rings (default: '24px')
 * @param {string}  justify      - CSS justify-content (default: 'space-around')
 * @param {object}  style        - override wrapper style
 */
export function MacroRingGroup({
  rings = [],
  size = 64,
  strokeWidth = 6,
  gap = '24px',
  justify = 'space-around',
  style = {},
}) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: justify,
      gap,
      ...style,
    }}>
      {rings.map((ring, i) => (
        <MacroRing
          key={i}
          size={size}
          strokeWidth={strokeWidth}
          {...ring}
        />
      ))}
    </div>
  )
}
