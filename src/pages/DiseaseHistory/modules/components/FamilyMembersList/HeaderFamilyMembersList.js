import React, { memo, useState } from 'react'
import { familyMembersSelectOptions } from '../../../../../modules/consts'
import { Button, Form, Select, Space } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useDisclosure } from '@chakra-ui/react'
import { deepCopy } from '../../../../../modules/functions/deepCopy'
import ModalFamilyMemberForm from './ModalFamilyMemberForm'

function HeaderFamilyMembersList({ setList }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [selectedMember, setSelectedMember] = useState()

    const handleAdd = (memberData) => {
        const copyData = deepCopy(memberData)
        copyData.text = selectedMember
        setList(prev => [...prev, copyData])
        onClose()
    }

    const onSelect = (e) => {
        setSelectedMember(e)
    }

    const onClick = () => {
        onOpen()
    }



    return (
        <>
            <Form.Item labelAlign='left' label="Family members">
                <Space.Compact style={{ width: '100%' }}>
                    <Select
                        onSelect={onSelect}
                        allowClear
                        ref={finalRef}
                    >
                        {familyMembersSelectOptions.map(i => {
                            return (
                                <Select.Option value={i}>{i}</Select.Option>
                            )
                        })}
                    </Select>
                    <Button onClick={onClick}><PlusOutlined /></Button>
                </Space.Compact>
            </Form.Item>

            <ModalFamilyMemberForm
                isOpen={isOpen}
                onClose={onClose}
                initialRef={initialRef}
                finalRef={finalRef}
                title={selectedMember}
                handleFinish={handleAdd}
            />
        </>
    )
}

export default memo(HeaderFamilyMembersList)