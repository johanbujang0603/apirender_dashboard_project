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

const PMBrandDevelopment = ({ service, orders, downloads, brief, backupNotes, clientView }) => {
  const [activeTab, setActiveTab] = useState('details');
  return (
    <>
      <Row className="chat-row">
      <Colxx md="12" sm="12">
          <h5 className="mb-2">Brand Development</h5>
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
                            brief.logoUsage && (
                              <>
                              <p className="m-0 pt-3 pb-2">
                                <span className="text-theme-1 font-weight-bold">
                                  What is your logo going to be used for?
                                </span>
                              </p>
                              <p className="">
                                {brief.logoUsage}
                              </p>
                              <div className="border-dotted-bottom pb-2 m-0">
                                {
                                  brief.logoUsage && brief.logoUsage === 'Other' && brief.logoUsageText && (
                                    <>
                                      <p className="mb-1">
                                        {brief.logoUsageText}
                                      </p>
                                    </>
                                  )
                                }
                              </div>
                              </>
                            )
                          }
                        </Colxx>
                        <Colxx sm="12">
                        </Colxx>
                        <Colxx sm="12">
                          {
                            brief.businessPurpose && (
                              <>
                              <p className="m-0 pt-3 pb-2">
                                <span className="text-theme-1 font-weight-bold">
                                  What does your business do?
                                </span>
                              </p>
                              <p className="border-dotted-bottom pb-2 m-0">
                                {brief.businessPurpose}
                              </p>
                              </>
                            )
                          }
                        </Colxx>
                        <Colxx sm="12">
                          {
                            brief.mission && (
                              <>
                              <p className="m-0 pt-3 pb-2">
                                <span className="text-theme-1 font-weight-bold">
                                  What is your company's missions statement?
                                </span>
                              </p>
                              <p className="border-dotted-bottom pb-2 m-0">
                                {brief.mission}
                              </p>
                              </>
                            )
                          }
                        </Colxx>
                        <Colxx sm="12">
                          {
                            brief.brandValues && (
                              <>
                              <p className="m-0 pt-3 pb-2">
                                <span className="text-theme-1 font-weight-bold">
                                  What are your brand’s values?
                                </span>
                              </p>
                              <p className="border-dotted-bottom pb-2 m-0">
                                {brief.brandValues}
                              </p>
                              </>
                            )
                          }
                        </Colxx>
                        <Colxx sm="12">
                          {
                            brief.targetCustomer && (
                              <>
                              <p className="m-0 pt-3 pb-2">
                                <span className="text-theme-1 font-weight-bold">
                                  Target customer
                                </span>
                              </p>
                              <p className="border-dotted-bottom pb-2 m-0">
                                {brief.targetCustomer}
                              </p>
                              </>
                            )
                          }
                        </Colxx>
                        <Colxx sm="12">
                          {
                            brief.companyPersonality && (
                              <>
                              <p className="m-0 pt-3 pb-2">
                                <span className="text-theme-1 font-weight-bold">
                                  What’s your company’s or project's personality?
                                </span>
                              </p>
                              <p className="border-dotted-bottom pb-2 m-0">
                                {brief.companyPersonality}
                              </p>
                              </>
                            )
                          }
                        </Colxx>
                        <Colxx sm="12">
                          {
                            brief.top3Competitors && (
                              <>
                              <p className="m-0 pt-3 pb-2">
                                <span className="text-theme-1 font-weight-bold">
                                  Who are your company’s top three competitors?
                                </span>
                              </p>
                              <p className="border-dotted-bottom pb-2 m-0">
                                {brief.top3Competitors}
                              </p>
                              </>
                            )
                          }
                        </Colxx>
                        <Colxx sm="12">
                          {
                            brief.youDifference && (
                              <>
                              <p className="m-0 pt-3 pb-2">
                                <span className="text-theme-1 font-weight-bold">
                                  How are you different?
                                </span>
                              </p>
                              <p className="border-dotted-bottom pb-2 m-0">
                                {brief.youDifference}
                              </p>
                              </>
                            )
                          }
                        </Colxx>
                        <Colxx sm="12">
                          {
                            brief.companyStory && (
                              <>
                              <p className="m-0 pt-3 pb-2">
                                <span className="text-theme-1 font-weight-bold">
                                  What's your company’s story?
                                </span>
                              </p>
                              <p className="border-dotted-bottom pb-2 m-0">
                                {brief.companyStory}
                              </p>
                              </>
                            )
                          }
                        </Colxx>
                        <Colxx sm="12">
                          {
                            brief.brand3Links && (
                              <>
                              <p className="m-0 pt-3 pb-2">
                                <span className="text-theme-1 font-weight-bold">
                                  3 links of brands whose brand identity inspires
                                </span>
                              </p>
                              <p className="border-dotted-bottom pb-2 m-0">
                                {brief.brand3Links}
                              </p>
                              </>
                            )
                          }
                        </Colxx>
                        <Colxx sm="12">
                          {
                            brief.interactionCustomer && (
                              <>
                              <p className="m-0 pt-3 pb-2">
                                <span className="text-theme-1 font-weight-bold">
                                How do you interact with customers?
                                </span>
                              </p>
                              <p className="border-dotted-bottom pb-2 m-0">
                                {brief.interactionCustomer}
                              </p>
                              </>
                            )
                          }
                        </Colxx>
                        <Colxx sm="12">
                          {
                            brief.specificGuidelines && (
                              <>
                              <p className="m-0 pt-3 pb-2">
                                <span className="text-theme-1 font-weight-bold">
                                Specific guidelines
                                </span>
                              </p>
                              <p className="border-dotted-bottom pb-2 m-0">
                                {brief.specificGuidelines}
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

export default injectIntl(PMBrandDevelopment);
