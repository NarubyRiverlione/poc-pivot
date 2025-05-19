import { useState } from 'react'
import type { DataItem } from '../utils/PrepareData'
import { Input, Text } from '@fluentui/react-components'

type Props = {
  item: DataItem
  column: string
}

function EditableCell({ item, column }: Props) {
  const dataId = item[`${column}_Id`]?.toString() ?? undefined
  const itemValue = item[column]?.toString()
  // Debugging: indication if this has an Id or not (existing but empty data or not existing data)
  // needed later on to determine if insert or update
  const initialValue = !itemValue || itemValue === '' ? (dataId ? ' ? ' : '-') : itemValue

  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(initialValue)

  const handleClick = () => {
    setIsEditing(true)
    if (dataId) {
      console.log('Clicked ID:', dataId)
    }
  }

  const handleBlur = () => {
    setIsEditing(false)
    console.log(`Updated value: ${value} for Id ${dataId ?? ''}`)
  }

  return isEditing ? (
    <Input
      type="text"
      value={value === '-' ? '' : value}
      onChange={(e) => {
        setValue(e.target.value)
      }}
      onBlur={handleBlur}
      autoFocus
      style={{ width: '100%' }}
    />
  ) : (
    <Text data-id={dataId} onClick={handleClick} style={{ cursor: 'text', width: '100%' }}>
      {value}
    </Text>
  )
}

export default EditableCell
