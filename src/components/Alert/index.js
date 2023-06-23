import { Alert, Button } from 'antd'
import React, { memo } from 'react'
import useSavePatient from '../../modules/hooks/useSavePatient'
import { useStore } from '../../modules/store'
import { Box } from '@chakra-ui/react'

function AlertComponent() {

    const isUnsavedPatient = useStore((store) => store.isFieldsChange)
    const setIsFieldsChange = useStore((store) => store.setIsFieldsChange)
    const setIsUnsavedPatient = useStore((store) => store.setIsUnsavedPatient)


    const { handleSave, isLoading } = useSavePatient()

    const onClose = () => {
        setIsFieldsChange(false)
        setIsUnsavedPatient(false)
    }


    if (isUnsavedPatient) {
        return (
            <>
                <Alert
                    message={<Box color='red'>You have an unsaved patient!</Box>}
                    onClose={onClose}
                    action={
                        <Button
                            onClick={handleSave}
                            loading={isLoading}
                            size="small"
                            type='primary'
                        >
                            Save
                        </Button>
                    }
                    type="warning"
                    showIcon
                    closable
                />
            </>
        )
    }

    return ''
}

export default memo(AlertComponent)