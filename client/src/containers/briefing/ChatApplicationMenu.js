import React, {useState, useRef, useEffect} from 'react';
import { connect } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Nav, CardHeader, NavItem, Button } from 'reactstrap';
import { FileIcon, defaultStyles } from 'react-file-icon';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import IntlMessages from '../../helpers/IntlMessages';
import ChatSidebar from '../../components/common/ChatSidebar';
import MessageCard from '../../components/common/MessageCard';
import SaySomething from '../../components/common/SaySomething';
import { downloadFile, bytesToSize } from '../../helpers/Utils';
import classnames from 'classnames';

const ChatApplicationMenu = ({
  intl,
  match,
  loginUser
}) => {
  const [messageInput, setMessageInput] = useState('');
  const [conversations, setConversations] = useState([]);
  const [attachments, setAttachments] = useState([]);
  const [activeTab, setActiveTab] = useState('messages');
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const scrollBarRef = useRef(null);
  const fileUploadRef = useRef();

  useEffect(() => {
    fetchConversations();
    fetchAttachments();
  }, []);

  const fetchConversations = () => {
    const data = {
      user_id: loginUser._id,
      service_id: match.params.id,
    }
    axios
      .post(
        `/api/chat/conversations`
      , data)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setConversations(data);
        focusScrollBottom();
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  const fetchAttachments = () => {
    const data = {
      service_id: match.params.id,
    }
    axios
      .post(
        `/api/chat/attachments`
      , data)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setAttachments(data);
        // focusScrollBottom();
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  const focusScrollBottom = () => {
    setTimeout(() => {
      if (scrollBarRef.current) {
        scrollBarRef.current._ps.element.scrollTop =
          scrollBarRef.current._ps.contentHeight;
      }
    }, 100);
  };

  const handleChatInputPress = (e) => {
    if (e.key === 'Enter') {
      if (messageInput.length > 0) {
        sendMessage();
        setMessageInput('');
        focusScrollBottom();
      }
    }
  };

  const handleSendButtonClick = () => {
    if (messageInput.length > 0) {
      sendMessage();
      setMessageInput('');
      focusScrollBottom();
    }
  };

  const handleUploadFile = () => {
    fileUploadRef.current.click();
  }

  const onChangeFile = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const file = event.target.files[0];    
    const formData = new FormData();
    formData.append('file', file); // appending file
    formData.append('user_id', loginUser._id);
    formData.append('service_id', match.params.id);
    setUploading(true);
    axios.post('/api/chat/upload-file', formData, {
        onUploadProgress: (ProgressEvent) => {
            let progress = Math.round(
            ProgressEvent.loaded / ProgressEvent.total * 100);
            setProgress(progress);
        }
    }).then(res => {
      setProgress(0);
      setUploading(false);
      fetchAttachments();
    }).catch(err => console.log(err))
  }

  const toggleAppMenu = (tab) => {
    setActiveTab(tab);
  }
  
  const toggleMenu = (tab) => {
    if (activeTab !== tab) {
      toggleAppMenu(tab);
    }
  };

  const sendMessage = () => {
    const data = {
      message: messageInput,
      sender_id: loginUser._id,
      service_id: match.params.id,
    };
    axios
    .post(
      `/api/chat/send-message`
    , data)
    .then((res) => {
      return res.data;
    })
    .then((data) => {
      fetchConversations()
    })
    .catch((error) => {
    });
  }
    
  const { messages } = intl;

  return (
    <ChatSidebar>
      <CardHeader className="pl-0 pr-0 mb-5">
        <Nav tabs className="card-header-tabs ml-0 mr-0">
          <NavItem className="w-50 text-center">
            <NavLink
              to="#"
              location={{}}
              className={classnames({
                active: activeTab === 'messages',
                'nav-link': true,
              })}
              onClick={() => toggleMenu('messages')}
            >
              <IntlMessages id="chat.messages" />
            </NavLink>
          </NavItem>
          <NavItem className="w-50 text-center">
            <NavLink
              to="#"
              location={{}}
              className={classnames({
                active: activeTab === 'attachments',
                'nav-link': true,
              })}
              onClick={() => toggleAppMenu('attachments')}
            >
              <IntlMessages id="chat.attachments" />
            </NavLink>
          </NavItem>
        </Nav>
      </CardHeader>
      
      <div style={{height: "calc(100vh - 280px)"}}>
        <PerfectScrollbar
          options={{ suppressScrollX: true, wheelPropagation: false }}
          ref={scrollBarRef}
        >
          {
            activeTab==='messages' ? (
              conversations && conversations.map((conversation, index) => {
                let currentUserid = loginUser._id;
                let sender = conversation.sender_details[0];
                return (
                  <MessageCard
                    key={index}
                    sender={sender}
                    item={conversation}
                    currentUserid={currentUserid}
                  />
                )
              })
            ) : (
              <>
              {
                uploading ? (
                  <CircularProgressbar value={progress} text={`${progress}%`} />
                ) : (

                  <ul className="list-unstyled mb-2">
                    {
                      attachments && attachments.map((attach, index) => {
                          return (
                            <li className="p-2 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center" key={index}>
                              <p className="w-10 text-center">
                                <FileIcon extension={attach.extension.replace('.', '')} {...defaultStyles[attach.extension.replace('.', '')]} />
                              </p>
                              <p className="w-50 text-center">
                                <a href='#' onClick={(e) => downloadFile(attach.key_name, attach.original_name)}>
                                {attach.original_name}
                                </a>
                              </p>
                              <p className="w-20 text-center">{attach.owner_details[0].first_name + ' ' + attach.owner_details[0].last_name}</p>
                              <p className="w-20 text-center">{bytesToSize(attach.file_size)}</p>
                            </li>
                          )
                      })
                    }
                  </ul>
                )
              }
              </>
            ) 
          }
        </PerfectScrollbar>
      </div>
      {
        activeTab==='messages' ? (
        <SaySomething
          placeholder={messages['chat.saysomething']}
          messageInput={messageInput}
          handleChatInputPress={handleChatInputPress}
          handleChatInputChange={(e) => {
            setMessageInput(e.target.value);
          }}
          handleSendButtonClick={handleSendButtonClick}
        />) : (
          <>
            <div className="chat-input-container d-flex justify-content-center align-items-center pr-3" style={{background: "None"}}>
              <input type="file" id="file" ref={fileUploadRef} style={{display: "none"}} onChange={(e) => onChangeFile(e)}/>
              
              <Button
                color="primary"
                className={`w-100 btn-shadow btn-multiple-state ${
                  uploading ? 'show-spinner' : ''
                }`}
                size="lg"
                onClick={handleUploadFile}
              >
                <span className="spinner d-inline-block">
                  <span className="bounce1" />
                  <span className="bounce2" />
                  <span className="bounce3" />
                </span>
                <span className="label">
                  <IntlMessages id="chat.upload-file" />
                </span>
              </Button>
            </div>
          </>
        )
      }
    </ChatSidebar>
  );
};

const mapStateToProps = ({ authUser }) => {
  const loginUser = authUser.user;
  return {
    loginUser
  };
};

export default connect(mapStateToProps, {
})(ChatApplicationMenu);

