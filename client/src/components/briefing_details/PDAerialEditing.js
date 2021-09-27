import React, { useRef, useState } from "react";
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

const PDAerialEditing = ({ service, orders, downloads, brief, backupNotes, clientView }) => {
  const [activeTab, setActiveTab] = useState('details');
  return (
    <>
      <Row className="chat-row">
        <Colxx md="12" sm="12">
          <h5 className="mb-2">Aerial Editing</h5>
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
                          return item.service_option == 'basic';
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
                          return item.service_option == 'backup_files';
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
                            brief.skyReplacement && (
                              <>
                              <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                <span className="text-theme-1 font-weight-bold">
                                  <IntlMessages id="briefing.sky-replacement" />
                                </span>
                                <span className="ml-auto">
                                  {brief.skyReplacement}  
                                </span>
                              </p>
                              </>
                            )
                          }
                        </Colxx>
                        <Colxx sm="12">
                          {
                            brief.grassEnhancement && (
                              <>
                              <p className="m-0 pt-3 pb-2 d-flex align-items-center border-dotted-bottom">
                                <span className="text-theme-1 font-weight-bold">
                                  <IntlMessages id="briefing.grass-enhancement" />
                                </span>
                                <span className="ml-auto">
                                  {brief.grassEnhancement}
                                </span>
                              </p>
                              </>
                            )
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
                          orders.find((o) => o.value === "PD_AERIAL_EDITING_COLOUR_FADE") != undefined && (
                              <>
                                <p className="m-0 pt-3 pb-2">
                                  <span className="text-theme-1 font-weight-bold">
                                    <IntlMessages id="briefing.colour-fade" />
                                  </span>
                                </p>
                                <p className="mb-3 pt-3 pb-2">{ brief.colourFade }</p>
                                <p className="border-dotted-bottom"></p>
                              </>
                          )
                        }
                        </Colxx>
                        <Colxx sm="12">
                        {
                          orders.find((o) => o.value === "PD_AERIAL_EDITING_LOCATION_PIN_DROP") != undefined && (
                              <>
                                <p className="m-0 pt-3 pb-2">
                                  <span className="text-theme-1 font-weight-bold">
                                    <IntlMessages id="briefing.location-pin-drop" />
                                  </span>
                                </p>
                                <p className="mb-3 pt-3 pb-2">{ brief.locationPinDrop }</p>
                                <p className="border-dotted-bottom"></p>
                              </>
                          )
                        }
                        </Colxx>
                        <Colxx sm="12">
                        {
                          orders.find((o) => o.value === "PD_AERIAL_EDITING_SINGLE_LOT_HIGHLIGHT") != undefined && (
                              <>
                                <p className="m-0 pt-3 pb-2">
                                  <span className="text-theme-1 font-weight-bold">
                                    <IntlMessages id="briefing.single-lot-highlight" />
                                  </span>
                                </p>
                                <p className="mb-3 pt-3 pb-2">{ brief.singleLotHighlight }</p>
                                <p className="border-dotted-bottom"></p>
                              </>
                          )
                        }
                        </Colxx>
                        <Colxx sm="12">
                        {
                          orders.find((o) => o.value === "PD_AERIAL_EDITING_MULTIPLE_LOT_HIGHLIGHT") != undefined && (
                              <>
                                <p className="m-0 pt-3 pb-2">
                                  <span className="text-theme-1 font-weight-bold">
                                    <IntlMessages id="briefing.multiple-lot-highlight" />
                                  </span>
                                </p>
                                <p className="mb-3 pt-3 pb-2">{ brief.multipleLotHighlight }</p>
                                <p className="border-dotted-bottom"></p>
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
                      <Row>
                        {
                          downloads.map((download, index) => {
                            if (download.service_option == 'basic') {
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

export default injectIntl(PDAerialEditing);
