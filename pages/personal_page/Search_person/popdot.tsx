import { Button, Popover } from "antd";
import { useState } from "react";
import Image from "next/image";
const Popdot: React.FC = () => {
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const text = (
    <span>
      <a onClick={hide} style={{ display: "flex", gap: 10, padding: 10 }}>
        <Image width={16} height={20} alt="anh-loi" src={"/ep_post_save.svg"} />
        Lưu bài viết
      </a>
    </span>
  );

  return (
    <Popover placement="left" title={text} trigger="click">
      <Image width={21} height={22} alt="aa" src={"/img/ba-cham.svg"} />
    </Popover>
  );
};

export default Popdot;
