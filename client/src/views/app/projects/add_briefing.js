import React, { useState, useEffect } from "react";
import { injectIntl } from "react-intl";
import axios from "axios";
import { Row } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import IntlMessages from "../../../helpers/IntlMessages";

import PRPhotoRetouching from "../../../components/add_briefing/PRPhotoRetouching";
import PRPortraitRetouching from "../../../components/add_briefing/PRPortraitRetouching";
import PRDayToDusk from "../../../components/add_briefing/PRDayToDusk";
import PRAerialEditing from "../../../components/add_briefing/PRAerialEditing";
import PRImageEnhancement from "../../../components/add_briefing/PRImageEnhancement";
import PRVirtualFurniture from "../../../components/add_briefing/PRVirtualFurniture";


import REPhotoRetouching from "../../../components/add_briefing/REPhotoRetouching";
import REDayToDusk from "../../../components/add_briefing/REDayToDusk";
import REAerialEditing from "../../../components/add_briefing/REAerialEditing";
import REImageEnhancement from "../../../components/add_briefing/REImageEnhancement";
import REFloorPlans from "../../../components/add_briefing/REFloorPlans";
import REVirtualTour from "../../../components/add_briefing/REVirtualTour";
import REVirtualStaging from "../../../components/add_briefing/REVirtualStaging";
import RE360VirtualStaging from "../../../components/add_briefing/RE360VirtualStaging";
import REMotionPicture from "../../../components/add_briefing/REMotionPicture";
import REVideo from "../../../components/add_briefing/REVideo";
import RESlideshows from "../../../components/add_briefing/RESlideshows";
import REPropertyMicrosites from "../../../components/add_briefing/REPropertyMicrosites";
import RECopywriting from "../../../components/add_briefing/RECopywriting";


import PDAerialEditing from "../../../components/add_briefing/PDAerialEditing";
import PD3DExteriorRenders from "../../../components/add_briefing/PD3DExteriorRenders";
import PDInteriorRenders from "../../../components/add_briefing/PDInteriorRenders";
import PD3DRendersStreetscape from "../../../components/add_briefing/PD3DRendersStreetscape";
import PD3DRendersAerial from "../../../components/add_briefing/PD3DRendersAerial";
import PD3DInteriorRenders360Degree from "../../../components/add_briefing/PD3DInteriorRenders360Degree";
import PD3DExteriorRenders360Degree from "../../../components/add_briefing/PD3DExteriorRenders360Degree";
import PD2DRendersExteriorElevation from "../../../components/add_briefing/PD2DRendersExteriorElevation";
import PDBudgetExteriorRender from "../../../components/add_briefing/PDBudgetExteriorRender";
import PDWalkthroughs from "../../../components/add_briefing/PDWalkthroughs";
import PDFlythroughs from "../../../components/add_briefing/PDFlythroughs";
import PDPremiumRenders from "../../../components/add_briefing/PDPremiumRenders";
import PDCommercialFloorPlans from "../../../components/add_briefing/PDCommercialFloorPlans";
import PDFloorPlanRenders from "../../../components/add_briefing/PDFloorPlanRenders";
import PDCRMDevelopment from "../../../components/add_briefing/PDCRMDevelopment";
import PDTouchScreenSolutions from "../../../components/add_briefing/PDTouchScreenSolutions";


import VRExterior from "../../../components/add_briefing/VRExterior";
import VRInterior from "../../../components/add_briefing/VRInterior";
import VRCustomProject from "../../../components/add_briefing/VRCustomProject";
import VRPoolConstruction from "../../../components/add_briefing/VRPoolConstruction";
import VRPoolConstructionCustomProject from "../../../components/add_briefing/VRPoolConstructionCustomProject";


import PMBrandDevelopment from "../../../components/add_briefing/PMBrandDevelopment";
import PMSitePlan from "../../../components/add_briefing/PMSitePlan";
import PMCommercialFloorPlan from "../../../components/add_briefing/PMCommercialFloorPlan";
import PMDLFlyers from "../../../components/add_briefing/PMDLFlyers";
import PMInfoBooklet from "../../../components/add_briefing/PMInfoBooklet";
import PMWebsitesLandingPage from "../../../components/add_briefing/PMWebsitesLandingPage";
import PMWebsitesPostLaunch from "../../../components/add_briefing/PMWebsitesPostLaunch";


import PSCorfulteSign from "../../../components/add_briefing/PSCorfulteSign";
import PSPullupBanners from "../../../components/add_briefing/PSPullupBanners";
import PSBalmain from "../../../components/add_briefing/PSBalmain";
import PSUSB from "../../../components/add_briefing/PSUSB";
import PSNameTags from "../../../components/add_briefing/PSNameTags";
import PSFlyers from "../../../components/add_briefing/PSFlyers";
import PSBooklet from "../../../components/add_briefing/PSBooklet";

