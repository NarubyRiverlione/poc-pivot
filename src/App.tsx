import { useState } from 'react'
import AppStyles from './Styles'
import { Spinner, Title1, Switch } from '@fluentui/react-components'
import { DataTable } from './components/DataTable'
import getData from './utils/GetData'
import { dummyTableDefinition } from './data/dummyData'
import { useData } from './utils/useData'
import CstTxt from './Cst'

function App() {
  const styles = AppStyles()
  const cacheIndex = 'data-table' // Unique key for the data resource (include record Guid)
  const tableData = useData(cacheIndex, getData, dummyTableDefinition)

  const [isEditable, setIsEditable] = useState(false)

  return (
    <div className={styles.container}>
      <Title1>{CstTxt.AppTitle}</Title1>

      <Switch
        checked={isEditable}
        onChange={() => {
          setIsEditable(!isEditable)
        }}
        label={isEditable ? 'Editable Mode' : 'Read-Only Mode'}
      />

      {tableData.length === 0 ? (
        <div className={styles.spinner}>
          <Spinner label={CstTxt.Loading} />
        </div>
      ) : (
        <DataTable data={tableData} isEditable={isEditable} />
      )}
    </div>
  )
}

export default App
