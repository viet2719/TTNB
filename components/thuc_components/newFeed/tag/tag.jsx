import React, { useState } from "react";
import { Modal, Button, Image, Input } from "antd";
import styles from "./tag.module.css";
import { SearchOutlined } from "@ant-design/icons";

const friendsData = [
   { id: 1, name: "Thức Đẹp trai 1", imageUrl: "/img/c.png" },
   { id: 2, name: "Thức Đẹp trai 2", imageUrl: "/img/c.png" },
   { id: 3, name: "Thức Đẹp trai 3", imageUrl: "/img/c.png" },
   { id: 4, name: "Thức Đẹp trai 4", imageUrl: "/img/c.png" },
   { id: 5, name: "Thức Đẹp trai 5", imageUrl: "/img/c.png" },
   { id: 6, name: "Thức Đẹp trai 6", imageUrl: "/img/c.png" },
   { id: 7, name: "Thức Đẹp trai 7", imageUrl: "/img/c.png" },
   { id: 8, name: "Thức Đẹp trai 8", imageUrl: "/img/c.png" },
   { id: 9, name: "Thức Đẹp trai 9", imageUrl: "/img/c.png" },
   { id: 10, name: "Thức Đẹp trai 10", imageUrl: "/img/c.png" },
   { id: 12, name: "Thức Đẹp trai 11", imageUrl: "/img/c.png" },
   { id: 13, name: "Thức Đẹp trai 12", imageUrl: "/img/c.png" },
];

const Tags = ({ isOpen, onClose }) => {
   const [selectedFriends, setSelectedFriends] = useState([]);
   const [searchText, setSearchText] = useState("");

   const filteredFriends = friendsData.filter((friend) => friend.name.toLowerCase().includes(searchText?.toLowerCase()));

   const handleFriendSelect = (friend) => {
      const isFriendSelected = selectedFriends.some((selectedFriend) => selectedFriend.id === friend.id);

      if (isFriendSelected) {
         setSelectedFriends(selectedFriends.filter((item) => item.id !== friend.id));
      } else {
         setSelectedFriends([...selectedFriends, friend]);
      }
   };

   const handleFriendDeselect = (friend) => {
      setSelectedFriends(selectedFriends.filter((item) => item.id !== friend.id));
   };
   const handleModalClose = () => {
      setSelectedFriends([]);
      onClose();
   };
   return (
      <Modal title="Gắn thẻ bạn bè" open={isOpen} onCancel={handleModalClose} footer={null} className={`${styles.modal} modal__tag`}>
         <div className={styles.modal__container}>
            <div className={styles.modal__body}>
               <div className={styles.modal__content}>
                  <div className={styles.search}>
                     <Input
                        placeholder="Nhập tên bạn bè"
                        className={styles.modal__input}
                        bordered={false}
                        suffix={<SearchOutlined rev={undefined} />}
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                     />
                     <span className={styles.btn__submit} onClick={handleModalClose}>
                        Xong
                     </span>
                  </div>

                  <div className={styles.modal__list}>
                     {filteredFriends.map((friend) => (
                        <div
                           key={friend.id}
                           className={`${styles.modal__item} ${selectedFriends.some((selectedFriend) => selectedFriend.id === friend.id) ? styles.selected__item__active : ""}`}
                           onClick={() => handleFriendSelect(friend)}>
                           <Image src={friend.imageUrl} alt={friend.name} preview={false} width={40} height={40} className={styles.modal__img} />
                           <p className={`${styles.modal__name} ${selectedFriends.some((selectedFriend) => selectedFriend.id === friend.id) ? styles.modal__name__active : ""}`}>{friend.name}</p>
                        </div>
                     ))}
                  </div>

                  <div className={styles.selected}>
                     <div className={styles.selected__title}>Đã gắn thẻ</div>
                     {selectedFriends.map((friend) => (
                        <div key={friend.id} className={styles.selected__item}>
                           <Image src={friend.imageUrl} alt={friend.name} preview={false} width={30} height={30} className={styles.modal__img} />
                           <p className={styles.modal__name}>{friend.name}</p>
                           <p className={styles.selected__close} onClick={() => handleFriendDeselect(friend)}>
                              <Image src="/img/img-home/xoa_user.svg" alt="" preview={false} />
                           </p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </Modal>
   );
};

export default Tags;
