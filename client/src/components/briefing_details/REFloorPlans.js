import React, { useRef, useState, useEffect } from "react";
import { injectIntl } from "react-intl";
import { FileIcon, defaultStyles } from 'react-file-icon';
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
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { Colxx } from "../common/CustomBootstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { downloadFile } from '../../helpers/Utils';
import {bytesToSize} from '../../helpers/Utils';

const REFloorPlans = ({ service, orders, downloads, brief, backupNotes, clientView }) => {
  const [activeTab, setActiveTab] = useState('details');
  const [planStyles, setPlanStyles] = useState([]);
  useEffect(() => {
    let plans = [];
    orders.map((order) => {
      if (order.value.includes("RE_FLOOR_PLANS_STYLE"))
        plans.push(order);
    })
    setPlanStyles(plans);
  }, [])
  return (
    <>
      <Row className="chat-row">
        <Colxx md="12" sm="12">
          <h5 className="mb-2">Floor Plans</h5>
          <p className="text-danger mb-3 text-small">({orders.map((order) => order.name).join(', ')})</p>
          <Card className="mb-4">
            <CardHeader>
              <Nav tabs className="card-header-tabs">
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: activeTab === 'details',
                        'nav-link': true,
                      })}
                      onClick={() => setActiveTab('details')}
                      to="#"
                      location={{}}
                    >
                      <IntlMessages id="pages.details-title" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: activeTab === 'downloads',
                        'nav-link': true,
                      })}
                      onClick={() => setActiveTab('downloads')}
                      to="#"
                      location={{}}
                    >
                      { clientView === true ? 'Your Files' : 'Client Files' }
                      ({
                        downloads.filter(function(item) {
                          return item.service_option !== 'backup_files';
                        }).length
                      })
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: activeTab === 'backups',
                        'nav-link': true,
                      })}
                      onClick={() => setActiveTab('backups')}
                      to="#"
                      location={{}}
                    >
                      <IntlMessages id="pages.admin-files" />
                      ({
                        downloads.filter(function(item) {
                          return item.service_option === 'backup_files';
                        }).length
                      })
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
                        {
                          planStyles.length !== 0 && planStyles.map((plan, index) => {
                            return (
                              <Row key={index}>
                                <span className="text-muted mb-2 mt-2">{plan.name}</span>
                                {
                                  brief[plan.value + "_propertyAddress"] && (
                                    <Colxx sm="12">
                                      <p className="m-0 pt-3 pb-2">
                                        <span className="text-theme-1 font-weight-bold">
                                        Property Address
                                        </span>
                                      </p>
                                      <p className="border-dotted-bottom pb-2 m-0">
                                      {brief[plan.value + "_propertyAddress"]}
                                      </p>
                                    </Colxx>
                                  )
                                }
                                {
                                  brief[plan.value + "_disclaimer"] && (
                                    <Colxx sm="12">
                                      <p className="m-0 pt-3 pb-2">
                                        <span className="text-theme-1 font-weight-bold">
                                        Disclaimer
                                        </span>
                                      </p>
                                      <p className="border-dotted-bottom pb-2 m-0">
                                      {brief[plan.value + "_disclaimer"]}
                                      </p>
                                    </Colxx>
                                  )
                                }
                                {
                                  brief[plan.value + "_dimensions"] && (
                                    <Colxx sm="12">
                                      <p className="m-0 pt-3 pb-2">
                                        <span className="text-theme-1 font-weight-bold">
                                        Dimensions
                                        </span>
                                      </p>
                                      <p className="border-dotted-bottom pb-2 m-0">
                                      {brief[plan.value + "_dimensions"]}
                                      </p>
                                    </Colxx>
                                  )
                                }
                                {
                                  brief[plan.value + "_totalFloorArea"] && (
                                    <Colxx sm="12">
                                      <p className="m-0 pt-3 pb-2">
                                        <span className="text-theme-1 font-weight-bold">
                                        Total Floor Area
                                        </span>
                                      </p>
                                      <p className="border-dotted-bottom pb-2 m-0">
                                      {brief[plan.value + "_totalFloorArea"]}
                                      </p>
                                    </Colxx>
                                  )
                                }
                                {
                                  brief[plan.value + "_logoReplacement"] && (
                                    <Colxx sm="12">
                                    <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                      <span className="text-theme-1 font-weight-bold">
                                        Logo Replacement
                                      </span>
                                      <span className="ml-auto">
                                      {brief[plan.value + "_logoReplacement"]}
                                      </span>
                                    </p>
                                    </Colxx>
                                  )
                                }
                                {
                                  brief[plan.value + "_templateOrientation"] && (
                                    <Colxx sm="12">
                                    <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                      <span className="text-theme-1 font-weight-bold">
                                        Template Orientation
                                      </span>
                                      <span className="ml-auto">
                                      {brief[plan.value + "_templateOrientation"]}
                                      </span>
                                    </p>
                                    </Colxx>
                                  )
                                }
                              </Row>
                            )
                          })
                        }
                        </Colxx>
                        <Colxx sm="12">
                          {
                            brief.fileOutputSize && (
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
                            )
                          }
                        </Colxx>
                        <Colxx sm="12">
                          {
                            brief.outputFileType && (
                              <>
                              <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                <span className="text-theme-1 font-weight-bold">
                                  <IntlMessages id="briefing.output-file-type" />
                                </span>
                                <span className="ml-auto">
                                {brief.outputFileType}
                                </span>
                              </p>
                              </>
                            )
                          }
                        </Colxx>
                        <Colxx sm="12">
                          {
                            brief.removalInstruction && (
                              <>
                              <p className="m-0 pt-3 pb-2">
                                <span className="text-theme-1 font-weight-bold">
                                  <IntlMessages id="briefing.item-removal-instruction" />
                                </span>
                              </p>
                              <p className="border-dotted-bottom pb-2 m-0">
                                {brief.removalInstruction}
                              </p>
                              </>
                            )
                          }
                        </Colxx>
                        <Colxx sm="12">
                          {
                            brief.notes && (
                              <>
                              <p className="m-0 pt-3 pb-2">
                                <span className="text-theme-1 font-weight-bold">
                                  <IntlMessages id="briefing.notes" />
                                </span>
                              </p>
                              <p className="border-dotted-bottom pb-2 m-0">
                                {brief.notes}
                              </p>
                              </>
                            )
                          }
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
                      {
                        planStyles.map((plan, planIndex) => {
                          return (
                            <Row key={planIndex} className="mb-5">
                              <Colxx sm="12">
                                <Label className="text-primary">{plan.name}</Label>
                              </Colxx>
                              {
                                downloads.map((download, index) => {
                                  if (download.service_option === plan.name) {
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
                              <Colxx sm="12">
                                {
                                  brief.fileLinks && brief.fileLinks[planIndex] && (
                                    <Colxx sm="12">
                                      <span className="text-danger font-weight-bold">File Link:</span>&nbsp;
                                      <a className="text-primary" href={brief.fileLinks[planIndex]} target="_blank">{brief.fileLinks[planIndex]}</a>
                                    </Colxx>
                                  )
                                }
                              </Colxx>
                          </Row>
                          )
                        })
                      }
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
                          <p className="mb-5">
                            {backupNotes}
                          </p>
                        </Colxx>
                      </Row>
                      <Row>
                        {
                          downloads.map((download, index) => {
                            if (download.service_option == 'backup_files') {
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

export default injectIntl(REFloorPlans);
