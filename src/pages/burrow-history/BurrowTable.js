import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { fetchBurrowAction, updateBurrowAction } from "./burrowAction";
import { useDispatch } from "react-redux";
export const BurrowTable = () => {
  const { burrows } = useSelector((state) => state.burrowInfo);
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBurrowAction());
  }, [dispatch]);
  const handleOnBurrowReturn = (burrowId) => {
    if (window.confirm("Are you sure you want to return this book?")) {
      dispatch(updateBurrowAction(burrowId));
    }
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Burrowed by</th>
            <th>Due Date</th>
            <th>Returned Date</th>
          </tr>
        </thead>
        <tbody>
          {burrows?.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>
                <img src={item.thumbnail} width="150px" alt="" />
              </td>
              <td>{item.bookName}</td>
              <td>{item.userName}</td>
              <td>{item.dueDate?.slice(0, 10)}</td>
              <td>{item.returnDate?.slice(0, 10)}</td>
              <td>
                {item.userId === user._id && !item.isRetured ? (
                  <Button
                    variant="primary"
                    onClick={() => handleOnBurrowReturn(item)}
                  >
                    Return
                  </Button>
                ) : (
                  <></>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
