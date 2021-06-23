import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { injectIntl } from "react-intl";
import axios from "axios";
import { Row, Button, FormGroup, Label, Card, CardBody } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import IntlMessages from "../../../helpers/IntlMessages";

import PRPhotoRetouching from "../../../components/briefing_details/PRPhotoRetouching";
import PRPortraitRetouching from "../../../components/briefing_details/PRPortraitRetouching";
import PRDayToDusk from "../../../components/briefing_details/PRDayToDusk";
import PRAerialEditing from "../../../components/briefing_details/PRAerialEditing";
import PRImageEnhancement from "../../../components/briefing_details/PRImageEnhancement";
import PRVirtualFurniture from "../../../components/briefing_details/PRVirtualFurniture";

import REPhotoRetouching from "../../../components/briefing_details/REPhotoRetouching";
import REDayToDusk from "../../../components/briefing_details/REDayToDusk";
import REAerialEditing from "../../../components/briefing_details/REAerialEditing";
import REImageEnhancement from "../../../components/briefing_details/REImageEnhancement";
import REFloorPlans from "../../../components/briefing_details/REFloorPlans";
import REVirtualTour from "../../../components/briefing_details/REVirtualTour";
import REVirtualStaging from "../../../components/briefing_details/REVirtualStaging";
import RE360VirtualStaging from "../../../components/briefing_details/RE360VirtualStaging";
import REMotionPicture from "../../../components/briefing_details/REMotionPicture";
import REVideo from "../../../components/briefing_details/REVideo";
import RESlideshows from "../../../components/briefing_details/RESlideshows";
import REPropertyMicrosites from "../../../components/briefing_details/REPropertyMicrosites";
import RECopywriting from "../../../components/briefing_details/RECopywriting";


import PDAerialEditing from "../../../components/briefing_details/PDAerialEditing";
import PD3DExteriorRenders from "../../../components/briefing_details/PD3DExteriorRenders";
import PDInteriorRenders from "../../../components/briefing_details/PDInteriorRenders";
import PD3DRendersStreetscape from "../../../components/briefing_details/PD3DRendersStreetscape";
import PD3DRendersAerial from "../../../components/briefing_details/PD3DRendersAerial";
import PD3DInteriorRenders360Degree from "../../../components/briefing_details/PD3DInteriorRenders360Degree";
import PD3DExteriorRenders360Degree from "../../../components/briefing_details/PD3DExteriorRenders360Degree";
import PD2DRendersExteriorElevation from "../../../components/briefing_details/PD2DRendersExteriorElevation";
import PDBudgetExteriorRender from "../../../components/briefing_details/PDBudgetExteriorRender";
import PDWalkthroughs from "../../../components/briefing_details/PDWalkthroughs";
import PDFlythroughs from "../../../components/briefing_details/PDFlythroughs";
import PDPremiumRenders from "../../../components/briefing_details/PDPremiumRenders";
import PDCommercialFloorPlans from "../../../components/briefing_details/PDCommercialFloorPlans";
import PDFloorPlanRenders from "../../../components/briefing_details/PDFloorPlanRenders";
import PDCRMDevelopment from "../../../components/briefing_details/PDCRMDevelopment";
import PDTouchScreenSolutions from "../../../components/briefing_details/PDTouchScreenSolutions";


import VRExterior from "../../../components/briefing_details/VRExterior";
import VRInterior from "../../../components/briefing_details/VRInterior";
import VRCustomProject from "../../../components/briefing_details/VRCustomProject";
import VRPoolConstruction from "../../../components/briefing_details/VRPoolConstruction";
import VRPoolConstructionCustomProject from "../../../components/briefing_details/VRPoolConstructionCustomProject";
import PMBrandDevelopment from "../../../components/briefing_details/PMBrandDevelopment";
import PMSitePlan from "../../../components/briefing_details/PMSitePlan";
import PMCommercialFloorPlan from "../../../components/briefing_details/PMCommercialFloorPlan";
import PMDLFlyers from "../../../components/briefing_details/PMDLFlyers";
import PMInfoBooklet from "../../../components/briefing_details/PMInfoBooklet";
import PMWebsitesLandingPage from "../../../components/briefing_details/PMWebsitesLandingPage";
import PMWebsitesPostLaunch from "../../../components/briefing_details/PMWebsitesPostLaunch";
import PSCorfulteSign from "../../../components/briefing_details/PSCorfulteSign";
import PSPullupBanners from "../../../components/briefing_details/PSPullupBanners";
import PSBalmain from "../../../components/briefing_details/PSBalmain";
import PSUSB from "../../../components/briefing_details/PSUSB";
import PSNameTags from "../../../components/briefing_details/PSNameTags";
import PSFlyers from "../../../components/briefing_details/PSFlyers";
import PSBooklet from "../../../components/briefing_details/PSBooklet";
import PSDelivery from "../../../components/briefing_details/PSBooklet";

