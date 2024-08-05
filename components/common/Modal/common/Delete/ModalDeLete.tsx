import { Button, Modal } from 'antd'
import { title } from 'process'
import React from 'react'

interface ModalDeLeteProps {
    open: boolean
    onCancel: () => void
    onOk: () => void
    message: string
    title: string
    desc: string
}
export default function ModalDeLete({ open, onCancel, onOk, message, title, desc }: ModalDeLeteProps) {
    return (
        <>
            <Modal
                title={title}
                open={open}
                onCancel={onCancel}
                footer={null}
                centered={true}
                closable={false}
                width={400}
                className='modal-delete'
            >
                <div
                    className='flex flex-align-center'
                    style={{
                        flexDirection: 'column',
                        padding: "8px 32px",
                    }}
                >
                    <p
                        className='flex'
                        style={{
                            marginTop: "20px",
                            fontSize: "16px",
                            fontWeight: 700,
                            color: "#333333",
                            textAlign: "center",
                        }}
                    >{message}</p>
                    <p
                        className='flex'
                        style={{
                            marginTop: "20px",
                            fontSize: "16px",
                            fontWeight: 400,
                            color: "#333333",
                            textAlign: "center",
                        }}
                    >{desc}</p>
                </div>

                <div
                    className='flex flex-space-around'
                    style={{
                        marginTop: "28px",
                        paddingBottom: "20px",
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
                        onClick={onOk}
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
                        Xóa
                    </Button>
                </div>
            </Modal>
        </>
    )
}
