# react-macro-rings

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-iamadhitya1-blue?logo=github)](https://github.com/iamadhitya1)
![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)
![React](https://img.shields.io/badge/React-17%2B-61DAFB?logo=react)

> Animated circular progress rings for React. Built for nutrition, fitness, and dashboard apps.

**3 components. Zero dependencies. Pure SVG + inline styles.**

---

## Components

| Component | What it does |
|-----------|-------------|
| `<MacroRing>` | Single animated ring — protein, carbs, fat, steps, anything |
| `<MacroRingGroup>` | Row of rings from a data array |
| `<CalorieRing>` | Hero ring with label, remaining count, and progress bar |

---

## Install

```bash
# No npm package — copy src/ into your project:
git clone https://github.com/iamadhitya1/react-macro-rings
```

---

## Usage

### `<MacroRing>`

```jsx
import { MacroRing } from './react-macro-rings/src'

<MacroRing
  value={42}
  goal={160}
  color="#F0B429"
  label="Protein"
  unit="g"
/>
```

**Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `0` | Current value |
| `goal` | `number` | `100` | Target value |
| `color` | `string` | `'#52B788'` | Ring color |
| `label` | `string` | `''` | Label below ring |
| `unit` | `string` | `''` | Unit suffix (g, kcal, %) |
| `size` | `number` | `64` | Diameter in px |
| `strokeWidth` | `number` | `6` | Ring thickness |
| `trackColor` | `string` | `'rgba(255,255,255,0.08)'` | Background track color |
| `showPercent` | `boolean` | `true` | Show % in center |
| `showLabel` | `boolean` | `true` | Show label + value below |
| `animate` | `boolean` | `true` | Animate on mount |
| `style` | `object` | `{}` | Wrapper style override |

---

### `<MacroRingGroup>`

```jsx
import { MacroRingGroup } from './react-macro-rings/src'

<MacroRingGroup
  rings={[
    { value: 42,  goal: 160, color: '#F0B429', label: 'Protein', unit: 'g' },
    { value: 180, goal: 200, color: '#60a0ff', label: 'Carbs',   unit: 'g' },
    { value: 30,  goal: 65,  color: '#f06060', label: 'Fat',     unit: 'g' },
  ]}
  size={64}
  gap="24px"
/>
```

**Props**

| Prop | Type | Default |
|------|------|---------|
| `rings` | `array` | `[]` — array of `MacroRing` prop objects |
| `size` | `number` | `64` |
| `strokeWidth` | `number` | `6` |
| `gap` | `string` | `'24px'` |
| `justify` | `string` | `'space-around'` |
| `style` | `object` | `{}` |

---

### `<CalorieRing>`

```jsx
import { CalorieRing } from './react-macro-rings/src'

<CalorieRing
  value={850}
  goal={2100}
  color="#52B788"
  overColor="#F0B429"
  showBar={true}
/>
```

**Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `0` | Current calories |
| `goal` | `number` | `2000` | Calorie goal |
| `color` | `string` | `'#52B788'` | Normal ring color |
| `overColor` | `string` | `'#F0B429'` | Color when over goal |
| `trackColor` | `string` | `'rgba(255,255,255,0.08)'` | Track color |
| `size` | `number` | `80` | Ring diameter in px |
| `strokeWidth` | `number` | `7` | Ring thickness |
| `showBar` | `boolean` | `true` | Show progress bar below |
| `animate` | `boolean` | `true` | Animate on mount |
| `style` | `object` | `{}` | Wrapper style override |

---

## Full Dashboard Example

```jsx
import { CalorieRing, MacroRingGroup } from './react-macro-rings/src'

export default function Dashboard({ totals, goals }) {
  return (
    <div style={{ background: '#0f1a0f', borderRadius: 24, padding: 20 }}>
      <CalorieRing
        value={totals.cal}
        goal={goals.cal}
        color="#52B788"
        overColor="#F0B429"
      />

      <MacroRingGroup
        rings={[
          { value: totals.protein, goal: goals.protein, color: '#F0B429', label: 'Protein', unit: 'g' },
          { value: totals.carbs,   goal: goals.carbs,   color: '#60a0ff', label: 'Carbs',   unit: 'g' },
          { value: totals.fat,     goal: goals.fat,     color: '#f06060', label: 'Fat',     unit: 'g' },
        ]}
        style={{ marginTop: 20 }}
      />
    </div>
  )
}
```

---

## Used in Production

Built from the real implementation powering **[Sage](https://joinsage.vercel.app)** — an AI nutrition coach by [Rewrite Labs](https://rewritelabs.vercel.app).

---

## License

MIT © 2025 [M Adhitya](https://github.com/iamadhitya1)
