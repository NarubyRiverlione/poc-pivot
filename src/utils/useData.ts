import { useQuery } from "@tanstack/react-query";
import prepareData, { type DataItem, type TableDefinition } from "./PrepareData";

/**
 * Custom hook to fetch and prepare data using React Query
 * @param queryKey Unique identifier for the query
 * @param fetchFn Function that fetches the data
 * @param tableDefinition Configuration for preparing the data
 */
export function useData(queryKey: string, fetchFn: () => Promise<DataItem[]>, tableDefinition: TableDefinition) {
    const { data, isLoading, error } = useQuery({
        queryKey: [queryKey],
        queryFn: fetchFn,
    });

    if (error) throw error;
    if (isLoading) return [];

    return prepareData(data ?? [], tableDefinition);
}

// Helper function remains unchanged
export function extractColumns(data: DataItem[]): {
    rowField: string;
    columns: string[];
} {
    if (data.length === 0) {
        return { rowField: "", columns: [] };
    }

    // Get all unique keys from all data objects
    const allKeys = new Set<string>();
    data.forEach((item) => {
        Object.keys(item).forEach((key) => allKeys.add(key));
    });

    // Find the rowField (usually "Name" based on implementation)
    const rowField =
        Object.keys(data[0]).find((key) => typeof data[0][key] === "string" && data.every((item) => key in item)) ?? "";

    // Filter out the rowField and _Id from columns
    const columns = Array.from(allKeys).filter((key) => key !== rowField && !key.endsWith("_Id"));

    return { rowField, columns };
}
