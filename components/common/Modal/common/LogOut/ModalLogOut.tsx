import { Button, Modal, Image } from 'antd'
import React from 'react'

interface ModalLogOutProps {
    open: boolean
    onCancel: () => void
    onConfirm: () => void
    message: string
}

export default function ModalLogOut({ open, onCancel, onConfirm, message }: ModalLogOutProps) {

    return (
        <>
            <Modal
                open={open}
                onCancel={onCancel}
                footer={null}
                centered={true}
                width={400}
                closable={false}
                className='modal-log-out'
            >
                <div
                    style={{
                        padding: "38px 32px",
                    }}
                >
                    <div className='flex flex-space-around'>
                        <Image
                            src="/img/dangsuat.png"
                            preview={false}
                            alt="logout"
                        />
                    </div>
                    <p
                        className='flex'
                        style={{
                            marginTop: "20px",
                            fontSize: "16px",
                            fontWeight: 400,
                            color: "#333333",
                            textAlign: "center",
                        }}
                    >{message}</p>
                    <div
                        className='flex flex-space-around'
                        style={{
                            marginTop: "28px",
                        }}
                    >
                        <Button
                            key="cancel"
                            onClick={onCancel}
                            size="large"
                            style={{
                                width: "135px",
                                borderRadius: "50px",
                                alignItems: "center",
                                color: "#4c5bd4",
                                backgroundColor: "white",
                                border: "1px solid #4c5bd4",
                                fontSize: "16px",
                                fontWeight: 600,
                            }}
                        >
                            Hủy
                        </Button>
                        <Button
                            key="confirm"
                            type="primary"
                            size="large"
                            onClick={onConfirm}
                            style={{
                                width: "135px",
                                borderRadius: "50px",
                                alignItems: "center",
                                color: "white",
                                backgroundColor: "#4c5bd4",
                                border: "1px solid #4c5bd4",
                                fontSize: "16px",
                                fontWeight: 600,
                            }}
                        >
                            Đồng ý
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    )
}
