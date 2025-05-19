import AppStyles from "./Styles";
import { Spinner, Title1, Switch } from "@fluentui/react-components";
import { DataTable } from "./components/DataTable";
import getData from "./utils/GetData";
import { dummyTableDefinition } from "./data/dummyData";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import prepareData from "./utils/PrepareData";
import CstTxt from "./Cst";

function App() {
    const styles = AppStyles();
    const cacheIndex = "data-table"; // Unique key for the data resource (include record Guid)
    const { data, isLoading, error } = useQuery({
        queryKey: [cacheIndex],
        queryFn: getData,
    });

    const [isEditable, setIsEditable] = useState(false);

    if (error) throw error; // Error handling is done in the ErrorBoundary in main component
    const tableData = prepareData(data, dummyTableDefinition);

    return (
        <div className={styles.container}>
            <Title1>{CstTxt.AppTitle}</Title1>

            <Switch
                checked={isEditable}
                onChange={() => {
                    setIsEditable(!isEditable);
                }}
                label={isEditable ? "Editable Mode" : "Read-Only Mode"}
            />

            {isLoading ? (
                <div className={styles.spinner}>
                    <Spinner label={CstTxt.Loading} />
                </div>
            ) : (
                <DataTable data={tableData} isEditable={isEditable} />
            )}
        </div>
    );
}

export default App;
