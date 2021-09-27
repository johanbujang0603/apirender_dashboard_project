import React, { useRef, useState, useEffect } from "react";
import { injectIntl } from "react-intl";
import { FileIcon, defaultStyles } from "react-file-icon";
import {
  Row,
  Card,
  CardBody,
  CardHeader,
  FormGroup,
  Label,
  Nav,
  NavItem,
  TabContent,
  TabPane,
  Col,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import { Colxx } from "../common/CustomBootstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { downloadFile } from "../../helpers/Utils";
import { bytesToSize } from "../../helpers/Utils";

const PDInteriorRenders = ({
  service,
  orders,
  downloads,
  brief,
  backupNotes,
  clientView
}) => {
  const [activeTab, setActiveTab] = useState("details");
  const [residentialQty, setResidentialQty] = useState(null);
  const [commercialQty, setCommercialQty] = useState(null);

  useEffect(() => {
    let x = orders.find((o) => o.value === "PD_INTERIOR_RENDERS_RESIDENTIAL");
    if (x !== undefined) {
      let items = [];
      for (let i = 0; i < x.quantity; i++) items.push(i);
      setResidentialQty(items);
    }
    let y = orders.find((o) => o.value === "PD_INTERIOR_RENDERS_COMMERCIAL");
    if (y !== undefined) {
      let items = [];
      for (let i = 0; i < y.quantity; i++) items.push(i);
      setCommercialQty(items);
    }
  }, []);
  return (
    <>
      <Row className="chat-row">
        <Colxx md="12" sm="12">
          <h5 className="mb-2">Interior Renders</h5>
          <p className="text-danger mb-3 text-small">({orders.map((order) => order.name).join(', ')})</p>
          <Card className="mb-4">
            <CardHeader>
              <Nav tabs className="card-header-tabs">
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: activeTab === "details",
                      "nav-link": true,
                    })}
                    onClick={() => setActiveTab("details")}
                    to="#"
                    location={{}}
                  >
                    <IntlMessages id="pages.details-title" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: activeTab === "downloads",
                      "nav-link": true,
                    })}
                    onClick={() => setActiveTab("downloads")}
                    to="#"
                    location={{}}
                  >
                    { clientView === true ? 'Your Files' : 'Client Files' }(
                    {
                      downloads.filter(function (item) {
                        return item.service_option == "basic";
                      }).length
                    }
                    )
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: activeTab === "backups",
                      "nav-link": true,
                    })}
                    onClick={() => setActiveTab("backups")}
                    to="#"
                    location={{}}
                  >
                    <IntlMessages id="pages.admin-files" />(
                    {
                      downloads.filter(function (item) {
                        return item.service_option == "backup_files";
                      }).length
                    }
                    )
                  </NavLink>
                </NavItem>
              </Nav>
            </CardHeader>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="details">
                <Row>
                  <Colxx sm="12">
                    <CardBody>
                      <Row>
                        <Colxx sm="12">
                          {brief.moodTimeOfDay && (
                            <>
                              <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                <span className="text-theme-1 font-weight-bold">
                                  Mood / Time of Day
                                </span>
                                <span className="ml-auto">
                                  {brief.moodTimeOfDay}
                                </span>
                              </p>
                            </>
                          )}
                        </Colxx>
                        <Colxx sm="12">
                          {brief.fileOutputSize && (
                            <>
                              <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                <span className="text-theme-1 font-weight-bold">
                                  <IntlMessages id="briefing.file-output-size" />
                                </span>
                                <span className="ml-auto">
                                  {brief.fileOutputSize}
                                </span>
                              </p>
                            </>
                          )}
                        </Colxx>
                        <Colxx sm="12">
                          {brief.additionalInformation && (
                            <>
                              <p className="m-0 pt-3 pb-2">
                                <span className="text-theme-1 font-weight-bold">
                                  <IntlMessages id="briefing.additional-information" />
                                </span>
                              </p>
                              <p className="border-dotted-bottom pb-2 m-0">
                                {brief.additionalInformation}
                              </p>
                            </>
                          )}
                        </Colxx>
                        {commercialQty && (
                          <>
                            <Colxx sm="12">
                              <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                <span className="text-danger font-weight-bold">
                                  Commercial
                                </span>
                              </p>
                            </Colxx>
                            <Colxx sm="12">
                              <p className="m-0 pt-3 pb-2">
                                <span className="text-theme-1 font-weight-bold">
                                  <IntlMessages id="briefing.furniture-style" />
                                </span>
                              </p>
                              <p className="mb-3 pt-3 pb-2">
                                {brief.commercialFurniturestyleText &&
                                  brief.commercialFurniturestyleText}
                              </p>
                              <p className="border-dotted-bottom"></p>
                            </Colxx>
                            {commercialQty.map((qty, index) => {
                              if (brief[`commercialRoomType${index}`]) {
                                return (
                                  <Colxx sm="12" key={index}>
                                    <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                      <span className="text-theme-1 font-weight-bold">
                                        Room or Space Type ({index + 1})
                                      </span>
                                      <span className="ml-auto">
                                        {brief[`commercialRoomType${index}`]}
                                      </span>
                                    </p>
                                  </Colxx>
                                );
                              }
                            })}
                          </>
                        )}
                        {residentialQty && (
                          <>
                            <Colxx sm="12">
                              <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                <span className="text-danger font-weight-bold">
                                  Residential
                                </span>
                              </p>
                            </Colxx>
                            {residentialQty.map((qty, index) => {
                              if (
                                brief[`residentialRoomType${index}`] ||
                                brief[`residentialDesignStyle${index}`]
                              ) {
                                return (
                                  <Colxx sm="12" key={index}>
                                    <Row>
                                      <Colxx sm="12">
                                        <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                          <span className="text-theme-1 font-weight-bold">
                                            Room or Space Type ({index + 1})
                                          </span>
                                          <span className="ml-auto">
                                            {
                                              brief[
                                                `residentialRoomType${index}`
                                              ]
                                            }
                                          </span>
                                        </p>
                                      </Colxx>
                                      <Colxx sm="12">
                                        <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                          <span className="text-theme-1 font-weight-bold">
                                            Furniture Style ({index + 1})
                                          </span>
                                          <span className="ml-auto">
                                            {
                                              brief[
                                                `residentialDesignStyle${index}`
                                              ]
                                            }
                                          </span>
                                        </p>
                                      </Colxx>
                                    </Row>
                                  </Colxx>
                                );
                              }
                            })}
                          </>
                        )}
                      </Row>
                    </CardBody>
                  </Colxx>
                </Row>
              </TabPane>
              <TabPane tabId="downloads">
                <Row>
                  <Colxx sm="12">
                    <CardBody>
                      <Row>
                        {downloads.map((download, index) => {
                          if (download.service_option == "basic") {
                            return (
                              <Colxx sm="3" md="2" key={index}>
                                <p
                                  className="mx-auto mb-3"
                                  style={{ width: "80px" }}
                                >
                                  <FileIcon
                                    extension={download.extension.replace(
                                      ".",
                                      ""
                                    )}
                                    {...defaultStyles[
                                      download.extension.replace(".", "")
                                    ]}
                                  />
                                </p>
                                <p className="text-center mb-1 text-truncate">
                                  <a
                                    href="#"
                                    onClick={(e) =>
                                      downloadFile(
                                        download.key_name,
                                        download.original_name
                                      )
                                    }
                                  >
                                    {download.original_name}
                                  </a>
                                </p>
                                <p className="text-center">
                                  {bytesToSize(download.file_size)}
                                </p>
                              </Colxx>
                            );
                          }
                        })}
                      </Row>
                      <Row>
                        {
                          brief.additionalFileLink && (
                            <Colxx sm="12">
                              <span className="text-danger font-weight-bold">File Link:</span>&nbsp;
                              <a className="text-primary" href={brief.additionalFileLink} target="_blank">{brief.additionalFileLink}</a>
                            </Colxx>
                          )
                        }
                      </Row>
                    </CardBody>
                  </Colxx>
                </Row>
              </TabPane>
              <TabPane tabId="backups">
                <Row>
                  <Colxx sm="12">
                    <CardBody>
                      <Row>
                        <Colxx sm="12">
                          <p className="m-0 pt-3 pb-2 d-flex align-items-center text-theme-1 font-weight-bold">
                            <IntlMessages id="briefing.backup-notes" />
                          </p>
                          <p className="mb-5">{backupNotes}</p>
                        </Colxx>
                      </Row>
                      <Row>
                        {downloads.map((download, index) => {
                          if (download.service_option == "backup_files") {
                            return (
                              <Colxx sm="3" md="2" key={index}>
                                <p
                                  className="mx-auto mb-3"
                                  style={{ width: "80px" }}
                                >
                                  <FileIcon
                                    extension={download.extension.replace(
                                      ".",
                                      ""
                                    )}
                                    {...defaultStyles[
                                      download.extension.replace(".", "")
                                    ]}
                                  />
                                </p>
                                <p className="text-center mb-1 text-truncate">
                                  <a
                                    href="#"
                                    onClick={(e) =>
                                      downloadFile(
                                        download.key_name,
                                        download.original_name
                                      )
                                    }
                                  >
                                    {download.original_name}
                                  </a>
                                </p>
                                <p className="text-center">
                                  {bytesToSize(download.file_size)}
                                </p>
                              </Colxx>
                            );
                          }
                        })}
                      </Row>
                    </CardBody>
                  </Colxx>
                </Row>
              </TabPane>
            </TabContent>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

export default injectIntl(PDInteriorRenders);
