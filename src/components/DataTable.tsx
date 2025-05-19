import {
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
  createTableColumn,
  TableColumnDefinition,
  Text,
} from '@fluentui/react-components'
import { extractColumns } from '../utils/useData'
import AppStyles from '../Styles'
import type { DataItem } from '../utils/PrepareData'
import EditableCell from './EditableCell'

type DataTableProps = {
  data: DataItem[]
  isEditable: boolean
}

function compare(a: DataItem, b: DataItem, field: string) {
  const valueA = String(a[field] ?? '')
  const valueB = String(b[field] ?? '')
  return valueA.localeCompare(valueB)
}

export const DataTable: React.FC<DataTableProps> = ({ data, isEditable }) => {
  const styles = AppStyles()

  // Extract row field name and columns from the data
  const { rowField, columns } = extractColumns(data)

  // Define columns for DataGrid based on extracted data structure
  const tableColumns: TableColumnDefinition<DataItem>[] = [
    // The first column for the row field
    createTableColumn<DataItem>({
      columnId: rowField,
      renderHeaderCell: () => <Text className={styles.headerCell}>{rowField}</Text>,
      renderCell: (item) => <Text>{String(item[rowField] ?? '')}</Text>,
      compare: (a, b) => compare(a, b, rowField),
    }),

    // Dynamically create columns for each category
    ...columns.map((column) =>
      createTableColumn<DataItem>({
        columnId: column,
        renderHeaderCell: () => <Text className={styles.headerCell}> {column}</Text>,
        renderCell: (item) =>
          isEditable ? <EditableCell item={item} column={column} /> : <Text>{String(item[column] ?? '')}</Text>,
        compare: (a, b) => compare(a, b, column),
      }),
    ),
  ]

  return (
    <DataGrid
      className={styles.table}
      items={data}
      columns={tableColumns}
      getRowId={(_item: DataItem, index: number) => index}
      sortable
      resizableColumns
    >
      <DataGridHeader className={styles.header}>
        <DataGridRow>
          {({ renderHeaderCell }) => <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>}
        </DataGridRow>
      </DataGridHeader>
      <DataGridBody>
        {({ item, rowId }) => (
          <DataGridRow key={rowId}>{({ renderCell }) => <DataGridCell>{renderCell(item)}</DataGridCell>}</DataGridRow>
        )}
      </DataGridBody>
    </DataGrid>
  )
}
