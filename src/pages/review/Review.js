import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { UserLayout } from "../../components/layout/UserLayout";

export const Review = () => {
  const { review } = useSelector((state) => state.reviewInfo);
  console.log(review);
  return (
    <UserLayout>
      <div>
        <h2>Reviews</h2>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Status</th>
              <th>Book name</th>
              <th>Reviewed by</th>
              <th>Title</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {review?.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.status}</td>
                <td>{item.bookName}</td>
                <td>{item.userName}</td>
                <td>{item.title}</td>
                <td>{item.message}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </UserLayout>
  );
};
