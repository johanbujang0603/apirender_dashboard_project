import React, { useRef, useState } from "react";
import { injectIntl } from "react-intl";
import { FileIcon, defaultStyles } from "react-file-icon";
import {
  Row,
  Card,
  CardBody,
  CardHeader,
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

const VRPoolConstructionCustomProject = ({
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
          <h5 className="mb-4">Virtual Pool Construction - Custom Project</h5>
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
                              Architectureal blueprints/CAD files.
                            </span>
                          </p>
                          <p className="mb-3 pt-3 pb-2">{ brief.architecturealBlueprints && brief.architecturealBlueprints }</p>
                          <Row>
                            {
                              downloads.map((download, index) => {
                                if (download.service_option == 'VR_POOL_CONSTRUCTION_CUSTOM_PROJECT_BLUE_PRINT') {
                                  return (
                                    <Colxx sm="3" md="2" key={index}>
                                      <p className="mx-auto mb-3" style={{width: '80px'}}>
                                        <FileIcon extension={download.extension.replace('.', '')} {...defaultStyles[download.extension.replace('.', '')]} />
                                      </p>
                                      <p className="text-center mb-1 text-truncate">
                                        <a href='#' onClick={(e) => downloadFile(download.key_name, download.original_name)}>
                                        {download.original_name}
                                        </a>
                                      </p>
                                      <p className="text-center">{bytesToSize(download.file_size)}</p>
                                    </Colxx>
                                  )
                              }})
                            }
                          </Row>
                          <p className="border-dotted-bottom"></p>
                        </Colxx>
                        <Colxx sm="12">
                          <p className="m-0 pb-5">
                            <span className="text-theme-1 font-weight-bold">
                              Image Files
                            </span>
                          </p>
                          <Row>
                            {downloads.map((download, index) => {
                              if (
                                download.service_option ==
                                "VR_POOL_CONSTRUCTION_CUSTOM_PROJECT_IMAGE_FILES"
                              ) {
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
                                          download.extension.replace(
                                            ".",
                                            ""
                                          )
                                        ]}
                                      />
                                    </p>
                                    <p className="text-center mb-1 text-truncate">
                                      <a
                                        href="#"
                                        onClick={(e) =>
                                          downloadFile(
                                            download.file_path,
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

export default injectIntl(VRPoolConstructionCustomProject);