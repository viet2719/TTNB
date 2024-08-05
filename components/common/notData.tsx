import { Typography } from "antd";
const { Text } = Typography;

export default function NotData() {
    return (
        <Text
            style={{
                background: "#FFFFFF",
                display: "block",
                fontStyle: "italic",
                boxShadow: "0px 3px 6px rgb(0 0 0 / 10%)",
                borderRadius: "10px",
                width: "100%",
                padding: " 15px 20px",
            }}
        >
            Không có dữ liệu nào!
        </Text>
    );
}
