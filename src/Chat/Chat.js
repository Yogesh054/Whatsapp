import React, { useState } from "react";
import {CheckOutlined} from '@ant-design/icons';
import {DoubleRightOutlined } from '@ant-design/icons';
import "../App.css";


const Chat = () => {
    const [input, setinput] = useState("");
    const [msg, setmsg] = useState([]);

    const onSendClick = () => {
        setmsg([
            ...msg,
            { Text: input, Date: new Date().getHours(),Time:new Date().getMinutes() },
        ]);
        setinput("");
    };

    const onMessageInputChange = (event) => {
        setinput(event.target.value);
    };

    return (
        <div className="contact-chat">
            <div className="message-content">
                {msg.map((message) => {
                    const { Text, Date,Time } = message;
                    return (
                        <div className="section">
                            <div className="Text">{Text}</div>
                            <div className="Date">{Date}:{Time} <CheckOutlined  style={{color:"black", position:"relative", left:"10px",fontSize:"12px"}} /><CheckOutlined  style={{color:"black", position:"relative",fontSize:"12px",left:"3px"}} /></div>
                        </div>
                    );
                })}
            </div>

            <div className="typing-area">
               
                <input
                    className="message-ip"
                    value={input}
                    onChange={onMessageInputChange}
                ></input>
                <button  className="button" onClick={onSendClick}>
                <DoubleRightOutlined />
                </button>
            </div>
        </div>
    );
};

export default Chat;