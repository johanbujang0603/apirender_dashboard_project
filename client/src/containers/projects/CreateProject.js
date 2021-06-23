/* eslint-disable no-param-reassign */
import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  Row,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  Spinner,
} from "reactstrap";

import { NavLink } from "react-router-dom";
import { Wizard, Steps, Step } from "react-albus";
import { injectIntl } from "react-intl";
import IntlMessages from "../../helpers/IntlMessages";
import BottomNavigation from "../../components/wizard/BottomNavigation";
import TopNavigation from "../../components/wizard/TopNavigation";
import { NotificationManager } from "../../components/common/react-notifications";
import ProjectCategoryWidget from "./ProjectCategoryWidget";
import { projectCategories } from "../../constants/projectValues";
import { setProjectMenuItems } from "../../redux/actions";

const CreateProject = ({ intl, setProjectMenuItems, loginUser }) => {
  const [bottomNavHidden, setBottomNavHidden] = useState(false);
  const [loading, setLoading] = useState(false);
  const [projectID, setProjectID] = useState(null);
  const [stepFields, setStepFields] = useState([
    {
      valid: false,
      name: "projectCategory",
      value: "",
      errorMsg: "Please select project category",
    },
    {
      valid: false,
      name: "projectDetail",
      valProjectName: "",
      valProjectDescription: "",
      errorMsg: "Please fill all fields out",
    },
  ]);

  const saveProject = () => {
    setLoading(true);
    const item = {
      user_id: loginUser._id,
      category: stepFields[0].value,
      project_name: stepFields[1].valProjectName,
      project_description: stepFields[1].valProjectDescription,
      is_paid: false,
      status: "DRAFT",
    };

    axios.post("/api/projects/create", item).then((res) => {
      setProjectMenuItems({userId: loginUser._id, role: loginUser.role});
      setProjectID(res.data._id);
      setLoading(false);
    })
    .catch((err) => {
      alert(err);
    });
  };

  const onClickNext = (goToNext, steps, step) => {
    if (steps.length - 1 <= steps.indexOf(step)) {
      return;
    }
    const stepIndex = steps.indexOf(step);
    const field = stepFields[stepIndex];
    if (!field.valid) {
      NotificationManager.warning(
        field.errorMsg,
        "Validation Error",
        3000,
        null,
        null,
        ""
      );
      return;
    }
    goToNext();
    step.isDone = true;
    if (steps.length - 2 <= steps.indexOf(step)) {
      setBottomNavHidden(true);
      saveProject();
    }
  };

  const onClickPrev = (goToPrev, steps, step) => {
    if (steps.indexOf(step) <= 0) {
      return;
    }
    goToPrev();
  };

  const onInputProjectDetails = (event) => {
    const value = event.target.value;
    const fieldName = event.target.name;

    const newStepFields = [...stepFields];
    if (fieldName == "projectDescription")
      newStepFields[1].valProjectDescription = value;
    else {
      if (value != null) newStepFields[1].valid = true;
      else newStepFields[1].valid = false;
      newStepFields[1].valProjectName = value;
    }
    setStepFields(newStepFields);
  };

  const onCheckItem = (event, value, step) => {
    const newStepFields = [...stepFields];
    newStepFields[step].value = value;
    newStepFields[step].valid = true;
    setStepFields(newStepFields);
  };

  const { messages } = intl;
  return (
    <Card>
      <CardBody className="wizard wizard-default">
        <Wizard>
          <TopNavigation className="justify-content-center" disableNav />
          <Steps>
            <Step
              id="step1"
              name={messages["wizard.step-name-1"]}
              desc={messages["projects.project-step-1"]}
            >
              <div className="wizard-basic-step mt-5">
                <Row>
                  {projectCategories.map((category) => {
                    return (
                      <ProjectCategoryWidget
                        category={category}
                        isSelected={stepFields[0].value}
                        onCheckItem={onCheckItem}
                        step={0}
                        key={category.id}
                      />
                    );
                  })}
                </Row>
              </div>
            </Step>
            <Step
              id="step2"
              name={messages["wizard.step-name-2"]}
              desc={messages["projects.project-step-2"]}
            >
              <div className="wizard-basic-step mt-5">
                <FormGroup>
                  <Label for="exampleEmail">
                    <IntlMessages id="projects.project-name" />
                  </Label>
                  <Input
                    type="text"
                    name="projectName"
                    id="projectName"
                    value={stepFields[1].valProjectName}
                    placeholder={messages["projects.project-name-placeholder"]}
                    onChange={(e) => onInputProjectDetails(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">
                    <IntlMessages id="projects.project-name" />
                  </Label>
                  <Input
                    type="textarea"
                    name="projectDescription"
                    id="projectDescription"
                    value={stepFields[1].valProjectDescription}
                    placeholder={messages["projects.project-desc-placeholder"]}
                    onChange={(e) => onInputProjectDetails(e)}
                  />
                </FormGroup>
              </div>
            </Step>
            <Step id="step3" hideTopNav>
              <div className="wizard-basic-step text-center pt-3">
                {loading || projectID == null ? (
                  <div>
                    <Spinner color="primary" className="mb-1" />
                    <p>
                      <IntlMessages id="wizard.async" />
                    </p>
                  </div>
                ) : (
                  <div>
                    <h2 className="mb-2">
                      <IntlMessages id="wizard.content-thanks" />
                    </h2>
                    <p>
                      <IntlMessages id="wizard.projects.created" />
                    </p>
                    <NavLink
                      to={`/app/projects/add-service/${projectID}`}
                      className="btn btn-primary list-item-heading mb-0 truncate w-xs-100  mb-2"
                    >
                      <span className="align-middle d-inline-block">
                        <IntlMessages id="wizard.project.go-service" />
                      </span>
                    </NavLink>
                  </div>
                )}
              </div>
            </Step>
          </Steps>
          <BottomNavigation
            onClickNext={onClickNext}
            onClickPrev={onClickPrev}
            className={`justify-content-center ${
              bottomNavHidden && "invisible"
            } mt-4`}
            prevLabel={messages["wizard.prev"]}
            nextLabel={messages["wizard.next"]}
          />
        </Wizard>
      </CardBody>
    </Card>
  );
};

const mapStateToProps = ({ authUser }) => {
  const loginUser = authUser.user;
  return {
    loginUser
  };
};

export default connect(mapStateToProps, {
  setProjectMenuItems,
})(injectIntl(React.memo(CreateProject)));
