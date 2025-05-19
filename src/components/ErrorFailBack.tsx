import { Title1, Caption1, Button } from "@fluentui/react-components";
import type { FallbackProps } from "react-error-boundary";
import AppStyles from "../Styles";
import CstTxt from "../Cst";

// Error fallback component
function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
    const errorMessage = error instanceof Error ? error.message : CstTxt;
    const styles = AppStyles();

    return (
        <div className={styles.errorContainer}>
            <Title1>{CstTxt.ErrorTitle}</Title1>
            <Caption1>{errorMessage}</Caption1>
            <Button appearance="primary" onClick={resetErrorBoundary} style={{ marginTop: "16px" }}>
                {CstTxt.ErrorButton}
            </Button>
        </div>
    );
}

export default ErrorFallback;