const AddBriefing = ({ intl, match, history }) => {
  // const { messages } = intl;
  const [isLoaded, setIsLoaded] = useState(false);
  const [project, setProject] = useState({});
  const [service, setService] = useState({});
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/services/detail?_id=${match.params.id}`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        if (data.service.is_paid === false) history.push("/");
        setService(data.service);
        setProject(data.project);
        setOrders(data.orders);
        setIsLoaded(true);
      });
  }, [history, match.params.id]);
  return !isLoaded ? (
    <div className="loading" />
  ) : (
    <>
      <Row>
        <Colxx xxs="12">
          <h1>
            <IntlMessages id="projects.briefing" /> - &nbsp;
            <span className="text-primary text-default">
              {project && project.project_name}
            </span>
          </h1>
          <Separator className="mb-5" />
        </Colxx>
      </Row>

      {service.value === "PR_REAL_ESTATE_PHOTO_RETOUCHING" && (
        <PRPhotoRetouching orders={orders} service={service} history={history} />
      )}
      {service.value === "PR_PORTRAIT_RETOUCHING" && (
        <PRPortraitRetouching service={service} history={history} orders={orders} />
      )}
      {service.value === "PR_DAY_TO_DUSK" && (
        <PRDayToDusk service={service} orders={orders} history={history} />
      )}
      {service.value === "PR_AERIAL_EDITING" && (
        <PRAerialEditing service={service} orders={orders} history={history} />
      )}
      {service.value === "PR_360_IMAGE_ENHANCEMENT" && (
        <PRImageEnhancement service={service} orders={orders} history={history} />
      )}
      {service.value === "PR_VIRTUAL_FURNITURE" && (
        <PRVirtualFurniture service={service} orders={orders} history={history} />
      )}


      {/* ============================== Listing Enhancement ============================== */}


      {service.value === "RE_REAL_ESTATE_PHOTO_RETOUCHING" && (
        <REPhotoRetouching orders={orders} service={service} history={history} />
      )}
      {service.value === "RE_DAY_TO_DUSK" && (
        <REDayToDusk service={service} orders={orders} history={history} />
      )}
      {service.value === "RE_AERIAL_EDITING" && (
        <REAerialEditing service={service} orders={orders} history={history} />
      )}
      {service.value === "RE_360_IMAGE_ENHANCEMENT" && (
        <REImageEnhancement service={service} orders={orders} history={history} />
      )}
      {service.value === "RE_FLOOR_PLANS" && (
        <REFloorPlans service={service} orders={orders} history={history} />
      )}
      {service.value === "RE_VIRTUAL_TOUR" && (
        <REVirtualTour service={service} orders={orders} history={history} />
      )}
      {service.value === "RE_VIRTUAL_STAGING" && (
        <REVirtualStaging service={service} orders={orders} history={history} />
      )}
      {service.value === "RE_360_VIRTUAL_STAGING" && (
        <RE360VirtualStaging service={service} orders={orders} history={history} />
      )}
      {service.value === "RE_MOTION_PICTURE" && (
        <REMotionPicture service={service} orders={orders} history={history} />
      )}
      {service.value === "RE_VIDEO" && (
        <REVideo service={service} orders={orders} history={history} />
      )}
      {service.value === "RE_SLIDE_SHOWS" && (
        <RESlideshows service={service} orders={orders} history={history} />
      )}
      {service.value === "RE_PROPERTY_MICROSITES" && (
        <REPropertyMicrosites service={service} orders={orders} history={history} />
      )}
      {service.value === "RE_COPYWRITING" && (
        <RECopywriting service={service} orders={orders} history={history} />
      )}
      

      {/* ============================== Project Marketing ============================== */}


      {service.value === "PD_AERIAL_EDITING" && (
        <PDAerialEditing service={service} orders={orders} history={history} />
      )}
      {service.value === "PD_3D_EXTERIOR_RENDERS" && (
        <PD3DExteriorRenders service={service} orders={orders} history={history} />
      )}
      {service.value === "PD_INTERIOR_RENDERS" && (
        <PDInteriorRenders service={service} orders={orders} history={history} />
      )}
      {service.value === "PD_3D_RENDERS_STREETSCAPE" && (
        <PD3DRendersStreetscape service={service} orders={orders} history={history} />
      )}
      {service.value === "PD_3D_RENDERS_AERIAL_RENDER" && (
        <PD3DRendersAerial service={service} orders={orders} history={history} />
      )}
      {service.value === "PD_3D_INTERIOR_RENDERS_360_DEGREE" && (
        <PD3DInteriorRenders360Degree service={service} orders={orders} history={history} />
      )}
      {service.value === "PD_3D_EXTERIOR_RENDERS_360_DEGREE" && (
        <PD3DExteriorRenders360Degree service={service} orders={orders} history={history} />
      )}
      {service.value === "PD_2D_RENDERS_EXTERIOR_ELEVATION" && (
        <PD2DRendersExteriorElevation service={service} orders={orders} history={history} />
      )}
      {service.value === "PD_BUDGET_EXTERIOR_RENDER" && (
        <PDBudgetExteriorRender service={service} orders={orders} history={history} />
      )}
      {service.value === "PD_WALKTHROUGHS" && (
        <PDWalkthroughs service={service} orders={orders} history={history} />
      )}
      {service.value === "PD_FLYTHROUGHS" && (
        <PDFlythroughs service={service} orders={orders} history={history} />
      )}
      {service.value === "PD_PREMIUM_RENDERS" && (
        <PDPremiumRenders service={service} orders={orders} history={history} />
      )}
      {service.value === "PD_COMMERCIAL_FLOOR_PLANS" && (
        <PDCommercialFloorPlans service={service} orders={orders} history={history} />
      )}
      {service.value === "PD_FLOOR_PLAN_RENDERS" && (
        <PDFloorPlanRenders service={service} orders={orders} history={history} />
      )}
      {service.value === "PD_CRM_DEVELOPMENT" && (
        <PDCRMDevelopment service={service} orders={orders} history={history} />
      )}
      {service.value === "PD_TOUCH_SCREEN_SOLUTIONS" && (
        <PDTouchScreenSolutions service={service} orders={orders} history={history} />
      )}


      {service.value === "VR_EXTERIOR" && (
        <VRExterior service={service} orders={orders} history={history} />
      )}
      {service.value === "VR_INTERIOR" && (
        <VRInterior service={service} orders={orders} history={history} />
      )}
      {service.value === "VR_CUSTOM_PROJECT" && (
        <VRCustomProject service={service} orders={orders} history={history} />
      )}
      {service.value === "VR_POOL_CONSTRUCTION" && (
        <VRPoolConstruction service={service} orders={orders} history={history} />
      )}
      {service.value === "VR_POOL_CONSTRUCTION_CUSTOM_PROJECT" && (
        <VRPoolConstructionCustomProject service={service} orders={orders} history={history} />
      )}
      {service.value === "PM_BRAND_DEVELOPMENT" && (
        <PMBrandDevelopment service={service} orders={orders} history={history} />
      )}
      {service.value === "PM_SITE_PLAN" && (
        <PMSitePlan service={service} orders={orders} history={history} />
      )}
      {service.value === "PM_SITE_COMMERCIAL_FLOOR_PLAN" && (
        <PMCommercialFloorPlan service={service} orders={orders} history={history} />
      )}
      {service.value === "PM_DL_FLYERS" && (
        <PMDLFlyers service={service} orders={orders} history={history} />
      )}
      {service.value === "PM_INFO_BOOKLET" && (
        <PMInfoBooklet service={service} orders={orders} history={history} />
      )}
      {service.value === "PM_WEBSITES_LANDING_PAGE" && (
        <PMWebsitesLandingPage service={service} orders={orders} history={history} />
      )}
      {service.value === "PM_WEBSITES_POST_LAUNCH" && (
        <PMWebsitesPostLaunch service={service} orders={orders} history={history} />
      )}

      {service.value === "PS_CORFLUTE_SIGN" && (
        <PSCorfulteSign service={service} orders={orders} history={history} project={project} />
      )}
      {service.value === "PS_PULL_UP_BANNERS" && (
        <PSPullupBanners service={service} orders={orders} history={history} project={project} />
      )}
      {service.value === "PS_BALMAIN" && (
        <PSBalmain service={service} orders={orders} history={history} project={project} />
      )}
      {service.value === "PS_USB" && (
        <PSUSB service={service} orders={orders} history={history} project={project} />
      )}
      {service.value === "PS_NAME_TAGS" && (
        <PSNameTags service={service} orders={orders} history={history} project={project} />
      )}
      {service.value === "PS_FLYERS" && (
        <PSFlyers service={service} orders={orders} history={history} project={project} />
      )}
      {service.value === "PS_BOOKLET" && (
        <PSBooklet service={service} orders={orders} history={history} project={project} />
      )}
    </>
  );
};
export default injectIntl(AddBriefing);