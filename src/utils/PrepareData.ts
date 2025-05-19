export type TableDefinition = {
    // (technical) name of the field to group by
    rowField: string;
    typeField: string;
    valueField: string;

    // optional mapping of field names to display names
    // e.g., { "prefix_name": "Name", "age": "Age" }
    displayNameMapping?: Record<string, string>;
};

// Define the data item Type

export type DataItem = Record<string, string | number | boolean | null | undefined>;

/**
 * Transforms raw data into a structured format based on the rowField specified in the table definition.
 * The function groups data by the specified rowField and transforms it into a table-friendly format.
 *
 * @param rawData - Array of raw data objects to be processed
 * @param tableDefinition - Configuration object that defines how to group and display the data
 * @returns Array of objects with rowField and other attributes as properties
 *
 * Features:
 * - Groups data by the specified rowField
 * - Supports custom display names through displayNameMapping
 * - Sorts the resulting data by rowField value

 */
export const prepareData = (rawData: DataItem[] | undefined, tableDefinition: TableDefinition): DataItem[] => {
    if (!rawData || rawData.length === 0) {
        return [];
    }

    const rowFieldName = tableDefinition.displayNameMapping?.[tableDefinition.rowField] ?? tableDefinition.rowField;

    const groupedData = new Map<string, DataItem>();
    const { typeField, valueField, rowField } = tableDefinition;

    rawData.forEach((item) => {
        const rowFieldValue = item[rowField] as string;
        const typeFieldValue = item[typeField] as string;
        const valueFieldValue = item[valueField];
        const displayName = tableDefinition.displayNameMapping?.[typeFieldValue] ?? typeFieldValue;
        const IdName = `${displayName}_Id`;
        const IdValue = item.Id as string;

        const existingData = groupedData.get(rowFieldValue) ?? { [rowFieldName]: rowFieldValue };
        groupedData.set(rowFieldValue, {
            ...existingData,
            [displayName]: valueFieldValue,
            [IdName]: IdValue,
        });
    });

    // Sort by Map keys (rowFields) and return the results as an array
    const sortedEntries = Array.from(groupedData.entries()).sort(([keyA], [keyB]) => keyA.localeCompare(keyB));
    return Array.from(new Map(sortedEntries).values());
};

export default prepareData;
