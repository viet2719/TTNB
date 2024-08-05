import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

import styles from './Search.module.css';
interface SearchProps {
    onMobileSearchClick: () => void;
}

function Search({ onMobileSearchClick }: SearchProps) {
    return (
        <div className={styles.search_container}>
            <div className={styles.search}>
                <Input
                    className={styles.inputSearch}
                    placeholder="Tìm kiếm bài viết "
                    size="large"
                    bordered={false}
                    suffix={<SearchOutlined style={{
                        cursor: 'pointer',
                        width: '20px',
                    }} rev={undefined} />}
                />
            </div>
            <div className={styles.iconSearchMobile} onClick={onMobileSearchClick}>
                <SearchOutlined
                    style={{
                        cursor: 'pointer',
                        width: '30px',
                        height: '30px',
                    }}
                    rev={undefined}
                    className={styles.iconSearch}
                />
            </div>
        </div>
    );
}

export default Search;