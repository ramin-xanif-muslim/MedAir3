import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    ModalFooter,
    Button,
} from "@chakra-ui/react";
import { useStore } from "../../../../modules/store";
import { useNavigate } from "react-router-dom";

const AlertModal = ({ handleSave, isLoading }) => {
    const {
        isOpenAlertModal,
        setIsOpenAlertModal,
        setIsFieldsChange,
        selectedNavLink,
    } = useStore((store) => ({
        isOpenAlertModal: store.isOpenAlertModal,
        setIsOpenAlertModal: store.setIsOpenAlertModal,
        setIsFieldsChange: store.setIsFieldsChange,
        selectedNavLink: store.selectedNavLink,
    }));

    const onClose = () => {
        setIsOpenAlertModal(false);
    };

    const onSave = () => {
        handleSave();
        onClose();
    };

    const navigate = useNavigate();

    const notSave = () => {
        setIsFieldsChange(false);
        navigate(`/${selectedNavLink}`);
        onClose();
    };

    return (
        <Modal isOpen={isOpenAlertModal} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader color="red.600">
                    You have an unsaved data!
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody fontSize="2xl">Do you want to save?</ModalBody>
                <ModalFooter
                    display="flex"
                    justifyContent="space-between"
                    gap="2"
                >
                    <Button
                        w="full"
                        onClick={onSave}
                        loading={isLoading}
                        colorScheme="blue"
                    >
                        Save
                    </Button>
                    <Button w="full" onClick={notSave} loading={isLoading}>
                        Don't Save
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default AlertModal;
