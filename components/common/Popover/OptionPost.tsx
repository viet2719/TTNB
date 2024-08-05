import { ConfigProvider, Menu } from "antd";

import styles from "./OptionPost.module.css";

type MenuItem = {
    key: string;
    icon: JSX.Element;
    text: string;
};

interface OptionPostProps {
    menuItems: MenuItem[];
    onMenuItemClick: (key: string) => void;
}

function OptionPost({ menuItems, onMenuItemClick }: OptionPostProps) {

    const handleMenuItemClick = (item: MenuItem) => {
        onMenuItemClick(item.key);
    };
    return (
        <div className={`${styles.MenuOptionPost} MenuOptionPost`}>
            <ConfigProvider
                theme={{
                    components: {
                        Menu: {
                            darkItemBg: 'white',
                            darkItemSelectedBg: '#ccc',
                            darkItemHoverBg: '#ccc',
                            darkItemColor: 'black',
                            groupTitleColor: 'black',
                        },
                    },
                }}
            >
                <Menu
                    theme='dark'
                    className={`${styles.menuOption} menuOption`}
                >
                    {menuItems.map(item => (
                        <Menu.Item key={item.key} icon={item.icon} onClick={() => handleMenuItemClick(item)}>
                            <span className={styles.menuText}>{item.text}</span>
                        </Menu.Item>
                    ))}
                </Menu>
            </ConfigProvider>
        </div >
    );
}

export default OptionPost;