import NotificationManager from "../../../components/common/react-notifications/NotificationManager";
import ChatApplicationMenu from "../../../containers/briefing/ChatApplicationMenu";

const BriefingDetails = ({ intl, match, history }) => {
  // const { messages } = intl;
  const [isLoaded, setIsLoaded] = useState(false);
  const [service, setService] = useState({});
  const [project, setProject] = useState(null);
  const [orders, setOrders] = useState([]);
  const [brief, setBrief] = useState(null);
  const [downloads, setDownloads] = useState([]);
  const [backupNotes, setBackupNotes] = useState(null);

  useEffect(() => {
    axios
      .post(`/api/briefing/get-briefing?_id=${match.params.id}`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        if (data.service.is_paid === false) history.push("/");
        setProject(data.project);
        setService(data.service);
        setBrief(data.content);
        setBackupNotes(data.backupNotes[0] ? data.backupNotes[0].notes : "");
        setDownloads(data.files);
        setOrders(data.orders);
        setIsLoaded(true);
      })
      .catch((error) => {});
  }, [history, match.params.id]);

  const confirmService = () => {
    axios
      .post(`/api/briefing/confirm-service?_id=${match.params.id}`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        NotificationManager.success(
          "The service has been completed!.",
          "Congratulation!",
          3000,
          null,
          null,
          ""
        );
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return !isLoaded ? (
    <div className="loading" />
  ) : (
    <>
      <Row className="chat-row">
        <Colxx xxs="12">
          <div className="d-flex align-items-center mb-3">
            <NavLink
              to={`/app/projects/details/${project._id}`}
              className="mr-2"
            >
              <i className="iconsminds-arrow-back-3" />
            </NavLink>
            <h1 className="p-0 m-0">
              <IntlMessages id="projects.briefing" /> &nbsp;
              <span className="text-primary text-one">
                ({project && project.project_name})
              </span>
            </h1>
            <div className="ml-auto text-zero top-right-button-container">
              {backupNotes && (
                <Button
                  className="top-right-button btn btn-primary btn-lg"
                  onClick={confirmService}
                >
                  Mark as Complete
                </Button>
              )}
            </div>
          </div>
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      {service.value === "PR_REAL_ESTATE_PHOTO_RETOUCHING" && (
        <PRPhotoRetouching orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PR_PORTRAIT_RETOUCHING" && (
        <PRPortraitRetouching orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PR_DAY_TO_DUSK" && (
        <PRDayToDusk orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PR_AERIAL_EDITING" && (
        <PRAerialEditing orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PR_360_IMAGE_ENHANCEMENT" && (
        <PRImageEnhancement orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PR_VIRTUAL_FURNITURE" && (
        <PRVirtualFurniture orders={orders} service={service} downloads={downloads} brief={brief} />
      )}


      {/* ============================== Listing Enhancement ============================== */}


      {service.value === "RE_REAL_ESTATE_PHOTO_RETOUCHING" && (
        <REPhotoRetouching orders={orders} service={service} downloads={downloads} brief={brief} />
      )}
      {service.value === "RE_DAY_TO_DUSK" && (
        <REDayToDusk orders={orders} service={service} downloads={downloads} brief={brief} />
      )}
      {service.value === "RE_AERIAL_EDITING" && (
        <REAerialEditing orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "RE_360_IMAGE_ENHANCEMENT" && (
        <REImageEnhancement orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "RE_FLOOR_PLANS" && (
        <REFloorPlans orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "RE_VIRTUAL_TOUR" && (
        <REVirtualTour orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "RE_VIRTUAL_STAGING" && (
        <REVirtualStaging orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "RE_360_VIRTUAL_STAGING" && (
        <RE360VirtualStaging orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "RE_MOTION_PICTURE" && (
        <REMotionPicture orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "RE_VIDEO" && (
        <REVideo orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "RE_SLIDE_SHOWS" && (
        <RESlideshows orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "RE_PROPERTY_MICROSITES" && (
        <REPropertyMicrosites orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "RE_COPYWRITING" && (
        <RECopywriting orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}


      {/* ============================== Project Marketing ============================== */}


      {service.value === "PD_AERIAL_EDITING" && (
        <PDAerialEditing orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PD_3D_EXTERIOR_RENDERS" && (
        <PD3DExteriorRenders orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PD_INTERIOR_RENDERS" && (
        <PDInteriorRenders orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}

      {service.value === "PD_3D_RENDERS_STREETSCAPE" && (
        <PD3DRendersStreetscape orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PD_3D_RENDERS_AERIAL_RENDER" && (
        <PD3DRendersAerial orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PD_3D_INTERIOR_RENDERS_360_DEGREE" && (
        <PD3DInteriorRenders360Degree orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PD_3D_EXTERIOR_RENDERS_360_DEGREE" && (
        <PD3DExteriorRenders360Degree orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}

      {service.value === "PD_2D_RENDERS_EXTERIOR_ELEVATION" && (
        <PD2DRendersExteriorElevation orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PD_BUDGET_EXTERIOR_RENDER" && (
        <PDBudgetExteriorRender orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PD_WALKTHROUGHS" && (
        <PDWalkthroughs orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PD_FLYTHROUGHS" && (
        <PDFlythroughs orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PD_PREMIUM_RENDERS" && (
        <PDPremiumRenders orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PD_COMMERCIAL_FLOOR_PLANS" && (
        <PDCommercialFloorPlans orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PD_FLOOR_PLAN_RENDERS" && (
        <PDFloorPlanRenders orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PD_CRM_DEVELOPMENT" && (
        <PDCRMDevelopment orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PD_TOUCH_SCREEN_SOLUTIONS" && (
        <PDTouchScreenSolutions orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}


      {/* ============================== Project Marketing ============================== */}


      {service.value === "VR_EXTERIOR" && (
        <VRExterior orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "VR_INTERIOR" && (
        <VRInterior orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "VR_CUSTOM_PROJECT" && (
        <VRCustomProject orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "VR_POOL_CONSTRUCTION" && (
        <VRPoolConstruction orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "VR_POOL_CONSTRUCTION_CUSTOM_PROJECT" && (
        <VRPoolConstructionCustomProject orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PM_BRAND_DEVELOPMENT" && (
        <PMBrandDevelopment orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PM_SITE_PLAN" && (
        <PMSitePlan orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PM_SITE_COMMERCIAL_FLOOR_PLAN" && (
        <PMCommercialFloorPlan orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PM_DL_FLYERS" && (
        <PMDLFlyers orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PM_INFO_BOOKLET" && (
        <PMInfoBooklet orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PM_WEBSITES_LANDING_PAGE" && (
        <PMWebsitesLandingPage orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PM_WEBSITES_POST_LAUNCH" && (
        <PMWebsitesPostLaunch orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}

      {service.value === "PS_CORFLUTE_SIGN" && (
        <PSCorfulteSign orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PS_PULL_UP_BANNERS" && (
        <PSPullupBanners orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PS_BALMAIN" && (
        <PSBalmain orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PS_USB" && (
        <PSUSB orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PS_NAME_TAGS" && (
        <PSNameTags orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PS_FLYERS" && (
        <PSFlyers orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {service.value === "PS_BOOKLET" && (
        <PSBooklet orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      {
        project && project.delivery_address && (
          <Row className="chat-row">
            <Colxx xxs="12">
              <h5 className="mb-4">Delivery Address</h5>
              <Card>
                <CardBody>
                  <FormGroup row>
                    <Colxx sm="6">
                      <Label className="mr-2 text-primary">Street Name: </Label>
                      <span>{project.delivery_address.streetName}</span>
                    </Colxx>
                    <Colxx sm="6">
                      <Label className="mr-2 text-primary">Street Number: </Label>
                      <span>{project.delivery_address.streetNumber}</span>
                    </Colxx>
                  </FormGroup>
                  <FormGroup row>
                    <Colxx sm="6">
                      <Label className="mr-2 text-primary">Unit Number: </Label>
                      <span>{project.delivery_address.unitNumber}</span>
                    </Colxx>
                    <Colxx sm="6">
                      <Label className="mr-2 text-primary">Suburb: </Label>
                      <span>{project.delivery_address.suburb}</span>
                    </Colxx>
                  </FormGroup>
                  <FormGroup row>
                    <Colxx sm="6">
                      <Label className="mr-2 text-primary">Zip Code: </Label>
                      <span>{project.delivery_address.zipCode}</span>
                    </Colxx>
                    <Colxx sm="6">
                      <Label className="mr-2 text-primary">Country: </Label>
                      <span>{project.delivery_address.country}</span>
                    </Colxx>
                  </FormGroup>
                </CardBody>
              </Card>
            </Colxx>
          </Row>
          
        )
      }
      {service.value === "PS_DELIVERY" && (
        <PSDelivery orders={orders} service={service} downloads={downloads} brief={brief} backupNotes={backupNotes} />
      )}
      <ChatApplicationMenu history={history} match={match} intl={intl} />
    </>
  );
};
export default injectIntl(BriefingDetails);