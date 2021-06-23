/* 
Type Values:
*/
export const projectCategories = [
  {
    id: 1,
    desc: "Photo Retouching Services",
    value: "PHOTO_RETOUCHING",
    img: "/assets/img/category/photo_retouching.png",
  },
  {
    id: 2,
    desc: "Listing Enhancement",
    value: "REAL_ESTATE_MARKETING",
    img: "/assets/img/category/real_estate.png",
  },
  {
    id: 3,
    desc: "Project Marketing",
    value: "PROPERTY_DEVELOPMENT",
    img: "/assets/img/category/property_development.png",
  },
  {
    id: 4,
    desc: "Virtual Renovation Services",
    value: "VIRTUAL_RENOVATION",
    img: "/assets/img/category/virtual_renovation_service.png",
  },
  {
    id: 5,
    desc: "Design & Branding",
    value: "PROJECT_MARKETING_DESIGN",
    img: "/assets/img/category/project_marketing.png",
  },
  {
    id: 6,
    desc: "Printing Services",
    value: "PRINTING_SERVICES",
    img: "/assets/img/category/printing_services.png",
  },
];

export const services = {
  PHOTO_RETOUCHING: [
    {
      id: 1,
      name: "Real Estate Photo Retouching",
      desc:
        "Professional real estate photo editing using our 20 step editing process for consistent results.",
      price: 2.0,
      currency: "AUD",
      img: "/assets/img/services/photo_retouching/Real_Estate_Photo_Retouching.png",
      value: "PR_REAL_ESTATE_PHOTO_RETOUCHING",
    },
    {
      id: 2,
      name: "Portrait Retouching",
      desc: "Professional portrait retouching. Make your first impression a great one!",
      price: 4.0,
      currency: "AUD",
      img: "/assets/img/services/photo_retouching/Portrait_Retouching.png",
      value: "PR_PORTRAIT_RETOUCHING",
    },
    {
      id: 3,
      name: "Day to Dusk",
      desc: "Conversion of daytime photos to dusk/twilight images.",
      price: 4.0,
      currency: "AUD",
      img: "/assets/img/services/photo_retouching/Day_to_Dusk.png",
      value: "PR_DAY_TO_DUSK",
    },
    {
      id: 4,
      name: "Aerial Editing",
      desc: "Professional photo retouching for aerial/drone images.",
      price: 2.8,
      currency: "AUD",
      img: "/assets/img/services/photo_retouching/Aerial_Editing.png",
      value: "PR_AERIAL_EDITING",
    },
    {
      id: 6,
      name: "Virtual Staging",
      desc:
        "This option involves adding virtual furniture to the image.",
      img: "/assets/img/services/photo_retouching/Virtual_Staging.png",
      value: "PR_VIRTUAL_FURNITURE",
    },
    {
      id: 5,
      name: "360 Image Enhancement",
      desc: "Professional 360 image stitching and retouching.",
      price: 5.0,
      currency: "AUD",
      img: "/assets/img/services/photo_retouching/360_Image_Enhancement.png",
      value: "PR_360_IMAGE_ENHANCEMENT",
    },
  ],
  REAL_ESTATE_MARKETING: [
    {
      id: 1,
      name: "Real Estate Photo Retouching",
      desc:
        "Professional real estate photo editing using our 20 step editing process for consistent results.",
      price: 2,
      currency: "AUD",
      img:
        "/assets/img/services/real_estate_marketing/real_estate_photo_retouching.png",
      value: "RE_REAL_ESTATE_PHOTO_RETOUCHING",
    },
    {
      id: 2,
      name: "Day to Dusk",
      desc: "Conversion of daytime photos to dusk/twilight images.",
      price: 4.0,
      currency: "AUD",
      img: "/assets/img/services/real_estate_marketing/day_to_dusk.png",
      value: "RE_DAY_TO_DUSK",
    },
    {
      id: 3,
      name: "Aerial Editing",
      desc:
        "Professional real estate photo editing using our 20 step editing process for consistent results.",
      price: 2.8,
      currency: "AUD",
      img: "/assets/img/services/real_estate_marketing/aerial_editing.png",
      value: "RE_AERIAL_EDITING",
    },
    {
      id: 4,
      name: "360 Image Enhancement",
      desc: "Professional 360 image stitching and retouching.",
      price: 5.0,
      currency: "AUD",
      img: "/assets/img/services/real_estate_marketing/360_image_enhancement.png",
      value: "RE_360_IMAGE_ENHANCEMENT",
    },
    {
      id: 5,
      name: "Floor Plans",
      desc: "Fast and accurate floor plans that highlight flow between rooms.",
      img: "/assets/img/services/real_estate_marketing/floor_plan.png",
      value: "RE_FLOOR_PLANS",
    },
    {
      id: 6,
      name: "Virtual Tour",
      desc: `Select the number of 'hotspots' you would like in your virtual tour. A 'hostpot' is one 360 image of an interior or exterior space (i.e. bedroom, kitchen, patio, etc).
        Includes 360 Image Enhancement, Virtual Tour creation and Web Hosting for twelve months.
        `,
      price: 7.0,
      currency: "AUD",
      unit: "hotspot",
      img: "/assets/img/services/real_estate_marketing/virtual_tour.png",
      value: "RE_VIRTUAL_TOUR",
    },
    {
      id: 7,
      name: "Virtual Staging",
      desc:
        "Add virtual furniture to your photos of empty rooms or replace old furniture with new and modern furniture. Furniture styles can be selected in the Briefing section.",
      img: "/assets/img/services/real_estate_marketing/virtual_staging.png",
      value: "RE_VIRTUAL_STAGING",
    },
    {
      id: 8,
      name: "360 Virtual Staging",
      desc:
        "Add virtual furniture to your 360 images of empty rooms or replace old furniture with new and modern furniture. Furniture styles can be selected in the Briefing section.",
      img: "/assets/img/services/real_estate_marketing/360_virtual_staging.png",
      value: "RE_360_VIRTUAL_STAGING",
    },
    {
      id: 9,
      name: "Motion Picture",
      desc:
        "Improve the visual impact of your property's social media campaign by animating certain elements of your photos. For example add flowing water to pool watefalls or fire to fireplaces.",
      price: 8.0,
      currency: "AUD",
      img: "/assets/img/services/real_estate_marketing/motion_picture.png",
      value: "RE_MOTION_PICTURE",
    },
    {
      id: 10,
      name: "Video",
      desc:
        "Fast and efficient video editing. Use footage from your phone or professional camera. Generate greater buyer interest and strengthen your personal and company branding.",
      img: "/assets/img/services/real_estate_marketing/video.png",
      value: "RE_VIDEO",
    },
    {
      id: 11,
      name: "Slideshows",
      desc:
        "Fast and efficient Slide Show creation. Use footage from your phone or professional camera. Generate greater buyer interest and strengthen your personal and company branding.",
      img: "/assets/img/services/real_estate_marketing/slideshows.png",
      value: "RE_SLIDE_SHOWS",
    },
    {
      id: 12,
      name: "Property Microsites",
      img: "/assets/img/services/real_estate_marketing/property_microsites.png",
      itemsType: "SELECT_MULTIPLE",
      value: "RE_PROPERTY_MICROSITES",
    },
    {
      id: 13,
      name: "Real Estate Copywriting",
      img: "/assets/img/services/real_estate_marketing/copywriting.png",
      itemsType: "SELECT_MULTIPLE",
      value: "RE_COPYWRITING",
    },
  ],
  PROPERTY_DEVELOPMENT: [
    {
      id: 1,
      name: "Aerial Editing",
      desc: "Professional photo retouching for aerial/drone images.",
      price: 2.8,
      currency: "AUD",
      img: "/assets/img/services/property_development/aerial_editing.png",
      value: "PD_AERIAL_EDITING",
    },
    {
      id: 2,
      name: "3D Exterior Renders",
      img: "/assets/img/services/property_development/3D_Exterior_Renders.png",
      value: "PD_3D_EXTERIOR_RENDERS",
    },
    {
      id: 3,
      name: "Interior Renders",
      img: "/assets/img/services/property_development/Interior_Renders.png",
      value: "PD_INTERIOR_RENDERS",
    },
    {
      id: 4,
      name: "3D Renders (Streetscape)",
      img: "/assets/img/services/property_development/3D_Renders_Streetscape.png",
      value: "PD_3D_RENDERS_STREETSCAPE",
    },
    {
      id: 5,
      name: "3D Renders (Aerial Render)",
      img:
        "/assets/img/services/property_development/3D_Renders_Aerial_Render.png",
      value: "PD_3D_RENDERS_AERIAL_RENDER",
    },
    {
      id: 6,
      name: "360 Degree Renders",
      img:
        "/assets/img/services/property_development/3D_Interior_Renders(360Degree).jpg",
      value: "PD_3D_INTERIOR_RENDERS_360_DEGREE",
    },
    {
      id: 7,
      name: "2D Renders (Exterior Elevation)",
      img:
        "/assets/img/services/property_development/2D_Renders(Exterior_Elevation).png",
      value: "PD_2D_RENDERS_EXTERIOR_ELEVATION",
    },
    {
      id: 8,
      name: "Express 3D Renders",
      desc:
        "The ideal render for low budget project marketing or council approvals",
      img: "/assets/img/services/property_development/Budget_Exterior_Render.png",
      value: "PD_BUDGET_EXTERIOR_RENDER",
    },
    {
      id: 9,
      name: "Virtual Walkthroughs",
      desc:
        `A Virtual Walkthrough is comprised of at least two hotspots.
        A hotspot is a 360 Degree Render of an interior or exterior space (i.e. bedroom, balcony, bathroom, etc.).
        Hotspots are linked throughout the Virtual Walkthrough, allowing the viewer to move seamlessly between rooms whether viewing on their phone, tablet, computer or VR headset.`,
      img: "/assets/img/services/property_development/Walkthroughs.png",
      value: "PD_WALKTHROUGHS",
    },
    {
      id: 10,
      name: "Architectural Animation",
      desc: `Take prospective buyers on a journey throughout the property from the comfort of their home via computer or mobile device.
              The animation can focus on the interior or exterior of your development project, or a combination of both including the surrounding streetscape and lifestyle.`,
      img: "/assets/img/services/property_development/Architectural_Animation.png",
      value: "PD_FLYTHROUGHS",
    },
    {
      id: 11,
      name: "Premium Renders",
      desc: `Select from the options below to proceed to the project briefing and receive a quote for your project.`,
      img: "/assets/img/services/property_development/premium_renders.png",
      is_free: true,
      value: "PD_PREMIUM_RENDERS",
    },
    {
      id: 12,
      name: "Commerical Floor Plans",
      desc: ``,
      img: "/assets/img/services/property_development/Commercial_Floor_Plans.png",
      value: "PD_COMMERCIAL_FLOOR_PLANS",
    },
    {
      id: 13,
      name: "Floor Plan Renders",
      desc: `Please select the number of levels in each home. You will be able to select the layout style in the briefing section.`,
      img: "/assets/img/services/property_development/Floor_Plan_Renders.png",
      value: "PD_FLOOR_PLAN_RENDERS",
    },
    {
      id: 14,
      name: "Touch Screen Solutions",
      desc: `Select from the touch screen solution options below to proceed to the project briefing and receive a quote of your project.`,
      img: "/assets/img/services/property_development/Touch_Screen_Solutions.png",
      itemsType: "SELECT_MULTIPLE",
      is_free: true,
      value: "PD_TOUCH_SCREEN_SOLUTIONS",
    },
    {
      id: 15,
      name: "CRM Development",
      desc: `Select your business type from the below options to proceed to the project briefing and receive a quote for your project.`,
      img: "/assets/img/services/property_development/CRM_Development.png",
      itemsType: "SELECT_MULTIPLE",
      is_free: true,
      value: "PD_CRM_DEVELOPMENT",
    }
  ],
  VIRTUAL_RENOVATION: [
    {
      id: 1,
      name: "Virtual Renovation - Exterior",
      desc: "Build your virtual renovation brief by selecting from the options below.",
      img:
        "/assets/img/services/virtual_renovation/Virtual_Renovation_Exterior.png",
      value: "VR_EXTERIOR",
      itemsType: "SELECT_MULTIPLE",
    },
    {
      id: 2,
      name: "Virtual Renovation - Interior",
      desc: "Build your virtual renovation brief by selecting from the options below.",
      img:
        "/assets/img/services/virtual_renovation/Virtual_Renovation_Interior.png",
      value: "VR_INTERIOR",
      itemsType: "SELECT_MULTIPLE",
    },
    {
      id: 4,
      name: "Virtual Pool Construction",
      desc: "Build your brief by selecting from the following options.",
      img:
        "/assets/img/services/virtual_renovation/Virtual_Pool_Construction.png",
      value: "VR_POOL_CONSTRUCTION",
      itemsType: "SELECT_MULTIPLE",
    },
  ],
  PROJECT_MARKETING_DESIGN: [
    {
      id: 1,
      name: "Brand Development",
      desc: "Select from options below.",
      img:
        "/assets/img/services/project_marketing_design_seo/Brand_Development.png",
      value: "PM_BRAND_DEVELOPMENT",
    },
    {
      id: 2,
      name: "Site Plan",
      desc: "Select from options below.",
      img:
        "/assets/img/services/project_marketing_design_seo/Development_Plans.png",
      value: "PM_SITE_PLAN",
    },
    {
      id: 3,
      name: "Commercial Floor Plan",
      desc: "Select from options below.",
      img:
        "/assets/img/services/project_marketing_design_seo/Commercial_Floor_Plan.png",
      value: "PM_SITE_COMMERCIAL_FLOOR_PLAN",
    },
    {
      id: 4,
      name: "DL Flyers",
      desc: "Select from option below.",
      img: "/assets/img/services/project_marketing_design_seo/DL_Flyers.png",
      value: "PM_DL_FLYERS",
    },
    {
      id: 5,
      name: "Information Booklet",
      desc: "Select the required number of pages to be designed for your booklet",
      img:
        "/assets/img/services/project_marketing_design_seo/Information_Booklet.png",
      value: "PM_INFO_BOOKLET",
    },
    {
      id: 6,
      name: "Websites (Landing Page / Pre-Launch)",
      img:
        "/assets/img/services/project_marketing_design_seo/Websites(Landing_PagePre-Launch).png",
      itemsType: "SELECT_MULTIPLE",
      value: "PM_WEBSITES_LANDING_PAGE",
    },
    {
      id: 7,
      name: "Websites (Post-Launch)",
      desc:
        "Select the number of sections you would like incorporated into your website. One Section is a page on the website (i.e. Location, The Opportunity, The Developer, Etc.)",
      img:
        "/assets/img/services/project_marketing_design_seo/Websites(Post-Launch).png",
      itemsType: "SELECT_ONE",
      value: "PM_WEBSITES_POST_LAUNCH",
    },
  ],
  PRINTING_SERVICES: [
    {
      id: 1,
      name: "Corflute Sign",
      img: "/assets/img/services/printing_services/Corflute_Sign.png",
      desc: "Vivid, full-colour printing 5 mm corrugated plastic sign that is weather - & fade-resistant.",
      value: "PS_CORFLUTE_SIGN",
    },
    {
      id: 2,
      name: "Pull-up Banners",
      desc: "Vivid, full-colour printing which single-sided display. Includes pre-assembled stand, banner & case.",
      img: "/assets/img/services/printing_services/Pull-up(Banner).png",
      value: "PS_PULL_UP_BANNERS",
    },
    {
      id: 3,
      name: "Balmain® Stylus Ballpoint Pen (min Qty 25)",
      desc: `Twist mechanism ballpoint pen made from brass and featuring a soft rubberized stylus tip for use on smartphones, and tablets.
              Comes with Balmain® branding and gift box. Black ink only`,
      img: "/assets/img/services/printing_services/PEN.png",
      itemsType: "SELECT_ONE",
      value: "PS_BALMAIN",
    },
    {
      id: 4,
      name: "USB Flash Drive ",
      desc: "8 GB white memory stick with 1-sided printing for your company or project logo.",
      img: "/assets/img/services/printing_services/USBDrive.png",
      itemsType: "SELECT_ONE",
      value: "PS_USB",
    },
    {
      id: 5,
      name: "Name Tags",
      img: "/assets/img/services/printing_services/Name_Tag.png",
      desc: "Vivid, full-colour printing on matte paper with rounded corners and adhesive backing.",
      value: "PS_NAME_TAGS",
    },
    {
      id: 6,
      name: "Flyers (25 min. Qty.)",
      desc: "Print stylish, high quality flyers for your projects.",
      img: "/assets/img/services/printing_services/DL_Flyers.png",
      value: "PS_FLYERS",
    },
    {
      id: 7,
      name: "Booklet Printing (US Only) - Min. 10 Qty.",
      desc: "Saddle stitched (stapled binding) booklets with premium glossy cover and matte interior pages.",
      img: "/assets/img/services/printing_services/Information_Booklet.png",
      value: "PS_BOOKLET",
    },
  ],
};

