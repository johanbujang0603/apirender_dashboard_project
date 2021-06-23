import React, { useState, useEffect } from "react";

import axios from "axios";

import ProjectDetailsHeading from "../../../containers/projects/ProjectDetailsHeading";
import ListServiceListing from "../../../containers/projects/ListServiceListing";

const orderOptions = [
  { column: "desc", label: "Service Name" },
  { column: "price", label: "Price" },
  { column: "quantity", label: "Quantity" },
];
const pageSizes = [10, 20, 50, 100];

const ProjectDetails = ({ match }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPageSize, setSelectedPageSize] = useState(10);
  const [selectedOrderOption, setSelectedOrderOption] = useState({
    column: "desc",
    label: "Service Name",
  });

  const [totalItemCount, setTotalItemCount] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [search, setSearch] = useState("");
  const [services, setServices] = useState([]);
  const [project, setProject] = useState("");
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedPageSize, selectedOrderOption]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          `/api/projects/detail?_id=${match.params.id}&pageSize=${selectedPageSize}&currentPage=${currentPage}&orderBy=${selectedOrderOption.column}&search=${search}`
        )
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          setProject(data.project);
          setTotalPage(data.totalPage);
          setServices(data.services);
          setTotalItemCount(data.totalItem);
          setIsLoaded(true);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
    setIsLoaded(false);
    fetchData();
  }, [
    selectedPageSize,
    currentPage,
    selectedOrderOption,
    search,
    match.params.id,
  ]);

  const startIndex = (currentPage - 1) * selectedPageSize;
  const endIndex = currentPage * selectedPageSize;

  return !isLoaded ? (
    <div className="loading" />
  ) : (
    <>
      <div className="disable-text-selection">
        <ProjectDetailsHeading
          heading={project.project_name}
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
          projectID={match.params.id}
          project={project}
          totalPrice={services.reduce(function (cnt, o) {
            return cnt + o.total_price;
          }, 0)}
        />
        <ListServiceListing
          items={services}
          currentPage={currentPage}
          totalPage={totalPage}
          onChangePage={setCurrentPage}
          project={project}
        />
      </div>
    </>
  );
};

export default ProjectDetails;
