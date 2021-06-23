import React from 'react';
import { Card, CardBody } from 'reactstrap';
import moment from 'moment';

const MessageCard = ({ sender, item, currentUserid }) => {
  return (
    <>
      <div
        className={`messagebox mb-3 ${
          item.sender !== currentUserid ? 'left' : 'right'
        }`}
      >
        <div className="chat-avatar">
          {
            sender.avatar != null ? (
              <img
                alt={sender.name}
                src={`${sender.avatar}`}
                className="img-object-fit border-0 rounded-circle"
                width="40"
                height="40"
              />
            ): (
              <img
                alt={sender.name}
                src='/assets/img/avatar.png'
                className="img-object-fit border-0 rounded-circle"
                width="40"
                height="40"
              />
            )
          }
        </div>
        <div className="chat-bubble">
          <div className="msg-info">
            <div className="msg-info-name font-weight-semibold mr-2">{sender.name}</div>
            <div className="msg-info-time">{moment(item.date).fromNow()}</div>
          </div>
          <div className="msg-text">
            {item.text}
          </div>
          <p className="mb-0 text-semi-muted"></p>
        </div>
        {/* <div className="position-absolute  pt-1 pr-2 r-0">
          <span className="text-extra-small text-muted"></span>
        </div> */}
        {/* <CardBody>
          <div className="d-flex flex-row pb-1">        
            
            <div className=" d-flex flex-grow-1 min-width-zero">
              <div className="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                <div className="min-width-zero">
                  <p className="mb-0 truncate list-item-heading">
                    
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="chat-text-left">
            <p className="mb-0 text-semi-muted">{item.text}</p>
          </div>
        </CardBody> */}
      </div>
      <div className="clearfix" />
    </>
  );
};

export default React.memo(MessageCard);
