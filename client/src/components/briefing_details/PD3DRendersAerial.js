import React, { useRef, useState } from "react";
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
} from "reactstrap";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import { Colxx } from "../common/CustomBootstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { downloadFile } from "../../helpers/Utils";
import { bytesToSize } from "../../helpers/Utils";

const PD3DRendersAerial = ({
  service,
  orders,
  downloads,
  brief,
  backupNotes,
}) => {
  const [activeTab, setActiveTab] = useState("details");
  return (
    <>
      <Row className="chat-row">
        <Colxx md="12" sm="12">
          <h5 className="mb-4">3D Renders (Aerial Render)</h5>
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
                    <IntlMessages id="pages.client-files" />(
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
                          <p className="m-0 pt-3 pb-2">
                            <span className="text-theme-1 font-weight-bold">
                              <IntlMessages id="briefing.incorporate-environment" />
                            </span>
                          </p>
                          <p className="mb-3 pt-3 pb-2">
                            {brief.incorporateEnvironment && brief.incorporateEnvironment}
                          </p>
                          <p className="border-dotted-bottom"></p>
                        </Colxx>                     
                        <Colxx sm="12">
                          {brief.moodTimeOfDay && (
                            <>
                              <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                <span className="text-theme-1 font-weight-bold">
                                  <IntlMessages id="briefing.select-mood-time-of-day" />
                                </span>
                                <span className="ml-auto">
                                  {brief.moodTimeOfDay}
                                </span>
                              </p>
                            </>
                          )}
                        </Colxx>
                        <Colxx sm="12">
                          {brief.perspective && (
                            <>
                              <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                <span className="text-theme-1 font-weight-bold">
                                  <IntlMessages id="briefing.perspective" />
                                </span>
                                <span className="ml-auto">
                                  {brief.perspective}
                                </span>
                              </p>
                            </>
                          )}
                        </Colxx>
                        <Colxx sm="12">
                          {brief.height && (
                            <>
                              <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                <span className="text-theme-1 font-weight-bold">
                                  <IntlMessages id="briefing.height" />
                                </span>
                                <span className="ml-auto">
                                  {brief.height}
                                </span>
                              </p>
                            </>
                          )}
                        </Colxx>
                        <Colxx sm="12">
                          {brief.landscaping && (
                            <>
                              <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                <span className="text-theme-1 font-weight-bold">
                                  <IntlMessages id="briefing.landscaping" />
                                </span>
                                <span className="ml-auto">
                                  {brief.landscaping}
                                </span>
                              </p>
                            </>
                          )}
                        </Colxx>
                        <Colxx sm="12">
                          {brief.driveaway && (
                            <>
                              <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                <span className="text-theme-1 font-weight-bold">
                                  <IntlMessages id="briefing.driveway" />
                                </span>
                                <span className="ml-auto">
                                  {brief.driveaway}
                                </span>
                              </p>
                            </>
                          )}
                        </Colxx>
                        <Colxx sm="12">
                          {brief.vehicles && (
                            <>
                              <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                <span className="text-theme-1 font-weight-bold">
                                  <IntlMessages id="briefing.vehicles" />
                                </span>
                                <span className="ml-auto">
                                  {brief.vehicles}
                                </span>
                              </p>
                            </>
                          )}
                        </Colxx>
                        <Colxx sm="12">
                          {brief.fencing && (
                            <>
                              <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                <span className="text-theme-1 font-weight-bold">
                                  <IntlMessages id="briefing.fencing" />
                                </span>
                                <span className="ml-auto">
                                  {brief.fencing}
                                </span>
                              </p>
                            </>
                          )}
                        </Colxx>
                        <Colxx sm="12">
                          {brief.mailbox && (
                            <>
                              <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                <span className="text-theme-1 font-weight-bold">
                                  <IntlMessages id="briefing.mailbox" />
                                </span>
                                <span className="ml-auto">
                                  {brief.mailbox}
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
                        <Colxx sm="12">
                          {brief.isAppearRender && (
                            <>
                              <p className="m-0 pt-3 pb-2 d-flex align-items-center">
                                <span className="text-theme-1 font-weight-bold">
                                  Woud you like people to appear in the render?
                                </span>
                                <span className="ml-auto">
                                  {brief.isAppearRender}
                                </span>
                              </p>
                              <p className="pb-2 border-dotted-bottom">
                                {brief.appearRenderText && brief.appearRenderText}
                              </p>
                            </>
                          )}
                        </Colxx>
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

export default injectIntl(PD3DRendersAerial);
