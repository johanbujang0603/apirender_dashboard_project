import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import axios from "axios";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import NotificationManager from "../../../components/common/react-notifications/NotificationManager";

import ProjectListHeading from "../../../containers/projects/ProjectListHeading";
import ListProjectsListing from "../../../containers/projects/ListProjectsListing";
import { setProjectMenuItems } from "../../../redux/actions";

const orderOptions = [
  { column: "project_name", label: "Project Name" },
  { column: "category", label: "Category" },
  { column: "status", label: "Status" },
  { column: "unique_id", label: "Reference" },
];
const pageSizes = [10, 20, 50, 100];

const ProjectList = ({ match, setProjectMenuItems, loginUser }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPageSize, setSelectedPageSize] = useState(10);
  const [selectedOrderOption, setSelectedOrderOption] = useState({
    column: "project_name",
    label: "Project Name",
  });

  const [totalItemCount, setTotalItemCount] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedPageSize, selectedOrderOption]);
  useEffect(() => {
    fetchData();
  }, [selectedPageSize, currentPage, selectedOrderOption, search]);

  const fetchData = () => {
    axios
      .post(
        `/api/projects/my-list?pageSize=${selectedPageSize}&currentPage=${currentPage}&orderBy=${selectedOrderOption.column}&search=${search}&userID=${loginUser._id}`
      )
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setTotalPage(data.totalPage);
        setItems(data.data);
        setTotalItemCount(data.totalItem);
        setIsLoaded(true);
      });
  };

  const deleteProject = (e, id) => {
    e.preventDefault();
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure you want to delete this project?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            axios.post(`/api/projects/delete?_id=${id}`).then((res) => {
              fetchData();
              setProjectMenuItems();
              NotificationManager.success(
                "The project has been deleted successfully.",
                "Success",
                3000,
                null,
                null,
                ""
              );
              
            });
          }
        },
        {
          label: 'No',
          onClick: () => { return; }
        }
      ]
    });
  };

  const startIndex = (currentPage - 1) * selectedPageSize;
  const endIndex = currentPage * selectedPageSize;

  return !isLoaded ? (
    <div className="loading" />
  ) : (
    <>
      <div className="disable-text-selection">
        <ProjectListHeading
          heading="projects.all"
          changeOrderBy={(column) => {
            setSelectedOrderOption(
              orderOptions.find((x) => x.column === column)
            );
          }}
          changePageSize={setSelectedPageSize}
          selectedPageSize={selectedPageSize}
          totalItemCount={totalItemCount}
          selectedOrderOption={selectedOrderOption}
          match={match}
          startIndex={startIndex}
          endIndex={endIndex}
          onSearchKey={(e) => {
            if (e.key === "Enter") {
              setSearch(e.target.value.toLowerCase());
            }
          }}
          orderOptions={orderOptions}
          pageSizes={pageSizes}
        />
        <ListProjectsListing
          items={items}
          currentPage={currentPage}
          totalPage={totalPage}
          onChangePage={setCurrentPage}
          deleteProject={deleteProject}
        />
      </div>
    </>
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
})(injectIntl(React.memo(ProjectList)));
