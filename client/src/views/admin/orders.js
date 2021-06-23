import React, {useEffect} from 'react';
import axios from 'axios';
import { CardTitle, Badge } from 'reactstrap';
import { useTable, usePagination, useSortBy } from 'react-table';
import classnames from 'classnames';
import DatatablePagination from '../../components/DatatablePagination';
import { statusColor } from '../../constants/status';
import moment from "moment";

function Table({ columns, data, divided = false, defaultPageSize = 6 }) {
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: defaultPageSize },
    },
    useSortBy,
    usePagination
  );

  return (
    <>
      <table
        {...getTableProps()}
        className={`r-table table ${classnames({ 'table-divided': divided })}`}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, columnIndex) => (
                <th
                  key={`th_${columnIndex}`}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? 'sorted-desc'
                        : 'sorted-asc'
                      : ''
                  }
                >
                  {column.render('Header')}
                  <span />
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, cellIndex) => (
                  <td
                    key={`td_${cellIndex}`}
                    {...cell.getCellProps({
                      className: cell.column.cellClass,
                    })}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <DatatablePagination
        page={pageIndex}
        pages={pageCount}
        canPrevious={canPreviousPage}
        canNext={canNextPage}
        pageSizeOptions={[4, 10, 20, 30, 40, 50]}
        showPageSizeOptions={false}
        showPageJump={false}
        defaultPageSize={pageSize}
        onPageChange={(p) => gotoPage(p)}
        onPageSizeChange={(s) => setPageSize(s)}
        paginationMaxSize={pageCount}
      />
    </>
  );
}

const OrderList = ({ match }) => {
	const [orders, setOrders] = React.useState([]);
	
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          `/api/services/order-list`
        )
        .then((res) => {
          return res.data;
        })
        .then((data) => {
					console.log(data);
					let tmpOrders = [];
					data.map((item) => {
						tmpOrders.push({
							name: item.service_id.name,
							project_name: item.service_id.project.project_name,
							user_name: item.service_id.project.user_id.first_name + ' ' + item.service_id.project.user_id.last_name,
							total_price: item.service_id.total_price,
							status: item.service_id.status,
							payment_day: item.date
						})
					});
					setOrders(tmpOrders);
        });
    }
    fetchData();
	}, []);
	

  const cols = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        cellClass: 'list-item-heading w-20',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Project Name',
        accessor: 'project_name',
        cellClass: 'text-muted  w-20',
        Cell: (props) => <>{props.value}</>,
			},
			{
				Header: 'User Name',
        accessor: 'user_name',
        cellClass: 'text-muted  w-20',
        Cell: (props) => <>{props.value}</>,
			},
      {
        Header: 'Total Price',
        accessor: 'total_price',
        cellClass: 'text-muted  w-10',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Status',
        accessor: 'status',
        cellClass: 'text-muted  w-10',
        Cell: (props) => <Badge color={statusColor[props.value]} pill>{props.value}</Badge>,
      },
      {
        Header: 'Payment Date',
        accessor: 'payment_day',
        cellClass: 'text-muted  w-15',
        Cell: (props) => <>{moment(props.value).format('LLLL')}</>,
      },
    ],
    []
  );
  return (
    <div className="mb-4">
      <CardTitle>
        {/* <IntlMessages id="table.divided" /> */}
      </CardTitle>
      <Table columns={cols} data={orders} divided />
    </div>
  );
};

export default OrderList;
