import { Alert } from "antd";
import React, { memo } from "react";
import { useStore } from "../../modules/store";
import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

function AlertComponent() {
    const isFieldsChange = useStore((store) => store.isFieldsChange);
    const setIsFieldsChange = useStore((store) => store.setIsFieldsChange);


    const onClose = () => {
        setIsFieldsChange(false);
    };

    const location = useLocation();
    const pathname = location?.pathname.slice(1);

    if (isFieldsChange && pathname !== "profile") {
        return (
            <>
                <Alert
                    message={
                        <Box color="red">You have an unsaved patient!</Box>
                    }
                    onClose={onClose}
                    // action={
                    //     <Button
                    //         onClick={handleSave}
                    //         loading={isLoading}
                    //         size="small"
                    //         type="primary"
                    //     >
                    //         Save
                    //     </Button>
                    // }
                    type="warning"
                    showIcon
                    closable
                />
            </>
        );
    }

    return "";
}

export default memo(AlertComponent);
