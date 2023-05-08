import React, { memo, useState } from 'react'
import { List } from 'antd'
import { Box, Flex, IconButton, Spacer, useDisclosure } from '@chakra-ui/react'
import HeaderFamilyMembersList from './HeaderFamilyMembersList'
import ModalFamilyMemberForm from './ModalFamilyMemberForm'

function FamilyMembersList() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [list, setList] = useState([])
    const [selectedListItem, setSelectedListItem] = useState()

    const onClick = (item) => {
        setSelectedListItem(item)
        onOpen()
    }

    const handleEdit = () => {

    }

    return (
        <>

            <List
                size="small"
                header={<HeaderFamilyMembersList setList={setList} />}
                bordered
                dataSource={list}
                renderItem={(item, index) => {
                    return (
                        <Box
                            onClick={() => onClick(item)}
                            _hover={{ bg: 'pink.200' }}
                            cursor='pointer'
                        >
                            <List.Item>
                                <Flex w='100%'>
                                    <Box>{index + 1}. {item.text}</Box>
                                    <Spacer />
                                    <IconButton
                                        isRound
                                        variant='ghost'
                                        fontWeight='bold'
                                        size='xs'
                                    >
                                        <Box color='pink.500'>X</Box>
                                    </IconButton>
                                </Flex>
                            </List.Item>
                        </Box>
                    )
                }}
            />

            <ModalFamilyMemberForm
                isOpen={isOpen}
                onClose={onClose}
                initialRef={initialRef}
                finalRef={finalRef}
                title={selectedListItem?.text}
                handleFinish={handleEdit}
                initialValues={selectedListItem}
            />

        </>
    )
}

export default memo(FamilyMembersList)