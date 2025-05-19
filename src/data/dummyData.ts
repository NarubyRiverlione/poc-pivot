import type { DataItem, TableDefinition } from '../utils/PrepareData'

const dummyData: DataItem[] = [
  { prefix_name: 'User 01', prefix_value: 30, prefix_type: 'age', Id: '001' },
  { prefix_name: 'User 04', prefix_value: 'Green', prefix_type: 'Color', Id: '002' },
  { prefix_name: 'User 02', prefix_value: 45, prefix_type: 'age', Id: '003' },
  { prefix_name: 'User 03', prefix_value: 'Yellow', prefix_type: 'Color', Id: '004' },
  { prefix_name: 'User 03', prefix_value: 20, prefix_type: 'age', Id: '005' },
  { prefix_name: 'User 02', prefix_value: 'Blue', prefix_type: 'Color', Id: '006' },
  { prefix_name: 'User 05', prefix_value: 'Male', prefix_type: 'Gender', Id: '007' },
  { prefix_name: 'User 01', prefix_value: 'Red', prefix_type: 'Color', Id: '008' },
  { prefix_name: 'User 06', prefix_value: '', prefix_type: 'Color', Id: '009' },
]

export const dummyTableDefinition: TableDefinition = {
  rowField: 'prefix_name',
  typeField: 'prefix_type',
  valueField: 'prefix_value',
  displayNameMapping: {
    age: 'Age',
    prefix_name: 'Name',
  },
}

export const dummyTableDefinitionNoMapping: TableDefinition = {
  rowField: 'prefix_name',
  typeField: 'prefix_type',
  valueField: 'prefix_value',
}

export default dummyData
