import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts: React.FC = () => {
  interface Data {
    userId: string;
    id: string;
    title: string;
  }

  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/posts/1',
    })
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        // eslint-disable-next-line no-alert
        alert(err);
      });
  }, []);

  return (
    <>
      {data ? (
        <table id="customers">
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
          <tr>
            <td>UserID</td>
            <td>{data?.userId}</td>
          </tr>
          <tr>
            <td>ID</td>
            <td>{data.id}</td>
          </tr>
          <tr>
            <td>Title</td>
            <td>{data.title}</td>
          </tr>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Posts;
