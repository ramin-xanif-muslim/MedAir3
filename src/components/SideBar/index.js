import React, { memo, useState } from 'react'
import {
    UserOutlined,
    CalendarOutlined,
    FileSearchOutlined,
    ProfileOutlined,
    LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from 'antd';
import { Center, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorageStore, useStore } from '../../modules/store';
import { correctBreadcrumbItems } from '../../modules/functions';

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Calendar', 'calendar', <CalendarOutlined />),
    getItem('Search', 'search', <FileSearchOutlined />),
    getItem('Profile', 'profile', <ProfileOutlined />, [
        getItem('Person info', 'person_info'),
        getItem('Disease history', 'disease_history'),
        getItem('Visits', 'visits'),
        getItem('Analysis', 'analysis'),
        getItem('Treatment', 'treatment'),
    ]),
    getItem('Managers', 'managers', <UserOutlined />, [
        getItem('Reception locations', 'reception_locations'),
        getItem('Medications', 'medications'),
        getItem('Pathologists', 'pathologists'),
    ]),
    getItem('Log Out', 'logout', <LogoutOutlined />),
];


function SideBar() {

    const [collapsed, setCollapsed] = useState(false);

    const navigate = useNavigate()

    const setToken = useLocalStorageStore((store) => store.setToken)
    const setBreadcrumbItems = useStore((store) => store.setBreadcrumbItems)

    const logOut = () => {
        setToken(null)
        localStorage.clear()
        window.location.reload();
        navigate('/calendar')
    }

    const onSelect = (e) => {
        const { selectedKeys, keyPath } = e
        const navLink = selectedKeys[0]
        if (navLink === 'logout') {
            logOut()
            return
        }
        setBreadcrumbItems(correctBreadcrumbItems(keyPath))
        navigate(`/${navLink}`)
    }


    return (
        <Layout.Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
        >

            <Center>
                <Image
                    className='circle'
                    src='/images/MedAir.jpg'
                    alt='medAir'
                />
            </Center>

            <Menu
                onSelect={onSelect}
                theme="dark" mode="inline"
                items={items}

            />

        </Layout.Sider>
    )
}

export default memo(SideBar)