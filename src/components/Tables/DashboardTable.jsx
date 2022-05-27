import { useEffect, useState } from 'react';
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
} from '@windmill/react-ui';
import response from './dummy';

function Mycomponent() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);

  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <tr>
            <TableCell>Client</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Date</TableCell>
          </tr>
        </TableHeader>
        <TableBody>
          {data.map((user, i) => (
            <TableRow key={i}>
              <TableCell>
                <div className="flex items-center text-sm">
                  <Avatar
                    className="hidden mr-3 md:block"
                    src={user.avatar}
                    alt="User image"
                    size="small"
                  />
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {user.job}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-sm">$ {user.amount}</span>
              </TableCell>
              <TableCell>
                <Badge type={user.status}>{user.status}</Badge>
              </TableCell>
              <TableCell>
                <span className="text-sm">
                  {new Date(user.date).toLocaleDateString()}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TableFooter>
        {/* <Pagination
          totalResults={totalResults}
          resultsPerPage={resultsPerPage}
          label="Table navigation"
          onChange={onPageChange}
        /> */}
      </TableFooter>
      <div className="btn-group">
        <button className="btn btn-sm">1</button>
        <button className="btn btn-sm btn-active">2</button>
        <button className="btn btn-sm">3</button>
        <button className="btn btn-sm">4</button>
      </div>
    </TableContainer>
  );
}

export default Mycomponent;
