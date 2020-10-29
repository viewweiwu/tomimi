# TmButton

## 基础示例

```tsx
import React from 'react'
import { TmButton } from 'tomimi'

export default function Demo() {
  return <TmButton>Tomimi</TmButton>
}
```

## 所有状态

```tsx
import React from 'react'
import { TmButton } from 'tomimi'

export default function Demo() {
  return (
    <>
      <TmButton type="primary" style={{ marginRight: 10 }}>Tomimi</TmButton>
      <TmButton type="error">Tomimi</TmButton>
    </>
  )
}
```