export const options = {
  PR_REAL_ESTATE_PHOTO_RETOUCHING: [
    {
      name: "Logo/Watermark",
      type: "YES_OR_NO",
      value: "RE_REAL_ESTATE_PHOTO_RETOUCHING_LOGO_WATERMARK",
      desc: "Add a company logo or watermark to all images",
      unit: 'Order',
      price: 1.0,
    },
    {
      name: "Item Removal",
      value: "PR_REAL_ESTATE_PHOTO_RETOUCHING_ITEM_REMOVAL",
      desc:
        "Digital removal of small and large clutter within your image. Price is per image.",
      items: [
        {
          price: 5.0,
          name: "Remove 1-3 Small Items",
          desc: "Remove 1-3 Small Items",
          value: "PR_REAL_ESTATE_PHOTO_RETOUCHING_ITEM_REMOVAL_SMALL_ITEMS",
          example_images: [
            "/assets/img/services/example/small_item_removal_before.jpg",
            "/assets/img/services/example/small_item_removal_after.jpg",
          ],
        },
        {
          price: 10.0,
          name: "Remove 3+ Small Items or Large Items",
          desc: "Remove 3+ Small Items or Large Items",
          value: "PR_REAL_ESTATE_PHOTO_RETOUCHING_ITEM_REMOVAL_LARGE_ITEMS",
          example_images: [
            "/assets/img/services/example/large_item_removal_before.jpg",
            "/assets/img/services/example/large_item_removal_after.jpg",
          ],
        },
      ],
    },
    {
      name: "Virtual Furniture",
      value: "PR_REAL_ESTATE_PHOTO_RETOUCHING_VIRTUAL_FURNITURE",
      desc:
        "This option involves adding virtual furniture to the edited 360 image.",
      items: [
        {
          price: 35.0,
          name: "Residential",
          desc:
            "Residential: Suitable for images of bedrooms, living rooms, dining rooms, etc.",
          value:
            "PR_REAL_ESTATE_PHOTO_RETOUCHING_VIRTUAL_FURNITURE_RESIDENTIAL",
          example_images: [
            "/assets/img/services/example/vf_before.JPG",
            "/assets/img/services/example/vf_After.jpg",
          ],
        },
        {
          price: 45.0,
          name: "Commercial",
          desc:
            "Commercial: Suitable for images of office space, meeting rooms, cafes, etc.",
          value: "PR_REAL_ESTATE_PHOTO_RETOUCHING_VIRTUAL_FURNITURE_COMMERCIAL",
          example_images: [
            "/assets/img/services/example/3A.jpg",
            "/assets/img/services/example/3C.jpg",
          ],
        },
      ],
    },
  ],
  PR_PORTRAIT_RETOUCHING: [
    {
      name: "Background Removal",
      desc:
        "Background removal means your image will have a transparent background. The output file will be a PNG file type.",
      value: "BACKGROUND_REMOVAL",
      price: 2.0,
    },
    {
      name: "Background Colour Change",
      desc:
        "Background colour change involves changing the entire background behind the subject to a neutral colour or colour of your choice.",
      value: "BACKGROUND_COLOUR_CHANGE",
      price: 2.0,
    },
  ],
  PR_DAY_TO_DUSK: [
    {
      name: "Item Removal",
      desc:
        "Digital removal of small and large clutter within your image. Price is per image.",
      value: "PR_DAY_TO_DUSK_ITEM_REMOVAL",
      items: [
        {
          price: 5.0,
          name: "Remove 1-3 Small Items",
          desc: "Remove 1-3 Small Items (i.e. Fallen tree branches)",
          value: "PR_DAY_TO_DUSK_ITEM_REMOVAL_SMALL_ITEMS",
        },
        {
          price: 10.0,
          name: "Remove 3+ Small Items or Large Items",
          desc:
            "Remove 3+ Small Items or Large Items (i.e. Fallen Leaves or Construction debris)",
          value: "PR_DAY_TO_DUSK_ITEM_REMOVAL_LARGE_ITEMS",
        },
      ],
    },
  ],
  PR_AERIAL_EDITING: [
    {
      name: "Item Removal",
      desc:
        "Digital removal of small and large clutter within your image. Price is per image.",
      value: "PR_AERIAL_EDITING_ITEM_REMOVAL",
      items: [
        {
          price: 5.0,
          name: "Remove 1-3 Small Items",
          desc: "Remove 1-3 Small Items (i.e. 1-3 Parked vehicles)",
          value: "PR_AERIAL_EDITING_ITEM_REMOVAL_SMALL_ITEMS",
        },
        {
          price: 10.0,
          name: "Remove 3+ Small Items or Large Items",
          desc:
            "Remove 3+ Small Items or Large Items (i.e. Several Vehicles or Construction debris and machinery)",
          value: "PR_AERIAL_EDITING_ITEM_REMOVAL_LARGE_ITEMS",
        },
      ],
      example_images: [
        "/assets/img/services/example/Aerial_Editing_removal_b.jpg",
        "/assets/img/services/example/Aerial_Editing_removal_a.jpg",
      ],
    },
    {
      name: "Day to Dusk Conversion",
      desc: "Conversion of daytime to twilight.",
      value: "PR_AERIAL_EDITING_DAY_TO_DUSK_CONVERSION",
      price: 4.0,
      example_images: [
        "/assets/img/services/example/1A.JPG",
        "/assets/img/services/example/1B.jpg",
      ],
    },
    {
      name: "Colour Fade",
      desc:
        "Colour fade is the process of removing colour saturation of the entire image except for the subject property.",
      value: "PR_AERIAL_EDITING_COLOUR_FADE",
      price: 2.5,
      example_images: [
        "/assets/img/services/example/colour_fade_before.jpg",
        "/assets/img/services/example/colour_fade_after.jpg",
      ],
    },
    {
      name: "Location Pin-Drop",
      desc:
        "Location pin-drop is the placement of a location marker on any points of interest within close proximity to the property.",
      value: "PR_AERIAL_EDITING_LOCATION_PIN_DROP",
      price: 2.5,
      example_images: [
        "/assets/img/services/example/location_pindrop_before.jpg",
        "/assets/img/services/example/location_pindrop_after.jpg",
      ],
    },
    {
      name: "Single Lot Highlight",
      desc:
        "Single Lot Highlight includes a boundary line around the property.",
      value: "PR_AERIAL_EDITING_SINGLE_LOT_HIGHLIGHT",
      price: 2.0,
      example_images: [
        "/assets/img/services/example/outline_before.jpg",
        "/assets/img/services/example/outline_after.jpg",
      ],
    },
    {
      name: "Multiple Lot Highlight",
      desc:
        "Multiple Lot Highlight includes multiple boundary lines around the subdivsion lots.",
      value: "PR_AERIAL_EDITING_MULTIPLE_LOT_HIGHLIGHT",
      price: 3.0,
      example_images: [
        "/assets/img/services/example/overlay_before.jpg",
        "/assets/img/services/example/overlay_after.jpg",
      ],
    },
  ],
  PR_VIRTUAL_FURNITURE: [
    {
      name: "Residential",
      desc: "Suitable for images of bedrooms, living rooms, dining rooms, etc.",
      value: "PR_VIRTUAL_FURNITURE_RESIDENTIAL",
      price: 35.0,
      example_images: [
        "/assets/img/services/example/PR_VIRTUAL_STAGING/residential/1A.JPG",
        "/assets/img/services/example/PR_VIRTUAL_STAGING/residential/1B.jpg",
        "/assets/img/services/example/PR_VIRTUAL_STAGING/residential/2A.JPG",
        "/assets/img/services/example/PR_VIRTUAL_STAGING/residential/2B.jpg",
        "/assets/img/services/example/PR_VIRTUAL_STAGING/residential/3A.JPG",
        "/assets/img/services/example/PR_VIRTUAL_STAGING/residential/3B.jpg",

      ],
    },
    {
      name: "Commercial",
      desc: "Suitable for images of office space, meeting rooms, cafes, etc",
      value: "PR_VIRTUAL_FURNITURE_COMMERICAL",
      price: 45.0,
      example_images: [
        "/assets/img/services/example/PR_VIRTUAL_STAGING/commercial/1A.jpg",
        "/assets/img/services/example/PR_VIRTUAL_STAGING/commercial/1B.jpg",
        "/assets/img/services/example/PR_VIRTUAL_STAGING/commercial/2A.jpg",
        "/assets/img/services/example/PR_VIRTUAL_STAGING/commercial/2B.jpg",
      ],
    },
    {
      name: "Item Removal",
      desc:
        "Digital removal of small and large clutter within your image. Price is per image.",
      value: "PR_VIRTUAL_FURNITURE_ITEM_REMOVAL",
      items: [
        {
          price: 5.0,
          name: "Remove 1-3 Small Items",
          desc: "Remove 1-3 Small Items",
          value: "PR_REAL_ESTATE_PHOTO_RETOUCHING_ITEM_REMOVAL_SMALL_ITEMS",
          example_images: [
            "/assets/img/services/example/small_item_removal_before.jpg",
            "/assets/img/services/example/small_item_removal_after.jpg",
          ],
        },
        {
          price: 10.0,
          name: "Remove 3+ Small Items or Large Items",
          desc: "Remove 3+ Small Items or Large Items",
          value: "PR_REAL_ESTATE_PHOTO_RETOUCHING_ITEM_REMOVAL_LARGE_ITEMS",
          example_images: [
            "/assets/img/services/example/large_item_removal_before.jpg",
            "/assets/img/services/example/large_item_removal_after.jpg",
          ],
        },
      ],
    },
  ],
  PR_360_IMAGE_ENHANCEMENT: [
    {
      name: "360 Virtual Furniture",
      desc:
        "This option involves adding virtual furniture to the edited 360 image.",
      value: "PR_360_IMAGE_ENHANCEMENT_VIRTUAL_FURNITURE",
      items: [
        {
          price: 85.0,
          name: "Residential Virtual Furniture",
          desc:
            "Residential: Suitable for images of bedrooms, living rooms, dining rooms, etc.",
          value: "PR_360_IMAGE_ENHANCEMENT_VIRTUAL_FURNITURE_RESIDENTIAL",
          example_link:
            "https://tours.propertyrender.com/share/7Z1mp?fs=1&vr=1&zoom=1&initload=0&thumbs=1&chromeless=1&logo=-1",
        },
        {
          price: 120.0,
          name: "Commercial Virtual Furniture",
          desc:
            "Commercial: Suitable for images of office space, meeting rooms, cafes, etc.",
          value: "PR_360_IMAGE_ENHANCEMENT_VIRTUAL_FURNITURE_COMMERCIAL",
          example_link:
            "https://tours.propertyrender.com/share/7Z1mG?fs=1&vr=1&sd=1&thumbs=1&chromeless=1&logo=0",
        },
      ],
    },
  ],
  RE_REAL_ESTATE_PHOTO_RETOUCHING: [
    {
      name: "Logo/Watermark",
      type: "YES_OR_NO",
      value: "RE_REAL_ESTATE_PHOTO_RETOUCHING_LOGO_WATERMARK",
      desc: "Add a company logo or watermark to all images",
      unit: 'Order',
      price: 1.0,
    },
    {
      name: "Item Removal",
      value: "RE_REAL_ESTATE_PHOTO_RETOUCHING_ITEM_REMOVAL",
      desc:
        "Digital removal of small and large clutter within your image. Price is per image.",
      items: [
        {
          price: 5.0,
          name: "Remove 1-3 Small Items",
          desc: "Remove 1-3 Small Items",
          value: "RE_REAL_ESTATE_PHOTO_RETOUCHING_ITEM_REMOVAL_SMALL_ITEMS",
          example_images: [
            "/assets/img/services/example/DSC_2117_before.jpg",
            "/assets/img/services/example/DSC_2117_after.jpg",
          ],
        },
        {
          price: 10.0,
          name: "Remove 3+ Small items or Large items",
          desc: "Remove 3+ Small items or Large items",
          value: "RE_REAL_ESTATE_PHOTO_RETOUCHING_ITEM_REMOVAL_LARGE_ITEMS",
          example_images: [
            "/assets/img/services/example/large_item_removal_before.jpg",
            "/assets/img/services/example/large_item_removal_after.jpg",
          ],
        },
      ],
    },
    {
      name: "Virtual Furniture",
      value: "RE_REAL_ESTATE_PHOTO_RETOUCHING_VIRTUAL_FURNITURE",
      desc:
        "This option involves adding virtual furniture to the edited 360 image.",
      items: [
        {
          price: 35.0,
          name: "Residential",
          desc:
            "Residential: Suitable for images of bedrooms, living rooms, dining rooms, etc.",
          value:
            "RE_REAL_ESTATE_PHOTO_RETOUCHING_VIRTUAL_FURNITURE_RESIDENTIAL",
          example_images: [
            "/assets/img/services/example/vf_before.JPG",
            "/assets/img/services/example/vf_After.jpg",
          ],
        },
        {
          price: 45.0,
          name: "Commercial",
          desc:
            "Commercial: Suitable for images of office space, meeting rooms, cafes, etc.",
          value: "RE_REAL_ESTATE_PHOTO_RETOUCHING_VIRTUAL_FURNITURE_COMMERCIAL",
          example_images: [
            "/assets/img/services/example/3A.jpg",
            "/assets/img/services/example/3C.jpg",
          ],
        },
      ],
    },
  ],
  RE_DAY_TO_DUSK: [
    {
      name: "Item Removal",
      desc:
        "Digital removal of small and large clutter within your image. Price is per image.",
      value: "RE_DAY_TO_DUSK_ITEM_REMOVAL",
      items: [
        {
          price: 5.0,
          name: "Remove 1-3 Small Items",
          desc: "Remove 1-3 Small Items (i.e. Fallen tree branches)",
          value: "RE_DAY_TO_DUSK_ITEM_REMOVAL_SMALL_ITEMS",
        },
        {
          price: 10.0,
          name: "Remove 3+ Small Items or Large Items",
          desc:
            "Remove 3+ Small Items or Large Items (i.e. Fallen Leaves or Construction debris)",
          value: "RE_DAY_TO_DUSK_ITEM_REMOVAL_LARGE_ITEMS",
        },
      ],
    },
  ],
  RE_AERIAL_EDITING: [
    {
      name: "Item Removal",
      desc:
        "Digital removal of small and large clutter within your image. Price is per image.",
      value: "RE_AERIAL_EDITING_ITEM_REMOVAL",
      items: [
        {
          price: 5.0,
          name: "Remove 1-3 Small Items",
          desc: "Remove 1-3 Small Items (i.e. 1-3 Parked vehicles)",
          value: "RE_AERIAL_EDITING_ITEM_REMOVAL_SMALL_ITEMS",
        },
        {
          price: 10.0,
          name: "Remove 3+ Small Items or Large Items",
          desc:
            "Remove 3+ Small Items or Large Items (i.e. Several Vehicles or Construction debris and machinery)",
          value: "RE_AERIAL_EDITING_ITEM_REMOVAL_LARGE_ITEMS",
        },
      ],
      example_images: [
        "/assets/img/services/example/Aerial_Editing_removal_b.jpg",
        "/assets/img/services/example/Aerial_Editing_removal_a.jpg",
      ],
    },
    {
      name: "Day to Dusk Conversion",
      desc: "Conversion of daytime to twilight.",
      value: "RE_AERIAL_EDITING_DAY_TO_DUSK_CONVERSION",
      price: 4.0,
      example_images: [
        "/assets/img/services/example/1A.JPG",
        "/assets/img/services/example/1B.jpg",
      ],
    },
    {
      name: "Colour Fade",
      desc:
        "Colour fade is the process of removing colour saturation of the entire image except for the subject property.",
      value: "RE_AERIAL_EDITING_COLOUR_FADE",
      price: 2.5,
      example_images: [
        "/assets/img/services/example/colour_fade_before.jpg",
        "/assets/img/services/example/colour_fade_after.jpg",
      ],
    },
    {
      name: "Location Pin-Drop",
      desc:
        "Location pin-drop is the placement of a location marker on any points of interest within close proximity to the property.",
      value: "RE_AERIAL_EDITING_LOCATION_PIN_DROP",
      price: 2.5,
      example_images: [
        "/assets/img/services/example/location_pindrop_before.jpg",
        "/assets/img/services/example/location_pindrop_after.jpg",
      ],
    },
    {
      name: "Single Lot Highlight",
      desc:
        "Single Lot Highlight includes a boundary line around the property.",
      value: "RE_AERIAL_EDITING_SINGLE_LOT_HIGHLIGHT",
      price: 2.0,
      example_images: [
        "/assets/img/services/example/outline_before.jpg",
        "/assets/img/services/example/outline_after.jpg",
      ],
    },
    {
      name: "Multiple Lot Highlight",
      desc:
        "Multiple Lot Highlight includes multiple boundary lines around the subdivsion lots.",
      value: "RE_AERIAL_EDITING_MULTIPLE_LOT_HIGHLIGHT",
      price: 3.0,
      example_images: [
        "/assets/img/services/example/overlay_before.jpg",
        "/assets/img/services/example/overlay_after.jpg",
      ],
    },
  ],
  RE_360_IMAGE_ENHANCEMENT: [
    {
      name: "360 Virtual Furniture",
      desc:
        "This option involves adding virtual furniture to the edited 360 image.",
      value: "RE_360_IMAGE_ENHANCEMENT_VIRTUAL_FURNITURE",
      items: [
        {
          price: 85.0,
          name: "Residential Virtual Furniture",
          desc:
            "Residential: Suitable for images of bedrooms, living rooms, dining rooms, etc.",
          value: "RE_360_IMAGE_ENHANCEMENT_VIRTUAL_FURNITURE_RESIDENTIAL",
          example_link:
            "https://tours.propertyrender.com/share/7Z1mp?fs=1&vr=1&zoom=1&initload=0&thumbs=1&chromeless=1&logo=-1",
        },
        {
          price: 120.0,
          name: "Commercial Virtual Furniture",
          desc:
            "Commercial: Suitable for images of office space, meeting rooms, cafes, etc.",
          value: "RE_360_IMAGE_ENHANCEMENT_VIRTUAL_FURNITURE_COMMERCIAL",
          example_link:
            "https://tours.propertyrender.com/share/7Z1mG?fs=1&vr=1&sd=1&thumbs=1&chromeless=1&logo=0",
        },
      ],
    },
  ],
  RE_FLOOR_PLANS: [
    {
      name: "Select Floor Plan Style",
      value: "RE_FLOOR_PLANS_STYLE",
      thumb_items: [
        {
          name: "2D Floorplan (Black & White)",
          value: "RE_FLOOR_PLANS_STYLE_2D_BLACK_WHITE",
          img: "/assets/img/services/floor_plan_style/BLACK_WHITE_TYPE1.jpg",
          price: 20.0,
          unit: 'floor',
        },
        {
          name: "2D Floor Plan (Colour) - Type 1",
          value: "RE_FLOOR_PLANS_STYLE_2D_COLOUR_TYPE_1",
          img: "/assets/img/services/floor_plan_style/COLOUR_TYPE1.jpg",
          price: 25.0,
          unit: 'floor',
        },
        {
          name: "2D Floor Plan (Colour) - Type 2",
          value: "RE_FLOOR_PLANS_STYLE_2D_COLOUR_TYPE_2",
          img: "/assets/img/services/floor_plan_style/COLOUR_TYPE2.jpg",
          price: 25.0,
          unit: 'floor',
        },
        {
          name: "3D Floorplan - Type 1",
          value: "RE_FLOOR_PLANS_STYLE_3D_TYPE_1",
          img: "/assets/img/services/floor_plan_style/3D_COLOUR_Type_1.jpg",
          price: 30.0,
          unit: 'floor',
        },
        {
          name: "3D Floorplan - Type 2",
          value: "RE_FLOOR_PLANS_STYLE_3D_TYPE_2",
          img: "/assets/img/services/floor_plan_style/3D_Floor_Plan_Type2.png",
          price: 35.0,
          unit: 'floor',
        },
        {
          name: "Watercolour Floorplan",
          value: "RE_FLOOR_PLANS_STYLE_WATERCOLOUR",
          img: "/assets/img/services/floor_plan_style/Watercolour.jpg",
          price: 80.0,
          unit: 'floor',
        },
      ],
    },
    {
      name: "Free Add-ons",
      value: "RE_FLOOR_PLANS_FREE_ADDONS",
      itemsType: "SELECT_MULTIPLE",
      example_images: [
        "/assets/img/services/example/FPTemplate.jpg",
      ],
      items: [
        {
          name: "Disclaimer",
          value: "RE_FLOOR_PLANS_FREE_ADDONS_DISCLAIMER",
          price: 0,
          currency: "AUD",
        },
        {
          name: "Dimensions",
          value: "RE_FLOOR_PLANS_FREE_ADDONS_DIMENSIONS",
          price: 0,
          currency: "AUD",
        },
        {
          name: "Logo (Left)",
          value: "RE_FLOOR_PLANS_FREE_ADDONS_LOGO_LEFT",
          price: 0,
          currency: "AUD",
        },
        {
          name: "Logo (Right)",
          value: "RE_FLOOR_PLANS_FREE_ADDONS_LOGO_RIGHT",
          price: 0,
          currency: "AUD",
        },
      ],
    },
    {
      name: "Paid Add-ons",
      value: "RE_FLOOR_PLANS_PAID_ADDONS",
      itemsType: "SELECT_ONE",
      items: [
        {
          name: "Site Plan",
          value: "RE_FLOOR_PLANS_PAID_ADDONS_SITE_PLAN",
          price: 10,
          currency: "AUD",
        },
      ],
    },
  ],
  RE_VIRTUAL_STAGING: [
    {
      name: "Residential",
      desc: "Suitable for images of bedrooms, living rooms, dining rooms, etc.",
      value: "RE_VIRTUAL_STAGING_RESIDENTIAL",
      price: 35.0,
      example_images: [
        "/assets/img/services/example/RE_VIRTUAL_STAGING/residential/1A.JPG",
        "/assets/img/services/example/RE_VIRTUAL_STAGING/residential/1B.jpg",
        "/assets/img/services/example/RE_VIRTUAL_STAGING/residential/2A.JPG",
        "/assets/img/services/example/RE_VIRTUAL_STAGING/residential/2B.jpg",
        "/assets/img/services/example/RE_VIRTUAL_STAGING/residential/3A.JPG",
        "/assets/img/services/example/RE_VIRTUAL_STAGING/residential/3B.jpg",
      ],
    },
    {
      name: "Commercial",
      desc: "Suitable for images of office space, meeting rooms, cafes, etc.",
      value: "RE_VIRTUAL_STAGING_COMMERCIAL",
      price: 45.0,
      example_images: [
        "/assets/img/services/example/RE_VIRTUAL_STAGING/commercial/1A.jpg",
        "/assets/img/services/example/RE_VIRTUAL_STAGING/commercial/1B.jpg",
        "/assets/img/services/example/RE_VIRTUAL_STAGING/commercial/2A.jpg",
        "/assets/img/services/example/RE_VIRTUAL_STAGING/commercial/2B.jpg",
      ],
    },
    {
      name: "Item Removal",
      desc:
        "Digital removal of small and large clutter within your image. Price is per image.",
      value: "RE_VIRTUAL_STAGING_ITEM_REMOVAL",
      items: [
        {
          price: 5.0,
          name: "Remove 1-3 Small Items",
          desc: "Remove 1-3 Small Items",
          value: "PR_REAL_ESTATE_PHOTO_RETOUCHING_ITEM_REMOVAL_SMALL_ITEMS",
          example_images: [
            "/assets/img/services/example/small_item_removal_before.jpg",
            "/assets/img/services/example/small_item_removal_after.jpg",
          ],
        },
        {
          price: 10.0,
          name: "Remove 3+ Small Items or Large Items",
          desc: "Remove 3+ Small Items or Large Items",
          value: "PR_REAL_ESTATE_PHOTO_RETOUCHING_ITEM_REMOVAL_LARGE_ITEMS",
          example_images: [
            "/assets/img/services/example/large_item_removal_before.jpg",
            "/assets/img/services/example/large_item_removal_after.jpg",
          ],
        },
      ],
    },
  ],
  RE_360_VIRTUAL_STAGING: [
    {
      name: "Residential",
      desc: "Suitable for images of bedrooms, living rooms, dining rooms, etc.",
      value: "RE_VIRTUAL_STAGING_RESIDENTIAL",
      price: 85.0,
      example_link:
        "https://tours.propertyrender.com/share/7Z1mp?fs=1&vr=1&zoom=1&initload=0&thumbs=1&chromeless=1&logo=-1",
    },
    {
      name: "Commercial",
      desc: "Suitable for images of office space, meeting rooms, cafes, etc.",
      value: "RE_VIRTUAL_STAGING_COMMERCIAL",
      price: 120.0,
      example_link:
        "https://tours.propertyrender.com/share/7Z1mG?fs=1&vr=1&sd=1&thumbs=1&chromeless=1&logo=0",
    },
  ],
  RE_MOTION_PICTURE: [
    {
      name: "Item Removal",
      value: "RE_MOTION_PICTURE_ITEM_REMOVAL",
      desc:
        "Digital removal of small and large clutter within your image. Price is per image.",
      items: [
        {
          price: 5.0,
          name: "Remove 1-3 Small Items",
          desc: "Remove 1-3 Small Items",
          value: "RE_MOTION_PICTURE_ITEM_REMOVAL_SMALL_ITEMS",
          example_images: [
            "/assets/img/services/example/DSC_2117_before.jpg",
            "/assets/img/services/example/DSC_2117_after.jpg",
          ],
        },
        {
          price: 10.0,
          name: "Remove 3+ Small items or Large items",
          desc: "Remove 3+ Small items or Large items",
          value: "RE_MOTION_PICTURE_ITEM_REMOVAL_LARGE_ITEMS",
          example_images: [
            "/assets/img/services/example/large_item_removal_before.jpg",
            "/assets/img/services/example/large_item_removal_after.jpg",
          ],
        },
      ],
    },
    {
      name: "Day to Dusk Conversion",
      desc: "Conversion of daytime to twilight.",
      value: "RE_MOTION_PICTURE_DAY_TO_DUSK_CONVERSION",
      price: 4.0,
      example_images: [
        "/assets/img/services/example/1A.JPG",
        "/assets/img/services/example/1B.jpg",
      ],
    },
  ],
  RE_VIDEO: [
    {
      name: "Select video length and quantity below.",
      items: [
        {
          name: "Video 30 sec",
          value: "VIDEO_30_SEC",
          desc: "Video 30 sec",
          unit: "Video",
          price: 36.0,
        },
        {
          name: "Video 60 sec",
          value: "VIDEO_60_SEC",
          desc: "Video 60 sec",
          unit: "Video",
          price: 54.0,
        },
        {
          name: "Video 90 sec",
          value: "VIDEO_90_SEC",
          desc: "Video 90 sec",
          unit: "Video",
          price: 72.0,
        },
        {
          name: "Video 120 sec",
          value: "VIDEO_120_SEC",
          desc: "Video 120 sec",
          unit: "Video",
          price: 84.0,
        },
        {
          name: "Video Package (30s, 60, 90s)",
          value: "VIDEO_PACKAGE_SEC",
          desc: "Video Package (30s, 60, 90s)",
          unit: "Video",
          price: 171.0,
        },
      ],
    },
  ],
  RE_SLIDE_SHOWS: [
    {
      name: "Select from the options below.",
      items: [
        {
          name: "Standard Slideshow 30 sec",
          desc: "Standard Slideshow 30 sec",
          value: "STANDARD_SLIDESHOW_30_SEC",
          unit: "Slide Show",
          price: 15.0,
        },
        {
          name: "Premium Slideshow 90 sec",
          desc: "Premium Slideshow 90 sec",
          value: "PREMIUM_SLIDESHOW_90_SEC",
          unit: "Slide Show",
          price: 45.0,
        },
      ],
    },
  ],
  RE_PROPERTY_MICROSITES: [
    {
      name: "Property Microsite (Includes 6 Sections)",
      price: 600,
      value: "PROPERTY_MICROSITE_6_SECTIONS",
    },
    {
      name: "Copywriting",
      price: 250,
      value: "PROPERTY_MICROSITE_COPYWRITING",
    },
  ],
  RE_COPYWRITING: [
    {
      name: "250 words",
      price: 140,
      value: "RE_COPYWRITING_250_WORDS",
    },
    {
      name: "500 words",
      price: 250,
      value: "RE_COPYWRITING_500_WORDS",
    },
  ],
  PD_AERIAL_EDITING: [
    {
      name: "Item Removal",
      desc:
        "Digital removal of small and large clutter within your image. Price is per image.",
      value: "PD_AERIAL_EDITING_ITEM_REMOVAL",
      items: [
        {
          price: 5.0,
          name: "Remove 1-3 Small Items",
          desc: "Remove 1-3 Small Items (i.e. 1-3 Parked vehicles)",
          value: "PD_AERIAL_EDITING_ITEM_REMOVAL_SMALL_ITEMS",
        },
        {
          price: 10.0,
          name: "Remove 3+ Small Items or Large Items",
          desc:
            "Remove 3+ Small Items or Large Items (i.e. Several Vehicles or Construction debris and machinery)",
          value: "PD_AERIAL_EDITING_ITEM_REMOVAL_LARGE_ITEMS",
        },
      ],
      example_images: [
        "/assets/img/services/example/Aerial_Editing_removal_b.jpg",
        "/assets/img/services/example/Aerial_Editing_removal_a.jpg",
      ],
    },
    {
      name: "Day to Dusk Conversion",
      desc: "Conversion of daytime to twilight.",
      value: "PD_AERIAL_EDITING_DAY_TO_DUSK_CONVERSION",
      price: 4.0,
      example_images: [
        "/assets/img/services/example/1A.JPG",
        "/assets/img/services/example/1B.jpg",
      ],
    },
    {
      name: "Colour Fade",
      desc:
        "Colour fade is the process of removing colour saturation of the entire image except for the subject property.",
      value: "PD_AERIAL_EDITING_COLOUR_FADE",
      price: 2.5,
      example_images: [
        "/assets/img/services/example/colour_fade_before.jpg",
        "/assets/img/services/example/colour_fade_after.jpg",
      ],
    },
    {
      name: "Location Pin-Drop",
      desc:
        "Location pin-drop is the placement of a location marker on any points of interest within close proximity to the property.",
      value: "PD_AERIAL_EDITING_LOCATION_PIN_DROP",
      price: 2.5,
      example_images: [
        "/assets/img/services/example/location_pindrop_before.jpg",
        "/assets/img/services/example/location_pindrop_after.jpg",
      ],
    },
    {
      name: "Single Lot Highlight",
      desc:
        "Single Lot Highlight includes a boundary line around the property.",
      value: "PD_AERIAL_EDITING_SINGLE_LOT_HIGHLIGHT",
      price: 2.0,
      example_images: [
        "/assets/img/services/example/outline_before.jpg",
        "/assets/img/services/example/outline_after.jpg",
      ],
    },
    {
      name: "Multiple Lot Highlight",
      desc:
        "Multiple Lot Highlight includes multiple boundary lines around the subdivsion lots.",
      value: "PD_AERIAL_EDITING_MULTIPLE_LOT_HIGHLIGHT",
      price: 3.0,
      example_images: [
        "/assets/img/services/example/overlay_before.jpg",
        "/assets/img/services/example/overlay_after.jpg",
      ],
    },
  ],
  PD_3D_EXTERIOR_RENDERS: [
    {
      name: "Residential Property",
      items: [
        {
          name: "House - Single Storey",
          desc: "House - Single Storey",
          value: "PD_3D_EXTERIOR_RENDERS_HOUSE_SINGLE_STOREY",
          price: 550.0,
          unit: "render",
        },
        {
          name: "House - Double Storey",
          desc: "House - Double Storey",
          value: "PD_3D_EXTERIOR_RENDERS_HOUSE_DOUBLE_STOREY",
          price: 650.0,
          unit: "render",
        },
        {
          name: "Duplex - Single Storey",
          desc: "Duplex - Single Storey",
          value: "PD_3D_EXTERIOR_RENDERS_DUPLEX_SINGLE_STOREY",
          price: 750.0,
          unit: "render",
        },
        {
          name: "Duplex - Double Storey",
          desc: "Duplex - Double Storey",
          value: "PD_3D_EXTERIOR_RENDERS_DUPLEX_DOUBLE_STOREY",
          price: 850.0,
          unit: "render",
        },
        {
          name: "Apartment Building",
          desc: "Apartment Building",
          value: "PD_3D_EXTERIOR_RENDERS_APARTMENT_BUILDING",
          price: 1050.0,
          unit: "render",
        },
        {
          name: "Photomontage: Incorporate into Photo",
          desc: "Incorporate into Photograph",
          value:
            "PD_3D_EXTERIOR_RENDERS_RESIDENTIAL_PHOTOMONTAGE",
          price: 100.0,
          unit: "render",
          required: "AT_LEAST_ONE",
        },
      ],
    },
    {
      name: "Commercial Property",
      items: [
        {
          name: "Single Storey Building (i.e. Retail Store)",
          desc: "Single Storey Building (i.e. Retail Store)",
          value: "PD_3D_EXTERIOR_RENDERS_SINGLE_STOREY_BUILDING",
          price: 750.0,
          unit: "render",
        },
        {
          name: "Multiple Storey Building (i.e. Office Building)",
          desc: "Multiple Storey Building (i.e. Office Building)",
          value: "PD_3D_EXTERIOR_RENDERS_MULTIPLE_STOREY_BUILDING",
          price: 1050.0,
          unit: "render",
        },
        {
          name: "Photomontage: Incorporate into Photo",
          desc: "Incorporate the render into an existing photograph",
          value:
            "PD_3D_EXTERIOR_RENDERS_COMMERCIAL_PHOTOMONTAGE",
          price: 1050.0,
          unit: "render",
          required: "AT_LEAST_ONE",
        },
      ],
    },
  ],
  PD_INTERIOR_RENDERS: [
    {
      name: "Residential Property",
      price: 450.0,
      currency: "AUD",
      unit: "render",
      value: "PD_INTERIOR_RENDERS_RESIDENTIAL",
    },
    {
      name: "Commercial Property",
      price: 650.0,
      currency: "AUD",
      value: "PD_INTERIOR_RENDERS_COMMERCIAL",
      unit: "render",
    },
  ],
  PD_3D_RENDERS_STREETSCAPE: [
    {
      name: "Residential Property",
      value: "PD_3D_RENDERS_STREETSCAPE_RESIDENTIAL",
      items: [
        {
          name: "Single Building",
          price: 1050,
          currency: "AUD",
          unit: 'Render',
          value: "PD_3D_RENDERS_STREETSCAPE_RESIDENTIAL_SINGLE_BUILDING",
        },
        {
          name: "2 - 3 Buildings",
          price: 1150,
          currency: "AUD",
          unit: 'Render',
          value: "PD_3D_RENDERS_STREETSCAPE_RESIDENTIAL_2_3_BUILDINGS",
        },
        {
          name: "4 - 7+ Buildings",
          price: 1350,
          currency: "AUD",
          unit: 'Render',
          value: "PD_3D_RENDERS_STREETSCAPE_RESIDENTIAL_4_7_BUILDINGS",
        },
      ]
    },
    {
      name: "Commercial Property",
      value: "PD_3D_RENDERS_STREETSCAPE_COMMERCIAL",
      items: [
        {
          name: "Single Building",
          price: 1150,
          currency: "AUD",
          unit: 'Render',
          value: "PD_3D_RENDERS_STREETSCAPE_COMMERCIAL_SINGLE_BUILDING",
        },
        {
          name: "Multiple Buildings",
          price: 1350,
          currency: "AUD",
          unit: 'Render',
          value: "PD_3D_RENDERS_STREETSCAPE_COMMERCIAL_MULTIPLE_BUILDINGS",
        },
      ]
    },
  ],
  PD_3D_RENDERS_AERIAL_RENDER: [
    {
      name: "Residential Property",
      price: 1050.0,
      currency: "AUD",
      unit: "render",
      value: "PD_3D_RENDERS_AERIAL_RENDER_RESIDENTIAL",
      items: [
        {
          name: "Photo Montage  - Incorporate into Photograph",
          value: "PD_3D_RENDERS_AERIAL_RENDER_RESIDENTIAL_PHOTO_MONTAGE",
          price: 100.0,
          currency: "AUD",
          unit: "render",
        },
      ],
    },
    {
      name: "Commercial Property",
      price: 1250.0,
      currency: "AUD",
      unit: "render",
      value: "PD_3D_RENDERS_AERIAL_RENDER_COMMERICAL",
      items: [
        {
          name: "Photo Montage  - Incorporate into Photograph",
          value: "PD_3D_RENDERS_AERIAL_RENDER_COMMERICAL_PHOTO_MONTAGE",
          price: 100.0,
          currency: "AUD",
          unit: "render",
        },
      ],
    },
  ],
  PD_3D_INTERIOR_RENDERS_360_DEGREE: [
    {
      name: "Residential Property",
      value: "PD_3D_INTERIOR_RENDERS_360_DEGREE_RESIDENTIAL",
      items: [
        {
          name: "Interior",
          value: "PD_3D_INTERIOR_RENDERS_360_DEGREE_RESIDENTIAL_INTERIOR",
          price: 750.0,
          currency: "AUD",
          unit: "360 Render",
        },
        {
          name: "Exterior",
          value: "PD_3D_INTERIOR_RENDERS_360_DEGREE_RESIDENTIAL_EXTERIOR",
          price: 850.0,
          currency: "AUD",
          unit: "360 Render",
        },
      ]
    },
    {
      name: "Commercial Property",
      value: "PD_3D_INTERIOR_RENDERS_360_DEGREE_COMMERCIAL",
      items: [
        {
          name: "Interior",
          value: "PD_3D_INTERIOR_RENDERS_360_DEGREE_COMMERCIAL_INTERIOR",
          price: 850.0,
          currency: "AUD",
          unit: "360 Render",
        },
        {
          name: "Exterior",
          value: "PD_3D_INTERIOR_RENDERS_360_DEGREE_COMMERCIAL_EXTERIOR",
          price: 950.0,
          currency: "AUD",
          unit: "360 Render",
        },
      ]
    },
  ],
  PD_2D_RENDERS_EXTERIOR_ELEVATION: [
    {
      name: "Residential Building",
      price: 120.0,
      currency: "AUD",
      unit: "Elevation",
      value: "PD_2D_RENDERS_EXTERIOR_ELEVATION_RESIDENTIAL",
    },
    {
      name: "Commercial Building",
      price: 150.0,
      currency: "AUD",
      unit: "Elevation",
      value: "PD_2D_RENDERS_EXTERIOR_ELEVATION_COMMERCIAL",
    },
  ],
  PD_BUDGET_EXTERIOR_RENDER: [
    {
      name: "Residential",
      price: 150.0,
      currency: "AUD",
      value: "PD_BUDGET_EXTERIOR_RENDER_RESIDENTIAL",
      unit: "render",
    },
    {
      name: "Commercial",
      price: 150.0,
      currency: "AUD",
      unit: "render",
      value: "PD_BUDGET_EXTERIOR_RENDER_COMMERCIAL",
    },
  ],
  PD_WALKTHROUGHS: [
    {
      name: "Residential Property",
      value: "PD_WALKTHROUGHS_RESIDENTIAL",
      items: [
        {
          name: "Interior Virtual Walkthrough",
          price: 800,
          currency: "AUD",
          unit: 'hotspot',
          value: "PD_WALKTHROUGHS_RESIDENTIAL_INTERIOR",
        },
        {
          name: "Exterior Virtual Walkthrough",
          price: 850,
          currency: "AUD",
          unit: 'hotspot',
          value: "PD_WALKTHROUGHS_RESIDENTIAL_EXTERIOR",
        },
      ]
    },
    {
      name: "Commercial Property",
      value: "PD_WALKTHROUGHS_COMMERCIAL",
      items: [
        {
          name: "Interior Virtual Walkthrough",
          price: 900,
          currency: "AUD",
          unit: 'hotspot',
          value: "PD_WALKTHROUGHS_COMMERCIAL_INTERIOR",
        },
        {
          name: "Exterior Virtual Walkthrough",
          price: 950,
          currency: "AUD",
          unit: 'hotspot',
          value: "PD_WALKTHROUGHS_COMMERCIAL_EXTERIOR",
        },
      ]
    },
  ],
  PD_FLYTHROUGHS: [
    {
      name: "Residential Property",
      items: [
        {
          name: "30 Seconds",
          value: "PD_FLYTHROUGHS_RESIDENTIAL_30S",
          price: 2200.0,
          currency: "AUD",
          unit: "render",
        },
        {
          name: "60 Seconds",
          value: "PD_FLYTHROUGHS_RESIDENTIAL_60S",
          price: 4100.0,
          currency: "AUD",
          unit: "render",
        },
        {
          name: "90 Seconds",
          value: "PD_FLYTHROUGHS_RESIDENTIAL_90S",
          price: 6100.0,
          currency: "AUD",
          unit: "render",
        },
        {
          name: "120 Seconds",
          value: "PD_FLYTHROUGHS_RESIDENTIAL_120S",
          price: 7000.0,
          currency: "AUD",
          unit: "render",
        },
      ],
    },
    {
      name: "Commercial Property",
      items: [
        {
          name: "30 Seconds",
          value: "PD_FLYTHROUGHS_COMMERCIAL_30S",
          price: 2400.0,
          currency: "AUD",
          unit: "render",
        },
        {
          name: "60 Seconds",
          value: "PD_FLYTHROUGHS_COMMERCIAL_60S",
          price: 4200.0,
          currency: "AUD",
          unit: "render",
        },
        {
          name: "90 Seconds",
          value: "PD_FLYTHROUGHS_COMMERCIAL_90S",
          price: 6300.0,
          currency: "AUD",
          unit: "render",
        },
        {
          name: "120 Seconds",
          value: "PD_FLYTHROUGHS_COMMERCIAL_120S",
          price: 7200.0,
          currency: "AUD",
          unit: "render",
        },
      ],
    },
  ],
  PD_PREMIUM_RENDERS: [
    {
      name: 'Residential',
      items: [
        {
          name: 'Interior Render',
          price: 0,
          value: "PD_PREMIUM_RENDERS_INTERIOR"
        },
        {
          name: 'Exterior Render (House - Double Storey)',
          price: 0,
          value: "PD_PREMIUM_RENDERS_EXTERIOR_HOUSE_DOUBLE"
        },
        {
          name: 'Exterior Render (Duplex - Single Storey)',
          price: 0,
          value: "PD_PREMIUM_RENDERS_EXTERIOR_DUPLEX_SINGLE"
        },
        {
          name: 'Exterior Render (Duplex - Double Storey)',
          price: 0,
          value: "PD_PREMIUM_RENDERS_EXTERIOR_DUPLEX_DOUBLE"
        },
        {
          name: 'Exterior Render (Streetscape)',
          price: 0,
          value: "PD_PREMIUM_RENDERS_EXTERIOR_STREETSCAPE"
        },
        {
          name: 'Exterior Render (Apartment Building)',
          price: 0,
          value: "PD_PREMIUM_RENDERS_EXTERIOR_APARTMENT_BUILDING"
        },
        {
          name: 'Aerial Render',
          price: 0,
          value: "PD_PREMIUM_RENDERS_AERIAL_RENDER"
        },
        {
          name: '360 Render',
          price: 0,
          value: "PD_PREMIUM_RENDERS_360_RENDERS"
        },
      ]
    },
    {
      name: 'Commercial',
      items: [
        {
          name: 'Interior Render',
          price: 0,
          value: "PD_PREMIUM_RENDERS_COMMERCIAL_INTERIOR"
        },
        {
          name: 'Exterior Render (Single Storey Building - i.e. Retail Store)',
          price: 0,
          value: "PD_PREMIUM_RENDERS_COMMERCIAL_EXTERIOR_SINGLE"
        },
        {
          name: 'Exterior Render (Multiple Storey Building - i.e. Office Building)',
          price: 0,
          value: "PD_PREMIUM_RENDERS_COMMERCIAL_EXTERIOR_DOUBLE"
        },
        {
          name: 'Aerial Render',
          price: 0,
          value: "PD_PREMIUM_RENDERS_COMMERCIAL_AERIAL_RENDER"
        },
        {
          name: '360 Render',
          price: 0,
          value: "PD_PREMIUM_RENDERS_COMMERCIAL_360_RENDER"
        },
      ]
    },
    {
      name: 'Other Options',
      items: [
        {
          name: 'Photomontage: Incorporate Render into Photograph',
          price: 0,
          value: "PD_PREMIUM_RENDERS_OTHER_PHOTOMOTAGE"
        },
      ]
    }
  ],
  PD_COMMERCIAL_FLOOR_PLANS: [
    {
      name: "",
      desc: "Please select the number of house or unit types required for your project from at least one of the styles below.",
      value: "PD_COMMERCIAL_FLOOR_PLANS_NUMBER_HOUSE_OR_UNIT_TYPES",
      is_collapse: false,
      thumb_items: [
        {
          name: "B & W",
          value: "PD_COMMERCIAL_FLOOR_PLANS_NUMBER_HOUSE_OR_UNIT_TYPES_BLACK_WHITE",
          img: "/assets/img/services/floor_plan_style/BLACK_WHITE_TYPE1.jpg",
          price: 40.0,
          unit: 'Layout',
        },
        {
          name: "2D Colour",
          value: "PD_COMMERCIAL_FLOOR_PLANS_NUMBER_HOUSE_OR_UNIT_TYPES_2D_COLOUR",
          img: "/assets/img/services/floor_plan_style/COLOUR_TYPE1.jpg",
          price: 60.0,
          unit: 'Layout',
        },
        {
          name: "3D Colour",
          value: "PD_COMMERCIAL_FLOOR_PLANS_NUMBER_HOUSE_OR_UNIT_TYPES_3D_COLOUR",
          img: "/assets/img/services/floor_plan_style/COLOUR_TYPE2.jpg",
          price: 80.0,
          unit: 'Layout',
        }
      ],
    },
    {
      name: "",
      desc: "Please select the specifications you would like included on the floor plans for your project.",
      value: "PD_COMMERCIAL_FLOOR_PLANS_SPECIFICATIONS",
      itemsType: "SELECT_MULTIPLE",
      is_collapse: false,
      items: [
        {
          name: "Disclaimer",
          price: 0,
          currency: "AUD",
          value: "PD_COMMERCIAL_FLOOR_PLANS_SPECIFICATIONS_DISCLAIMER",
        },
        {
          name: "Dimensions",
          price: 0,
          currency: "AUD",
          value: "PD_COMMERCIAL_FLOOR_PLANS_SPECIFICATIONS_DIMENSIONS",
        },
        {
          name: "Room Names",
          price: 0,
          currency: "AUD",
          value: "PD_COMMERCIAL_FLOOR_PLANS_SPECIFICATIONS_ROOM_NAMES",
        },
        {
          name: "Project Branding",
          price: 0,
          currency: "AUD",
          value: "PD_COMMERCIAL_FLOOR_PLANS_SPECIFICATIONS_PROJECT_BRANDING",
        },
        {
          name: "Total Areas",
          price: 0,
          currency: "AUD",
          value: "PD_COMMERCIAL_FLOOR_PLANS_SPECIFICATIONS_TOTAL_AREAS",
        },
      ]
    }
  ],
  PD_FLOOR_PLAN_RENDERS: [
    {
      name: 'Number of levels',
      is_collapse: false,
      first_price: 350,
      price: 250,
      currency: "AUD",
      value: "PD_FLOOR_PLAN_RENDERS_NUMBER_LEVELS"
    }
  ],
  PD_TOUCH_SCREEN_SOLUTIONS: [
    {
      name: 'Touch Screen Hardware (Physical Screen)',
      price: 0,
      currency: 'AUD',
      value: 'PD_TOUCH_SCREEN_SOLUTIONS_HARDWARE',
    },
    {
      name: 'Touch Screen interface and hardware',
      price: 0,
      currency: 'AUD',
      value: 'PD_TOUCH_SCREEN_SOLUTIONS_INTERFACE',
    }
  ],
  PD_CRM_DEVELOPMENT: [
    {
      name: 'Retirement Village Operations',
      price: 0,
      currency: 'AUD',
      value: 'PD_CRM_DEVELOPMENT_RETIREMENT_VILLAGE_OPERATIONS',
    },
    {
      name: 'Real Estate Agency',
      price: 0,
      currency: 'AUD',
      value: 'PD_CRM_DEVELOPMENT_REAL_ESTATE_AGENCY',
    },
    {
      name: 'Project Marketing',
      price: 0,
      currency: 'AUD',
      value: 'PD_CRM_DEVELOPMENT_PROJECT_MARKETING',
    }
  ],

  VR_EXTERIOR: [
    {
      name:
        "Add doors, windows, fireplace, outdoor lighting and other exterior features.",
      price: 25.0,
      currency: "AUD",
      value: "VR_EXTERIOR_ADD_FEATURES",
    },
    {
      name: "Change colour and/or texture of existing external walls.",
      price: 55.0,
      currency: "AUD",
      value: "VR_EXTERIOR_CHANGE_COLOUR_TEXTURE",
    },
    {
      name:
        "Digitally declutter furniture, debris, or construction materials.",
      price: 10.0,
      currency: "AUD",
      value: "VR_EXTERIOR_CONSTRUCTION_MATERIALS",
    },
    {
      name: "Remove or change the colour and/or texture of a roof.",
      price: 25.0,
      currency: "AUD",
      value: "VR_EXTERIOR_REMOVE_ROOF",
    },
    {
      name: "Remove or change the colour and/or texture of a driveway.",
      price: 25.0,
      currency: "AUD",
      value: "VR_EXTERIOR_REMOVE_DRIVEWAY",
    },
    {
      name: "Change colour of house exterior (paint colour).",
      price: 3.0,
      currency: "AUD",
      value: "VR_EXTERIOR_CHANGE_COLOUR_HOUSE_EXTERIOR",
    },
    {
      name: "Add small plants and leaf foliage to existing trees.",
      price: 25.0,
      currency: "AUD",
      value: "VR_EXTERIOR_ADD_PLANS_LEAF",
    },
    {
      name:
        "Landscape the property, including trees, driveway, grass, gardens and mixture of small to large plants.",
      price: 75.0,
      currency: "AUD",
      value: "VR_EXTERIOR_LANDSCAPE_PROPERTY",
    },
    {
      name:
        "Place outdoor furniture, BBQ, large potted plants, outdoor dining setting, etc. to outdoor area.",
      price: 35.0,
      currency: "AUD",
      value: "VR_EXTERIOR_PLACE_OUTDOOR_FURNITURE",
    },
    {
      name:
        "Add external surface around pool area (i.e. timber decking, paving, etc) and/or pool deck chairs, pool fencing and minor landscaping.",
      price: 35.0,
      currency: "AUD",
      value: "VR_EXTERIOR_ADD_EXTERNAL_SURFACE",
    },
    {
      name: "Install an in-ground swimming pool.",
      price: 50.0,
      currency: "AUD",
      value: "VR_EXTERIOR_INSTALL_SWIMMING_POOL",
    },
    {
      name:
        "Install outdoor entertainment area (i.e. patio area, timber deck, veranda, pergola, alfresco area, etc.).",
      price: 60,
      currency: "AUD",
      value: "VR_EXTERIOR_INSTALL_OUTDOOR",
    },
  ],
  VR_INTERIOR: [
    {
      name:
        "Place commercial furniture (office desks and chairs, indoor plants, computers, lights, rugs, etc) within the room/interior space.",
      price: 55.0,
      currency: "AUD",
      value: "VR_INTERIOR_PLACE_COMMERCIAL_FURNITURE",
    },
    {
      name:
        "Place residential furniture (dining table, sofa sets, rugs, indoor plants, beds, fridge and other appliances, etc) within the room/interior space.",
      price: 35.0,
      currency: "AUD",
      value: "VR_INTERIOR_PLACE_RESIDENTIAL_FURNITURE",
    },
    {
      name:
        "Bathroom renovation including changing fixtures and fittings(i.e. benchtops, bath, shower, sink, mirror/s and tapware).",
      price: 80.0,
      currency: "AUD",
      value: "VR_INTERIOR_BATHROOM_RENOVATION",
    },
    // {
    //   name: "Bathroom renovation including changing fixtures and fittings.",
    //   desc: "(i.e. benchtops, sink tapware, splashback, fridge, stove/oven)",
    //   price: 80.00,
    //   currency: "AUD",
    //   value: "VR_EXTERIOR_REMOVE_ROOF",
    // },
    {
      name:
        "Change or add interior fixtures such as doors, windows, blinds, curtains, indoor fireplace, etc.",
      price: 25.0,
      currency: "AUD",
      value: "VR_INTERIOR_CHANGE_FIXTURES",
    },
    {
      name:
        "Removal of an interior wall to make way for building the interior space behind or in place of the wall that has been removed.",
      price: 50.0,
      currency: "AUD",
      value: "VR_INTERIOR_REMOVAL_INTERIOR_WALL",
    },
    {
      name: "Ceiling replacement or colour change.",
      price: 15.0,
      currency: "AUD",
      value: "VR_INTERIOR_CEILING_REPLACEMENT",
    },
    {
      name: "Wall replacement or colour change.",
      price: 15.0,
      currency: "AUD",
      value: "VR_INTERIOR_WALL_REPLACEMENT",
    },
    {
      name:
        "New window or change of existing window frame style and/or colour.",
      price: 25.0,
      currency: "AUD",
      value: "VR_INTERIOR_NEW_WINDOW",
    },
    {
      name: "Flooring replacement of material/texture.",
      price: 25.0,
      currency: "AUD",
      value: "VR_INTERIOR_FLOORING",
    },
  ],
  VR_POOL_CONSTRUCTION: [
    {
      name: "Install an in-ground swimming pool.",
      value: "VR_POOL_CONSTRUCTION_INSTALL_SWIMMING_POOL",
      price: 50.0,
      currency: "AUD",
    },
    {
      name:
        "Add external surface around pool area (i.e. timber decking, paving, etc) and/or pool deck chairs, pool fencing and minor landscaping.",
      value: "VR_POOL_CONSTRUCTION_ADD_EXTERNAL_SURFACE",
      price: 35.0,
      currency: "AUD",
    },
    {
      name:
        "Install outdoor entertainment area (i.e. patio area, timber deck, veranda, pergola, alfresco area, etc.)",
      value: "VR_POOL_CONSTRUCTION_INSTALL_OUTDOOR_ENTERTAINMENT_AREA",
      price: 60.0,
      currency: "AUD",
    },
    {
      name:
        "Place outdoor furniture, BBQ, large potted plants, outdoor dining setting, etc. to outdoor area.",
      value: "VR_POOL_CONSTRUCTION_PLACE_OUTDOOR_FURNITURE",
      price: 35.0,
      currency: "AUD",
    },
    {
      name:
        "Add landscaping including trees, driveway, grass, gardens and mixture of small to large plants.",
      value: "VR_POOL_CONSTRUCTION_ADD_LANDSCAPING",
      price: 75.0,
      currency: "AUD",
    },
    {
      name:
        "Add doors, windows, fireplace, outdoor lighting and other exterior features.",
      value: "VR_POOL_CONSTRUCTION_ADD_DOORS",
      price: 25.0,
      currency: "AUD",
    },
    {
      name: "Change colour and/or texture of existing external walls.",
      value: "VR_POOL_CONSTRUCTION_CHANGE_COLOUR",
      price: 55.0,
      currency: "AUD",
    },
    {
      name:
        "Digitally declutter furniture, debris, or construction materials.",
      value: "VR_POOL_CONSTRUCTION_DIGITALLY_DEDCLUTTER",
      price: 10.0,
      currency: "AUD",
    },
    {
      name: "Remove or change the colour and/or texture of a roof.",
      value: "VR_POOL_CONSTRUCTION_REMOVE_COLOUR_ROOF",
      price: 25.0,
      currency: "AUD",
    },
    {
      name: "Remove or change the colour and/or texture of a driveway.",
      value: "VR_POOL_CONSTRUCTION_REMOVE_COLOUR_DRIVEWAY",
      price: 25.0,
      currency: "AUD",
    },
    {
      name: "Change colour of house exterior (paint colour).",
      value: "VR_POOL_CONSTRUCTION_CHANGE_COLOUR_HOUSE_EXTERIOR",
      price: 3.0,
      currency: "AUD",
    },
    {
      name: "Add small plants and leaf foliage to existing trees.",
      value: "VR_POOL_CONSTRUCTION_ADD_SMALL_PLANTS",
      price: 25.0,
      currency: "AUD",
    },
  ],
  PM_BRAND_DEVELOPMENT: [
    {
      name: "Logo",
      price: 750.0,
      currency: "AUD",
      unit: "design",
      value: "PM_BRAND_DEVELOPMENT_LOGO",
    },
    {
      name: "Name and Logo",
      price: 1150.0,
      currency: "AUD",
      unit: "design",
      value: "PM_BRAND_DEVELOPMENT_NAME_LOGO",
    },
    {
      name: "Full Suite (Name, Logo and Colour Pallette)",
      price: 2600.0,
      currency: "AUD",
      unit: "design",
      value: "PM_BRAND_DEVELOPMENT_FULL_SUITE",
    },
  ],
  PM_SITE_PLAN: [
    {
      name: "Site Plan",
      price: 410.0,
      currency: "AUD",
      unit: "Plan",
      value: "PM_SITE_PLAN_DEV",
    },
    {
      name: "Custom Template Design",
      price: 120.0,
      currency: "AUD",
      unit: "Design",
      type: "YES_OR_NO",
      desc:
        "Select if you would like your site plan to include a branded template designed to match your project or company branding.",
      value: "PM_SITE_PLAN_CUSTOM_TEMPLATE_DESIGN",
    },
  ],
  PM_SITE_COMMERCIAL_FLOOR_PLAN: [
    {
      name: "Commercial Floor Plan",
      price: 80.0,
      currency: "AUD",
      unit: "Level",
      value: "PM_SITE_COMMERCIAL_FLOOR_PLAN_COMMERCIAL",
    },
    {
      name: "Custom Template Design",
      desc: "If you would like your floor plan to include a branded template design to match your project or company branding selet yes.",
      type: "YES_OR_NO",
      price: 120.0,
      unit: "Design",
      value: "PM_SITE_COMMERCIAL_FLOOR_PLAN_CUSTOM_TEMPLATE_DESIGN",
    },
  ],
  PM_DL_FLYERS: [
    {
      name: "Standard",
      price: 1600.0,
      currency: "AUD",
      unit: "design",
      value: "PM_DL_FLYERS_STANDARD",
    },
    {
      name: "Copywriting",
      price: 250.0,
      currency: "AUD",
      unit: "design",
      value: "PM_DL_FLYERS_COPYWRITING",
    },
  ],
  PM_INFO_BOOKLET: [
    {
      name: "4 to 6",
      price: 1100.0,
      currency: "AUD",
      unit: "design",
      value: "PM_INFO_BOOKLET_4_TO_6",
    },
    {
      name: "8 to 12",
      price: 2000.0,
      currency: "AUD",
      unit: "design",
      value: "PM_INFO_BOOKLET_8_TO_12",
    },
    {
      name: "14 to 18",
      price: 2800.0,
      currency: "AUD",
      unit: "design",
      value: "PM_INFO_BOOKLET_14_TO_18",
    },
    {
      name: "20 to 24",
      price: 3400.0,
      currency: "AUD",
      unit: "design",
      value: "PM_INFO_BOOKLET_20_TO_24",
    },
    {
      name: "26 to 30",
      price: 3900.0,
      currency: "AUD",
      unit: "design",
      value: "PM_INFO_BOOKLET_26_TO_30",
    },
    {
      name: "Copywriting",
      price: 250.0,
      currency: "AUD",
      unit: "design",
      value: "PM_INFO_BOOKLET_COPYWRITING",
    },
  ],
  PM_WEBSITES_LANDING_PAGE: [
    {
      name: "4 Sections Included",
      desc: "(i.e. Project, Location, Developer, Contact)",
      price: 1750.0,
      currency: "AUD",
      unit: "design",
      value: "PM_WEBSITES_LANDING_PAGE_4SECTIONS",
    },
    {
      name: "Copywriting",
      price: 250.0,
      currency: "AUD",
      unit: "design",
      value: "PM_WEBSITES_LANDING_PAGE_COPYWRITING",
    },
  ],
  PM_WEBSITES_POST_LAUNCH: [
    {
      name: "5-7 Sections Included",
      price: 4800.0,
      currency: "AUD",
      unit: "design",
      value: "PM_WEBSITES_POST_LAUNCH_5_7SECTIONS",
    },
    {
      name: "8-10 Sections Included",
      price: 8300.0,
      currency: "AUD",
      unit: "design",
      value: "PM_WEBSITES_POST_LAUNCH_8_10SECTIONS",
    },
    {
      name: "Copywriting",
      price: 250.0,
      currency: "AUD",
      unit: "design",
      extraType: "ALONE_SELECT",
      value: "PM_WEBSITES_POST_LAUNCH_COPYWRITING",
    },
  ],
  PS_CORFLUTE_SIGN: [
    {
      name: "A1 (594 x 841 mm)",
      value: "PS_CORFLUTE_SIGN_SIZE_A1_594_841",
      price: 60.0,
      unit: "Sign",
      currency: "AUD",
    },
    {
      name: "Extras",
      value: "PS_CORFLUTE_SIGN_EXTRAS",
      items: [
        {
          name: "Command™ Strips - Packs of 6 pairs",
          value: "PS_CORFLUTE_SIGN_EXTRAS_COMMAND",
          price: 11.0,
          unit: "Pack",
          currency: "AUD",
        },
        {
          name: "Corflute Sign Stands",
          value: "PS_CORFLUTE_SIGN_EXTRAS_CORFLUTE",
          price: 5.0,
          unit: "Each",
          currency: "AUD",
        },
      ],
    },
    {
      name: "Design Fee (if required)",
      value: "PS_CORFLUTE_SIGN_DESIGN_FEE",
      price: 90.0,
      unit: "Design",
      currency: "AUD",
    },
  ],
  PS_PULL_UP_BANNERS: [
    {
      name: "Select Size",
      value: "PS_PULL_UP_BANNERS_SIZE",
      items: [
        {
          name: "34 x 81 inches",
          value: "PS_PULL_UP_BANNERS_SIZE_42_81",
          price: 105.0,
          unit: "Banner",
          currency: "AUD",
        },
      ],
    },
    {
      name: "Design Fee (if required)",
      value: "PS_PULL_UP_BANNERS_DESIGN_FEE",
      price: 90.0,
      unit: "Design",
      currency: "AUD",
    },
  ],
  PS_BALMAIN: [
    {
      name: "25",
      value: "PS_BALMAIN_QUANTITY_25",
      price: 686.0,
      currency: "AUD",
    },
    {
      name: "50",
      value: "PS_BALMAIN_QUANTITY_50",
      price: 1040.0,
      currency: "AUD",
    },
    {
      name: "75",
      value: "PS_BALMAIN_QUANTITY_75",
      price: 1394.0,
      currency: "AUD",
    },
    {
      name: "100",
      value: "PS_BALMAIN_QUANTITY_100",
      price: 1743.0,
      currency: "AUD",
    },
    {
      name: "125",
      value: "PS_BALMAIN_QUANTITY_125",
      price: 2092.0,
      currency: "AUD",
    },
    {
      name: "150",
      value: "PS_BALMAIN_QUANTITY_150",
      price: 2436.0,
      currency: "AUD",
    },
    {
      name: "175",
      value: "PS_BALMAIN_QUANTITY_175",
      price: 2779.0,
      currency: "AUD",
    },
    {
      name: "200",
      value: "PS_BALMAIN_QUANTITY_200",
      price: 3123.0,
      currency: "AUD",
    },
    {
      name: "300",
      value: "PS_BALMAIN_QUANTITY_300",
      price: 4464.0,
      currency: "AUD",
    },
    {
      name: "400",
      value: "PS_BALMAIN_QUANTITY_400",
      price: 5770.0,
      currency: "AUD",
    },
    {
      name: "500",
      value: "PS_BALMAIN_QUANTITY_500",
      price: 7078.0,
      currency: "AUD",
    },
  ],
  PS_USB: [
    {
      name: "5",
      value: "PS_USB_QUANTITY_5",
      price: 90.0,
      currency: "AUD",
    },
    {
      name: "10",
      value: "PS_USB_QUANTITY_10",
      price: 155.0,
      currency: "AUD",
    },
    {
      name: "24",
      value: "PS_USB_QUANTITY_24",
      price: 373.0,
      currency: "AUD",
    },
    {
      name: "48",
      value: "PS_USB_QUANTITY_48",
      price: 748.0,
      currency: "AUD",
    },
    {
      name: "96",
      value: "PS_USB_QUANTITY_96",
      price: 1496.0,
      currency: "AUD",
    },
    {
      name: "144",
      value: "PS_USB_QUANTITY_144",
      price: 2243.0,
      currency: "AUD",
    },
    {
      name: "240",
      value: "PS_USB_QUANTITY_240",
      price: 3743.0,
      currency: "AUD",
    },
    {
      name: "360",
      value: "PS_USB_QUANTITY_360",
      price: 5611.0,
      currency: "AUD",
    },
    {
      name: "480",
      value: "PS_USB_QUANTITY_480",
      price: 7487.0,
      currency: "AUD",
    },
  ],
  PS_NAME_TAGS: [
    {
      name: "Select Quantity",
      value: "PS_NAME_TAGS_QUANTITY",
      itemsType: "SELECT_ONE",
      items: [
        {
          name: "10",
          value: "PS_NAME_TAGS_QUANTITY_10",
          price: 8.0,
          currency: "AUD",
        },
        {
          name: "20",
          value: "PS_NAME_TAGS_QUANTITY_20",
          price: 15.0,
          currency: "AUD",
        },
        {
          name: "30",
          value: "PS_NAME_TAGS_QUANTITY_30",
          price: 22.0,
          currency: "AUD",
        },
        {
          name: "40",
          value: "PS_NAME_TAGS_QUANTITY_40",
          price: 29.0,
          currency: "AUD",
        },
        {
          name: "50",
          value: "PS_NAME_TAGS_QUANTITY_50",
          price: 35.0,
          currency: "AUD",
        },
        {
          name: "100",
          value: "PS_NAME_TAGS_QUANTITY_100",
          price: 60.0,
          currency: "AUD",
        },
        {
          name: "200",
          value: "PS_NAME_TAGS_QUANTITY_200",
          price: 120.0,
          currency: "AUD",
        },
        {
          name: "300",
          value: "PS_NAME_TAGS_QUANTITY_300",
          price: 180.0,
          currency: "AUD",
        },
        {
          name: "400",
          value: "PS_NAME_TAGS_QUANTITY_400",
          price: 240.0,
          currency: "AUD",
        },
        {
          name: "500",
          value: "PS_NAME_TAGS_QUANTITY_500",
          price: 276.0,
          currency: "AUD",
        },
        {
          name: "1000",
          value: "PS_NAME_TAGS_QUANTITY_1000",
          price: 540.0,
          currency: "AUD",
        },
        {
          name: "2000",
          value: "PS_NAME_TAGS_QUANTITY_2000",
          price: 960.0,
          currency: "AUD",
        },
      ],
    },
    {
      name: "Design Fee (if required)",
      value: "PS_NAME_TAGS_DESIGN_FEE",
      price: 25.0,
      unit: "Design",
      currency: "AUD",
    },
  ],
  PS_FLYERS: [
    {
      name: "A5 (Premium) / Bi-Fold",
      value: "PS_FLYERS_A5_BI_FOLD",
      itemsType: "SELECT_ONE",
      items: [
        {
          name: "25",
          value: "PS_FLYERS_A5_BI_FOLD_25",
          price: 49.0,
          currency: "AUD",
        },
        {
          name: "50",
          value: "PS_FLYERS_A5_BI_FOLD_50",
          price: 74.0,
          currency: "AUD",
        },
        {
          name: "100",
          value: "PS_FLYERS_A5_BI_FOLD_100",
          price: 121.0,
          currency: "AUD",
        },
        {
          name: "250",
          value: "PS_FLYERS_A5_BI_FOLD_250",
          price: 178.0,
          currency: "AUD",
        },
        {
          name: "500",
          value: "PS_FLYERS_A5_BI_FOLD_500",
          price: 243.0,
          currency: "AUD",
        },
        {
          name: "1000",
          value: "PS_FLYERS_A5_BI_FOLD_1000",
          price: 364.0,
          currency: "AUD",
        },
        {
          name: "2000",
          value: "PS_FLYERS_A5_BI_FOLD_2000",
          price: 592.0,
          currency: "AUD",
        },
      ],
    },
    {
      name: "A5 (Premium) / Tri-Fold",
      value: "PS_FLYERS_A5_TRI_FOLD",
      itemsType: "SELECT_ONE",
      items: [
        {
          name: "25",
          value: "PS_FLYERS_A5_TRI_FOLD_25",
          price: 61.0,
          currency: "AUD",
        },
        {
          name: "50",
          value: "PS_FLYERS_A5_TRI_FOLD_50",
          price: 91.0,
          currency: "AUD",
        },
        {
          name: "100",
          value: "PS_FLYERS_A5_TRI_FOLD_100",
          price: 152.0,
          currency: "AUD",
        },
        {
          name: "250",
          value: "PS_FLYERS_A5_TRI_FOLD_250",
          price: 223.0,
          currency: "AUD",
        },
        {
          name: "500",
          value: "PS_FLYERS_A5_TRI_FOLD_500",
          price: 311.0,
          currency: "AUD",
        },
        {
          name: "1000",
          value: "PS_FLYERS_A5_TRI_FOLD_1000",
          price: 479.0,
          currency: "AUD",
        },
        {
          name: "2000",
          value: "PS_FLYERS_A5_TRI_FOLD_2000",
          price: 814.0,
          currency: "AUD",
        },
      ],
    },
    {
      name: "DL (Premium) / Bi-Fold",
      value: "PS_FLYERS_DL_BI_FOLD",
      itemsType: "SELECT_ONE",
      items: [
        {
          name: "25",
          value: "PS_FLYERS_DL_BI_FOLD_25",
          price: 45.0,
          currency: "AUD",
        },
        {
          name: "50",
          value: "PS_FLYERS_DL_BI_FOLD_50",
          price: 68.0,
          currency: "AUD",
        },
        {
          name: "100",
          value: "PS_FLYERS_DL_BI_FOLD_100",
          price: 113.0,
          currency: "AUD",
        },
        {
          name: "250",
          value: "PS_FLYERS_DL_BI_FOLD_250",
          price: 166.0,
          currency: "AUD",
        },
        {
          name: "500",
          value: "PS_FLYERS_DL_BI_FOLD_500",
          price: 243.0,
          currency: "AUD",
        },
        {
          name: "1000",
          value: "PS_FLYERS_DL_BI_FOLD_1000",
          price: 390.0,
          currency: "AUD",
        },
        {
          name: "2000",
          value: "PS_FLYERS_DL_BI_FOLD_2000",
          price: 685.0,
          currency: "AUD",
        },
      ],
    },
    {
      name: "DL (Premium) / Tri-Fold",
      value: "PS_FLYERS_DL_TRI_FOLD",
      itemsType: "SELECT_ONE",
      items: [
        {
          name: "25",
          value: "PS_FLYERS_DL_TRI_FOLD_25",
          price: 49.0,
          currency: "AUD",
        },
        {
          name: "50",
          value: "PS_FLYERS_DL_TRI_FOLD_50",
          price: 73.0,
          currency: "AUD",
        },
        {
          name: "100",
          value: "PS_FLYERS_DL_TRI_FOLD_100",
          price: 121.0,
          currency: "AUD",
        },
        {
          name: "250",
          value: "PS_FLYERS_DL_TRI_FOLD_250",
          price: 178.0,
          currency: "AUD",
        },
        {
          name: "500",
          value: "PS_FLYERS_DL_TRI_FOLD_500",
          price: 255.0,
          currency: "AUD",
        },
        {
          name: "1000",
          value: "PS_FLYERS_DL_TRI_FOLD_1000",
          price: 403.0,
          currency: "AUD",
        },
        {
          name: "2000",
          value: "PS_FLYERS_DL_TRI_FOLD_2000",
          price: 698.0,
          currency: "AUD",
        },
      ],
    },
    {
      name: "A4 (Premium) / Bi-Fold",
      value: "PS_FLYERS_A4_BI_FOLD",
      itemsType: "SELECT_ONE",
      items: [
        {
          name: "25",
          value: "PS_FLYERS_A4_BI_FOLD_25",
          price: 73.0,
          currency: "AUD",
        },
        {
          name: "50",
          value: "PS_FLYERS_A4_BI_FOLD_50",
          price: 109.0,
          currency: "AUD",
        },
        {
          name: "100",
          value: "PS_FLYERS_A4_BI_FOLD_100",
          price: 182.0,
          currency: "AUD",
        },
        {
          name: "250",
          value: "PS_FLYERS_A4_BI_FOLD_250",
          price: 268.0,
          currency: "AUD",
        },
        {
          name: "500",
          value: "PS_FLYERS_A4_BI_FOLD_500",
          price: 407.0,
          currency: "AUD",
        },
        {
          name: "1000",
          value: "PS_FLYERS_A4_BI_FOLD_1000",
          price: 679.0,
          currency: "AUD",
        },
        {
          name: "2000",
          value: "PS_FLYERS_A4_BI_FOLD_2000",
          price: 1224.0,
          currency: "AUD",
        },
      ],
    },
    {
      name: "A4 (Premium) / Tri-Fold",
      value: "PS_FLYERS_A4_TRI_FOLD",
      itemsType: "SELECT_ONE",
      items: [
        {
          name: "25",
          value: "PS_FLYERS_A4_TRI_FOLD_25",
          price: 85.0,
          currency: "AUD",
        },
        {
          name: "50",
          value: "PS_FLYERS_A4_TRI_FOLD_50",
          price: 128.0,
          currency: "AUD",
        },
        {
          name: "100",
          value: "PS_FLYERS_A4_TRI_FOLD_100",
          price: 213.0,
          currency: "AUD",
        },
        {
          name: "250",
          value: "PS_FLYERS_A4_TRI_FOLD_250",
          price: 330.0,
          currency: "AUD",
        },
        {
          name: "500",
          value: "PS_FLYERS_A4_TRI_FOLD_500",
          price: 522.0,
          currency: "AUD",
        },
        {
          name: "1000",
          value: "PS_FLYERS_A4_TRI_FOLD_1000",
          price: 897.0,
          currency: "AUD",
        },
        {
          name: "2000",
          value: "PS_FLYERS_A4_TRI_FOLD_2000",
          price: 1646.0,
          currency: "AUD",
        },
      ],
    },
    {
      name: "Extras",
      value: "PS_FLYERS_EXTRAS",
      items: [
        {
          name: "DL Flyer Holder",
          price: 10.0,
          currency: "AUD",
          unit: "Each",
          value: "PS_FLYERS_EXTRAS_DL_FLYER",
        },
        {
          name: "A4 Flyer Holder",
          price: 15.0,
          currency: "AUD",
          unit: "Each",
          value: "PS_FLYERS_EXTRAS_A4_FLYER",
        },
      ],
    },
    {
      name: "Design Fee (if required)",
      value: "PS_FLYERS_DESIGN_FEE",
      items: [
        {
          name: "Standard",
          price: 1600.0,
          currency: "AUD",
          unit: "Design",
          value: "PS_FLYERS_DESIGN_FEE_STANDARD",
        },
        {
          name: "Copywriting",
          price: 250.0,
          currency: "AUD",
          unit: "Design",
          value: "PS_FLYERS_DESIGN_FEE_COPYWRITING",
        },
      ],
    },
  ],
  PS_BOOKLET: [
    {
      name: `8.5" x 11" - 8p (cover + 4 interior pages)`,
      value: "PS_BOOKLET_8DOT5_11_8P_4INSIDE",
      itemsType: "SELECT_ONE",
      items: [
        {
          name: "10",
          value: "PS_BOOKLET_8DOT5_11_8P_4INSIDE_10",
          price: 137.0,
          currency: "AUD",
        },
        {
          name: "25",
          value: "PS_BOOKLET_8DOT5_11_8P_4INSIDE_25",
          price: 205.0,
          currency: "AUD",
        },
        {
          name: "50",
          value: "PS_BOOKLET_8DOT5_11_8P_4INSIDE_50",
          price: 376.0,
          currency: "AUD",
        },
        {
          name: "100",
          value: "PS_BOOKLET_8DOT5_11_8P_4INSIDE_100",
          price: 491.0,
          currency: "AUD",
        },
        {
          name: "250",
          value: "PS_BOOKLET_8DOT5_11_8P_4INSIDE_250",
          price: 731.0,
          currency: "AUD",
        },
        {
          name: "500",
          value: "PS_BOOKLET_8DOT5_11_8P_4INSIDE_500",
          price: 1148.0,
          currency: "AUD",
        },
        {
          name: "1000",
          value: "PS_BOOKLET_8DOT5_11_8P_4INSIDE_1000",
          price: 1490.0,
          currency: "AUD",
        },
        {
          name: "2000",
          value: "PS_BOOKLET_8DOT5_11_8P_4INSIDE_2000",
          price: 2484.0,
          currency: "AUD",
        },
      ],
    },
    {
      name: `8.5" x 11" - 12p (cover + 8 interior pages)`,
      value: "PS_BOOKLET_8DOT5_11_12P_8INSIDE",
      itemsType: "SELECT_ONE",
      items: [
        {
          name: "10",
          value: "PS_BOOKLET_8DOT5_11_12P_8INSIDE_10",
          price: 164.0,
          currency: "AUD",
        },
        {
          name: "25",
          value: "PS_BOOKLET_8DOT5_11_12P_8INSIDE_25",
          price: 277.0,
          currency: "AUD",
        },
        {
          name: "50",
          value: "PS_BOOKLET_8DOT5_11_12P_8INSIDE_50",
          price: 506.0,
          currency: "AUD",
        },
        {
          name: "100",
          value: "PS_BOOKLET_8DOT5_11_12P_8INSIDE_100",
          price: 662.0,
          currency: "AUD",
        },
        {
          name: "250",
          value: "PS_BOOKLET_8DOT5_11_12P_8INSIDE_250",
          price: 986.0,
          currency: "AUD",
        },
        {
          name: "500",
          value: "PS_BOOKLET_8DOT5_11_12P_8INSIDE_500",
          price: 1550.0,
          currency: "AUD",
        },
        {
          name: "1000",
          value: "PS_BOOKLET_8DOT5_11_12P_8INSIDE_1000",
          price: 2012.0,
          currency: "AUD",
        },
        {
          name: "2000",
          value: "PS_BOOKLET_8DOT5_11_12P_8INSIDE_2000",
          price: 3354.0,
          currency: "AUD",
        },
      ],
    },
    {
      name: `8.5" x 11" - 16p (cover + 12 interior pages)`,
      value: "PS_BOOKLET_8DOT5_11_16P_12INSIDE",
      itemsType: "SELECT_ONE",
      items: [
        {
          name: "10",
          value: "PS_BOOKLET_8DOT5_11_16P_12INSIDE_10",
          price: 164.0,
          currency: "AUD",
        },
        {
          name: "25",
          value: "PS_BOOKLET_8DOT5_11_16P_12INSIDE_25",
          price: 277.0,
          currency: "AUD",
        },
        {
          name: "50",
          value: "PS_BOOKLET_8DOT5_11_16P_12INSIDE_50",
          price: 506.0,
          currency: "AUD",
        },
        {
          name: "100",
          value: "PS_BOOKLET_8DOT5_11_16P_12INSIDE_100",
          price: 662.0,
          currency: "AUD",
        },
        {
          name: "250",
          value: "PS_BOOKLET_8DOT5_11_16P_12INSIDE_250",
          price: 986.0,
          currency: "AUD",
        },
        {
          name: "500",
          value: "PS_BOOKLET_8DOT5_11_16P_12INSIDE_500",
          price: 1550.0,
          currency: "AUD",
        },
        {
          name: "1000",
          value: "PS_BOOKLET_8DOT5_11_16P_12INSIDE_1000",
          price: 2012.0,
          currency: "AUD",
        },
        {
          name: "2000",
          value: "PS_BOOKLET_8DOT5_11_16P_12INSIDE_2000",
          price: 3354.0,
          currency: "AUD",
        },
      ],
    },
    {
      name: `8.5" x 11" - 20p (cover + 16 interior pages)`,
      value: "PS_BOOKLET_8DOT5_11_20P_16INSIDE",
      itemsType: "SELECT_ONE",
      items: [
        {
          name: "10",
          value: "PS_BOOKLET_8DOT5_11_20P_16INSIDE_10",
          price: 197.0,
          currency: "AUD",
        },
        {
          name: "25",
          value: "PS_BOOKLET_8DOT5_11_20P_16INSIDE_25",
          price: 361.0,
          currency: "AUD",
        },
        {
          name: "50",
          value: "PS_BOOKLET_8DOT5_11_20P_16INSIDE_50",
          price: 659.0,
          currency: "AUD",
        },
        {
          name: "100",
          value: "PS_BOOKLET_8DOT5_11_20P_16INSIDE_100",
          price: 860.0,
          currency: "AUD",
        },
        {
          name: "250",
          value: "PS_BOOKLET_8DOT5_11_20P_16INSIDE_250",
          price: 1283.0,
          currency: "AUD",
        },
        {
          name: "500",
          value: "PS_BOOKLET_8DOT5_11_20P_16INSIDE_500",
          price: 2016.0,
          currency: "AUD",
        },
        {
          name: "1000",
          value: "PS_BOOKLET_8DOT5_11_20P_16INSIDE_1000",
          price: 2616.0,
          currency: "AUD",
        },
        {
          name: "2000",
          value: "PS_BOOKLET_8DOT5_11_20P_16INSIDE_2000",
          price: 3160.0,
          currency: "AUD",
        },
      ],
    },
    {
      name: `8.5" x 11" - 24p (cover + 20 interior pages)`,
      value: "PS_BOOKLET_8DOT5_11_24P_20INSIDE",
      itemsType: "SELECT_ONE",
      items: [
        {
          name: "10",
          value: "PS_BOOKLET_8DOT5_11_24P_20INSIDE_10",
          price: 236.0,
          currency: "AUD",
        },
        {
          name: "25",
          value: "PS_BOOKLET_8DOT5_11_24P_20INSIDE_25",
          price: 451.0,
          currency: "AUD",
        },
        {
          name: "50",
          value: "PS_BOOKLET_8DOT5_11_24P_20INSIDE_50",
          price: 823.0,
          currency: "AUD",
        },
        {
          name: "100",
          value: "PS_BOOKLET_8DOT5_11_24P_20INSIDE_100",
          price: 1075.0,
          currency: "AUD",
        },
        {
          name: "250",
          value: "PS_BOOKLET_8DOT5_11_24P_20INSIDE_250",
          price: 1924.0,
          currency: "AUD",
        },
        {
          name: "500",
          value: "PS_BOOKLET_8DOT5_11_24P_20INSIDE_500",
          price: 1603.0,
          currency: "AUD",
        },
        {
          name: "1000",
          value: "PS_BOOKLET_8DOT5_11_24P_20INSIDE_1000",
          price: 3270.0,
          currency: "AUD",
        },
        {
          name: "2000",
          value: "PS_BOOKLET_8DOT5_11_24P_20INSIDE_2000",
          price: 5449.0,
          currency: "AUD",
        },
      ],
    },
    {
      name: `8.5" x 11" - 28p (cover + 24 interior pages)`,
      value: "PS_BOOKLET_8DOT5_11_28P_24INSIDE",
      itemsType: "SELECT_ONE",
      items: [
        {
          name: "10",
          value: "PS_BOOKLET_8DOT5_11_28P_24INSIDE_10",
          price: 340.0,
          currency: "AUD",
        },
        {
          name: "25",
          value: "PS_BOOKLET_8DOT5_11_28P_24INSIDE_25",
          price: 649.0,
          currency: "AUD",
        },
        {
          name: "50",
          value: "PS_BOOKLET_8DOT5_11_28P_24INSIDE_50",
          price: 1186.0,
          currency: "AUD",
        },
        {
          name: "100",
          value: "PS_BOOKLET_8DOT5_11_28P_24INSIDE_100",
          price: 1549.0,
          currency: "AUD",
        },
        {
          name: "250",
          value: "PS_BOOKLET_8DOT5_11_28P_24INSIDE_250",
          price: 2309.0,
          currency: "AUD",
        },
        {
          name: "500",
          value: "PS_BOOKLET_8DOT5_11_28P_24INSIDE_500",
          price: 3024.0,
          currency: "AUD",
        },
        {
          name: "1000",
          value: "PS_BOOKLET_8DOT5_11_28P_24INSIDE_1000",
          price: 4708.0,
          currency: "AUD",
        },
        {
          name: "2000",
          value: "PS_BOOKLET_8DOT5_11_28P_24INSIDE_2000",
          price: 7847.0,
          currency: "AUD",
        },
      ],
    },
    {
      name: `8.5" x 11" - 32p (cover + 28 interior pages)`,
      value: "PS_BOOKLET_8DOT5_11_32P_28INSIDE",
      itemsType: "SELECT_ONE",
      items: [
        {
          name: "10",
          value: "PS_BOOKLET_8DOT5_11_32P_28INSIDE_10",
          price: 408.0,
          currency: "AUD",
        },
        {
          name: "25",
          value: "PS_BOOKLET_8DOT5_11_32P_28INSIDE_25",
          price: 780.0,
          currency: "AUD",
        },
        {
          name: "50",
          value: "PS_BOOKLET_8DOT5_11_32P_28INSIDE_50",
          price: 1423.0,
          currency: "AUD",
        },
        {
          name: "100",
          value: "PS_BOOKLET_8DOT5_11_32P_28INSIDE_100",
          price: 1859.0,
          currency: "AUD",
        },
        {
          name: "250",
          value: "PS_BOOKLET_8DOT5_11_32P_28INSIDE_250",
          price: 2771.0,
          currency: "AUD",
        },
        {
          name: "500",
          value: "PS_BOOKLET_8DOT5_11_32P_28INSIDE_500",
          price: 4355.0,
          currency: "AUD",
        },
        {
          name: "1000",
          value: "PS_BOOKLET_8DOT5_11_32P_28INSIDE_1000",
          price: 5650.0,
          currency: "AUD",
        },
        {
          name: "2000",
          value: "PS_BOOKLET_8DOT5_11_32P_28INSIDE_2000",
          price: 9416.0,
          currency: "AUD",
        },
      ],
    },
    {
      name: `5.5" x 8.5" - 8p (cover + 4 interior pages)`,
      value: "PS_BOOKLET_5DOT5_8DOT5_8P_4INSIDE",
      itemsType: "SELECT_ONE",
      items: [
        {
          name: "10",
          value: "PS_BOOKLET_5DOT5_8DOT5_8P_4INSIDE_10",
          price: 82.0,
          currency: "AUD",
        },
        {
          name: "25",
          value: "PS_BOOKLET_5DOT5_8DOT5_8P_4INSIDE_25",
          price: 124.0,
          currency: "AUD",
        },
        {
          name: "50",
          value: "PS_BOOKLET_5DOT5_8DOT5_8P_4INSIDE_50",
          price: 226.0,
          currency: "AUD",
        },
        {
          name: "100",
          value: "PS_BOOKLET_5DOT5_8DOT5_8P_4INSIDE_100",
          price: 294.0,
          currency: "AUD",
        },
        {
          name: "250",
          value: "PS_BOOKLET_5DOT5_8DOT5_8P_4INSIDE_250",
          price: 438.0,
          currency: "AUD",
        },
        {
          name: "500",
          value: "PS_BOOKLET_5DOT5_8DOT5_8P_4INSIDE_500",
          price: 689.0,
          currency: "AUD",
        },
        {
          name: "1000",
          value: "PS_BOOKLET_5DOT5_8DOT5_8P_4INSIDE_1000",
          price: 894.0,
          currency: "AUD",
        },
        {
          name: "2000",
          value: "PS_BOOKLET_5DOT5_8DOT5_8P_4INSIDE_2000",
          price: 1490.0,
          currency: "AUD",
        },
      ],
    },
    {
      name: `5.5" x 8.5" - 12p (cover + 8 interior pages)`,
      value: "PS_BOOKLET_5DOT5_8DOT5_12P_8INSIDE",
      itemsType: "SELECT_ONE",
      items: [
        {
          name: "10",
          value: "PS_BOOKLET_5DOT5_8DOT5_12P_8INSIDE_10",
          price: 98.0,
          currency: "AUD",
        },
        {
          name: "25",
          value: "PS_BOOKLET_5DOT5_8DOT5_12P_8INSIDE_25",
          price: 167.0,
          currency: "AUD",
        },
        {
          name: "50",
          value: "PS_BOOKLET_5DOT5_8DOT5_12P_8INSIDE_50",
          price: 304.0,
          currency: "AUD",
        },
        {
          name: "100",
          value: "PS_BOOKLET_5DOT5_8DOT5_12P_8INSIDE_100",
          price: 397.0,
          currency: "AUD",
        },
        {
          name: "250",
          value: "PS_BOOKLET_5DOT5_8DOT5_12P_8INSIDE_250",
          price: 592.0,
          currency: "AUD",
        },
        {
          name: "500",
          value: "PS_BOOKLET_5DOT5_8DOT5_12P_8INSIDE_500",
          price: 930.0,
          currency: "AUD",
        },
        {
          name: "1000",
          value: "PS_BOOKLET_5DOT5_8DOT5_12P_8INSIDE_1000",
          price: 1207.0,
          currency: "AUD",
        },
        {
          name: "2000",
          value: "PS_BOOKLET_5DOT5_8DOT5_12P_8INSIDE_2000",
          price: 2012.0,
          currency: "AUD",
        },
      ],
    },
    {
      name: `5.5" x 8.5" - 16p (cover + 12 interior pages)`,
      value: "PS_BOOKLET_5DOT5_8DOT5_16P_12INSIDE",
      itemsType: "SELECT_ONE",
      items: [
        {
          name: "10",
          value: "PS_BOOKLET_5DOT5_8DOT5_16P_12INSIDE_10",
          price: 113.0,
          currency: "AUD",
        },
        {
          name: "25",
          value: "PS_BOOKLET_5DOT5_8DOT5_16P_12INSIDE_25",
          price: 216.0,
          currency: "AUD",
        },
        {
          name: "50",
          value: "PS_BOOKLET_5DOT5_8DOT5_16P_12INSIDE_50",
          price: 395.0,
          currency: "AUD",
        },
        {
          name: "100",
          value: "PS_BOOKLET_5DOT5_8DOT5_16P_12INSIDE_100",
          price: 516.0,
          currency: "AUD",
        },
        {
          name: "250",
          value: "PS_BOOKLET_5DOT5_8DOT5_16P_12INSIDE_250",
          price: 769.0,
          currency: "AUD",
        },
        {
          name: "500",
          value: "PS_BOOKLET_5DOT5_8DOT5_16P_12INSIDE_500",
          price: 1210.0,
          currency: "AUD",
        },
        {
          name: "1000",
          value: "PS_BOOKLET_5DOT5_8DOT5_16P_12INSIDE_1000",
          price: 1570.0,
          currency: "AUD",
        },
        {
          name: "2000",
          value: "PS_BOOKLET_5DOT5_8DOT5_16P_12INSIDE_2000",
          price: 2616.0,
          currency: "AUD",
        },
      ],
    },
    {
      name: `5.5" x 8.5" - 20p (cover + 16 interior pages)`,
      value: "PS_BOOKLET_5DOT5_8DOT5_20P_16INSIDE",
      itemsType: "SELECT_ONE",
      items: [
        {
          name: "10",
          value: "PS_BOOKLET_5DOT5_8DOT5_20P_16INSIDE_10",
          price: 125.0,
          currency: "AUD",
        },
        {
          name: "25",
          value: "PS_BOOKLET_5DOT5_8DOT5_20P_16INSIDE_25",
          price: 271.0,
          currency: "AUD",
        },
        {
          name: "50",
          value: "PS_BOOKLET_5DOT5_8DOT5_20P_16INSIDE_50",
          price: 494.0,
          currency: "AUD",
        },
        {
          name: "100",
          value: "PS_BOOKLET_5DOT5_8DOT5_20P_16INSIDE_100",
          price: 646.0,
          currency: "AUD",
        },
        {
          name: "250",
          value: "PS_BOOKLET_5DOT5_8DOT5_20P_16INSIDE_250",
          price: 962.0,
          currency: "AUD",
        },
        {
          name: "500",
          value: "PS_BOOKLET_5DOT5_8DOT5_20P_16INSIDE_500",
          price: 1512.0,
          currency: "AUD",
        },
        {
          name: "1000",
          value: "PS_BOOKLET_5DOT5_8DOT5_20P_16INSIDE_1000",
          price: 1962.0,
          currency: "AUD",
        },
        {
          name: "2000",
          value: "PS_BOOKLET_5DOT5_8DOT5_20P_16INSIDE_2000",
          price: 3270.0,
          currency: "AUD",
        },
      ],
    },
    {
      name: `5.5" x 8.5" - 24p (cover + 20 interior pages)`,
      value: "PS_BOOKLET_5DOT5_8DOT5_24P_20INSIDE",
      itemsType: "SELECT_ONE",
      items: [
        {
          name: "10",
          value: "PS_BOOKLET_5DOT5_8DOT5_24P_20INSIDE_10",
          price: 131.0,
          currency: "AUD",
        },
        {
          name: "25",
          value: "PS_BOOKLET_5DOT5_8DOT5_24P_20INSIDE_25",
          price: 325.0,
          currency: "AUD",
        },
        {
          name: "50",
          value: "PS_BOOKLET_5DOT5_8DOT5_24P_20INSIDE_50",
          price: 593.0,
          currency: "AUD",
        },
        {
          name: "100",
          value: "PS_BOOKLET_5DOT5_8DOT5_24P_20INSIDE_100",
          price: 774.0,
          currency: "AUD",
        },
        {
          name: "250",
          value: "PS_BOOKLET_5DOT5_8DOT5_24P_20INSIDE_250",
          price: 1154.0,
          currency: "AUD",
        },
        {
          name: "500",
          value: "PS_BOOKLET_5DOT5_8DOT5_24P_20INSIDE_500",
          price: 1814.0,
          currency: "AUD",
        },
        {
          name: "1000",
          value: "PS_BOOKLET_5DOT5_8DOT5_24P_20INSIDE_1000",
          price: 2354.0,
          currency: "AUD",
        },
        {
          name: "2000",
          value: "PS_BOOKLET_5DOT5_8DOT5_24P_20INSIDE_2000",
          price: 3924.0,
          currency: "AUD",
        },
      ],
    },
    {
      name: `5.5" x 8.5" - 28p (cover + 24 interior pages)`,
      value: "PS_BOOKLET_5DOT5_8DOT5_28P_24INSIDE",
      itemsType: "SELECT_ONE",
      items: [
        {
          name: "10",
          value: "PS_BOOKLET_5DOT5_8DOT5_28P_24INSIDE_10",
          price: 137.0,
          currency: "AUD",
        },
        {
          name: "25",
          value: "PS_BOOKLET_5DOT5_8DOT5_28P_24INSIDE_25",
          price: 390.0,
          currency: "AUD",
        },
        {
          name: "50",
          value: "PS_BOOKLET_5DOT5_8DOT5_28P_24INSIDE_50",
          price: 712.0,
          currency: "AUD",
        },
        {
          name: "100",
          value: "PS_BOOKLET_5DOT5_8DOT5_28P_24INSIDE_100",
          price: 929.0,
          currency: "AUD",
        },
        {
          name: "250",
          value: "PS_BOOKLET_5DOT5_8DOT5_28P_24INSIDE_250",
          price: 1385.0,
          currency: "AUD",
        },
        {
          name: "500",
          value: "PS_BOOKLET_5DOT5_8DOT5_28P_24INSIDE_500",
          price: 2178.0,
          currency: "AUD",
        },
        {
          name: "1000",
          value: "PS_BOOKLET_5DOT5_8DOT5_28P_24INSIDE_1000",
          price: 2825.0,
          currency: "AUD",
        },
        {
          name: "2000",
          value: "PS_BOOKLET_5DOT5_8DOT5_28P_24INSIDE_2000",
          price: 4708.0,
          currency: "AUD",
        },
      ],
    },
    {
      name: `5.5" x 8.5" - 32p (cover + 28 interior pages)`,
      value: "PS_BOOKLET_5DOT5_8DOT5_32P_28INSIDE",
      itemsType: "SELECT_ONE",
      items: [
        {
          name: "10",
          value: "PS_BOOKLET_5DOT5_8DOT5_32P_28INSIDE_10",
          price: 144.0,
          currency: "AUD",
        },
        {
          name: "25",
          value: "PS_BOOKLET_5DOT5_8DOT5_32P_28INSIDE_25",
          price: 468.0,
          currency: "AUD",
        },
        {
          name: "50",
          value: "PS_BOOKLET_5DOT5_8DOT5_32P_28INSIDE_50",
          price: 853.0,
          currency: "AUD",
        },
        {
          name: "100",
          value: "PS_BOOKLET_5DOT5_8DOT5_32P_28INSIDE_100",
          price: 1115.0,
          currency: "AUD",
        },
        {
          name: "250",
          value: "PS_BOOKLET_5DOT5_8DOT5_32P_28INSIDE_250",
          price: 1662.0,
          currency: "AUD",
        },
        {
          name: "500",
          value: "PS_BOOKLET_5DOT5_8DOT5_32P_28INSIDE_500",
          price: 2614.0,
          currency: "AUD",
        },
        {
          name: "1000",
          value: "PS_BOOKLET_5DOT5_8DOT5_32P_28INSIDE_1000",
          price: 3390.0,
          currency: "AUD",
        },
        {
          name: "2000",
          value: "PS_BOOKLET_5DOT5_8DOT5_32P_28INSIDE_2000",
          price: 5650.0,
          currency: "AUD",
        },
      ],
    },
    {
      name: "Design Fee (if required)",
      value: "PS_BOOKLET_DESIGN_FEE",
      itemsType: "SELECT_ONE",
      items: [
        {
          name: "4 to 6 Pages",
          price: 1100.0,
          currency: "AUD",
          value: "PS_BOOKLET_DESIGN_FEE_4_TO_6PAGES",
        },
        {
          name: "8 to 12 Pages",
          price: 2000.0,
          currency: "AUD",
          value: "PS_BOOKLET_DESIGN_FEE_8_TO_12PAGES",
        },
        {
          name: "14 to 18 Pages",
          price: 2800.0,
          currency: "AUD",
          value: "PS_BOOKLET_DESIGN_FEE_14_TO_18PAGES",
        },
        {
          name: "20 to 24 Pages",
          price: 3400.0,
          currency: "AUD",
          value: "PS_BOOKLET_DESIGN_FEE_20_TO_24PAGES",
        },
        {
          name: "26 to 30 Pages",
          price: 3900.0,
          currency: "AUD",
          value: "PS_BOOKLET_DESIGN_FEE_26_TO_30PAGES",
        },
        {
          name: "Copywriting",
          price: 250.0,
          currency: "AUD",
          value: "PS_BOOKLET_DESIGN_FEE_COPYWRITING",
        },
      ],
    },
  ],
};
