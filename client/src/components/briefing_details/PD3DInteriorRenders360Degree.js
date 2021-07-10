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

const PD3DInteriorRenders360Degree = ({
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
          <h5 className="mb-4">3D Interior Renders (360 Degree)</h5>
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
                          <span className="text-theme-3">
                            Residential
                          </span>
                        </Colxx>   
                        <Colxx sm="12">
                          {brief.residentialMoodTimeOfDay && (
                            <>
                              <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                <span className="text-theme-1 font-weight-bold">
                                  <IntlMessages id="briefing.select-mood-time-of-day" />
                                </span>
                                <span className="ml-auto">
                                  {brief.residentialMoodTimeOfDay}
                                </span>
                              </p>
                            </>
                          )}
                        </Colxx>
                        <Colxx sm="12">
                          {brief.residentialLandscaping && (
                            <>
                              <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                <span className="text-theme-1 font-weight-bold">
                                  <IntlMessages id="briefing.landscaping" />
                                </span>
                                <span className="ml-auto">
                                  {brief.residentialLandscaping}
                                </span>
                              </p>
                            </>
                          )}
                        </Colxx>
                        <Colxx sm="12">
                          {brief.residentialDriveaway && (
                            <>
                              <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                <span className="text-theme-1 font-weight-bold">
                                  <IntlMessages id="briefing.driveway" />
                                </span>
                                <span className="ml-auto">
                                  {brief.residentialDriveaway}
                                </span>
                              </p>
                            </>
                          )}
                        </Colxx>
                        <Colxx sm="12">
                          {brief.residentialVehicles && (
                            <>
                              <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                <span className="text-theme-1 font-weight-bold">
                                  <IntlMessages id="briefing.vehicles" />
                                </span>
                                <span className="ml-auto">
                                  {brief.residentialVehicles}
                                </span>
                              </p>
                            </>
                          )}
                        </Colxx>
                        <Colxx sm="12">
                          {brief.residentialFencing && (
                            <>
                              <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                <span className="text-theme-1 font-weight-bold">
                                  <IntlMessages id="briefing.fencing" />
                                </span>
                                <span className="ml-auto">
                                  {brief.residentialFencing}
                                </span>
                              </p>
                            </>
                          )}
                        </Colxx>
                        <Colxx sm="12">
                          {brief.residentialMailbox && (
                            <>
                              <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                <span className="text-theme-1 font-weight-bold">
                                  <IntlMessages id="briefing.mailbox" />
                                </span>
                                <span className="ml-auto">
                                  {brief.residentialMailbox}
                                </span>
                              </p>
                            </>
                          )}
                        </Colxx>
                        
                        <Colxx sm="12">
                          <span className="text-theme-3">
                            Commercial
                          </span>
                        </Colxx>   
                        <Colxx sm="12">
                          {brief.commercialMoodTimeOfDay && (
                            <>
                              <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                <span className="text-theme-1 font-weight-bold">
                                  <IntlMessages id="briefing.select-mood-time-of-day" />
                                </span>
                                <span className="ml-auto">
                                  {brief.commercialMoodTimeOfDay}
                                </span>
                              </p>
                            </>
                          )}
                        </Colxx>
                        <Colxx sm="12">
                          {brief.commercialLandscaping && (
                            <>
                              <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                <span className="text-theme-1 font-weight-bold">
                                  <IntlMessages id="briefing.landscaping" />
                                </span>
                                <span className="ml-auto">
                                  {brief.commercialLandscaping}
                                </span>
                              </p>
                            </>
                          )}
                        </Colxx>
                        <Colxx sm="12">
                          {brief.commercialDriveaway && (
                            <>
                              <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                <span className="text-theme-1 font-weight-bold">
                                  <IntlMessages id="briefing.driveway" />
                                </span>
                                <span className="ml-auto">
                                  {brief.commercialDriveaway}
                                </span>
                              </p>
                            </>
                          )}
                        </Colxx>
                        <Colxx sm="12">
                          {brief.commercialVehicles && (
                            <>
                              <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                <span className="text-theme-1 font-weight-bold">
                                  <IntlMessages id="briefing.vehicles" />
                                </span>
                                <span className="ml-auto">
                                  {brief.commercialVehicles}
                                </span>
                              </p>
                            </>
                          )}
                        </Colxx>
                        <Colxx sm="12">
                          {brief.commercialFencing && (
                            <>
                              <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                <span className="text-theme-1 font-weight-bold">
                                  <IntlMessages id="briefing.fencing" />
                                </span>
                                <span className="ml-auto">
                                  {brief.commercialFencing}
                                </span>
                              </p>
                            </>
                          )}
                        </Colxx>
                        <Colxx sm="12">
                          {brief.commercialMailbox && (
                            <>
                              <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                <span className="text-theme-1 font-weight-bold">
                                  <IntlMessages id="briefing.mailbox" />
                                </span>
                                <span className="ml-auto">
                                  {brief.commercialMailbox}
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
                        <Colxx sm="12">
                          <Label className="text-primary">COMMERCIAL FILES:</Label>
                        </Colxx>
                        {downloads.map((download, index) => {
                          if (download.service_option == "COMMERCIAL_FILES") {
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

export default injectIntl(PD3DInteriorRenders360Degree);