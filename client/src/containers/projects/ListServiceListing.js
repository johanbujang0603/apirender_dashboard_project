import React from "react";
import { Row, Table, Badge } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Colxx } from "../../components/common/CustomBootstrap";
import Pagination from "./Pagination";
import IntlMessages from "../../helpers/IntlMessages";
import { statusColor } from "../../constants/status";
import { services } from "../../constants/projectValues";

const ListServiceListing = ({
  items,
  currentPage,
  totalPage,
  onChangePage,
  project
}) => {
  const getOptionNumbers = (orders) => {
    let options = JSON.parse(orders);
    options = options.filter(function (el) {
      return el.depth != 1;
    });
    return options.reduce((a, b) => a + (b["quantity"] || 0), 0);
  };

  return (
    <Row>
      <Colxx xxs="12" className="mb-3">
        <Table responsive className="r-table table table-divided">
          <thead>
            <tr>
              <th></th>
              <th>Product Type</th>
              <th>Quantity</th>
              <th>Cost</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((product, i_key) => {
              const obj = services[project.category].find(o => { return o.value === product.value });
              return (
                <tr role="row" key={i_key}>
                  <td role="cell" className="p-0 list-item-heading w-10">
                    <div className="d-flex align-items-center justify-center">
                      <img
                        alt={product.desc}
                        src={obj.img}
                        className="responsive border-0 card-img-left"
                        style={{ width: "100px", height: "85px" }}
                      />
                    </div>
                  </td>
                  <td
                    role="cell"
                    className="truncate align-middle list-item-heading w-40"
                  >
                    {product.name}
                    <span className="text-small text-primary">
                      {" "}
                      ( +{getOptionNumbers(product.orders)} options )
                    </span>
                  </td>
                  <td
                    role="cell"
                    className="align-middle list-item-heading w-10"
                  >
                    {product.quantity}
                  </td>
                  <td
                    role="cell"
                    className="align-middle list-item-heading w-10"
                  >
                    ${product.total_price}
                  </td>
                  <td
                    role="cell"
                    className="align-middle list-item-heading w-20 text-small"
                  >
                    {product.is_paid === false && (
                      <Badge color="danger" pill>
                        <IntlMessages id="projects.payment-required" />
                      </Badge>
                    )}
                    {product.is_paid === true && (
                      <Badge color={statusColor[product.status]} pill>
                        {product.status}
                      </Badge>
                    )}
                  </td>
                  <td
                    role="cell"
                    className="truncate align-middle list-item-heading w-10"
                  >
                    {product.is_paid === true &&
                      product.status === "WAITING FOR FILES" && (
                        <NavLink
                          exact={true}
                          to={`/app/projects/briefing/${product._id}`}
                          className="top-right-button btn btn-primary btn-sm"
                        >
                          <IntlMessages id="projects.send-files" />
                        </NavLink>
                      )}
                    {product.is_paid &&
                      (product.status === "IN PROGRESS" ||
                        product.status === "REVIEW") && (
                        <NavLink
                          exact={true}
                          to={`/app/projects/view-briefing/${product._id}`}
                          className="top-right-button btn btn-danger btn-sm"
                        >
                          <IntlMessages id="projects.view-briefing" />
                        </NavLink>
                      )}
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

export default React.memo(ListServiceListing);
