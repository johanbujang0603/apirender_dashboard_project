import React from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Table, Badge, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Colxx } from '../../components/common/CustomBootstrap';
import Pagination from './Pagination';
import { projectCategories } from '../../constants/projectValues';
import { statusColor } from '../../constants/status';
import moment from 'moment';

const ListProjectsListing = ({
  items,
  currentPage,
  totalPage,
  onChangePage,
  deleteProject
}) => {
  const history = useHistory();
  return (
    <Row>
      <Colxx xxs="12" className="mb-3">
        <Table responsive className="r-table table table-divided">
          <thead>
            <tr>
              <th>Project Title</th>
              <th>Reference</th>
              <th>Project Category</th>
              <th>Cost</th>
              <th>Order Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map((project, k_index) => {
              return (
                <tr role="row" key={k_index} className="p-5" style={{cursor: 'pointer'}} onClick={(e) => history.push(`/app/projects/details/${project._id}`)}>
                  <td role="cell" className="p-4 list-item-heading w-20">
                    <NavLink to={`/app/projects/details/${project._id}`} className="w-sm-100">
                      <p className="mb-1 truncate">
                        {project.project_name}
                      </p>
                    </NavLink>
                  </td>
                  <td role="cell" className="p-4 text-primary w-10">
                    {project.unique_id}
                  </td>
                  <td role="cell" className="p-4 text-muted w-15 w-sm-100">
                    {projectCategories.find(o => o.value === project.category).desc}
                  </td>
                  <td role="cell" className="p-4 text-muted w-10 text-muted text-small w-sm-100">
                    ${project.total_amount}
                  </td>
                  <td role="cell" className="p-4 w-20">
                    <p className="truncate text-muted text-small w-sm-100">{moment(project.date).format('LLLL')}</p>
                  </td>
                  <td role="cell" className="p-4 text-muted w-15">
                    <Badge color={statusColor[project.status]} pill>
                      {project.status}
                    </Badge>
                  </td>
                  
                  <td role="cell" className="p-4 text-muted w-10">
                    {
                      project.status === "DRAFT" && (
                        <Button color="danger" size="xs" onClick={(e) => deleteProject(e, project._id)}>
                          Delete
                        </Button>
                      )
                    }
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Colxx>
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        onChangePage={(i) => onChangePage(i)}
      />
    </Row>
  );
};

export default React.memo(ListProjectsListing);
