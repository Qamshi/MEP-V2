// import { Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from "@nextui-org/react";
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { users } from "./data2";
// import { useTextareaContext } from './TextareaProvider'; // Assuming you have defined this context
// import { useParams } from "react-router-dom";
// export default function AdsTable() {

//   const { userEmail } = useTextareaContext();
  

//   console.log("postData:", userEmail);
//   const data = {
//     userEmail: userEmail
//   };
  
//   // Define the URL of your Flask server endpoint
//   const url = 'http://localhost:9000/receive-user-email';
  
//   // Define the options for the fetch request
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   };
  
//   // Make the POST request
//   fetch(url, options)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json(); // Assuming your server responds with JSON
//     })
//     .then(data => {
//       console.log('Response:', data);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });

  
//   const [page, setPage] = React.useState(1);
//   const rowsPerPage = 7;
//   const navigate = useNavigate();

//   const pages = Math.ceil(users.length / rowsPerPage);

//   const items = React.useMemo(() => {
//     const start = (page - 1) * rowsPerPage;
//     const end = start + rowsPerPage;

//     return users.slice(start, end);
//   }, [page, users]);

//   const handleProductNameClick = (i) => {
//     navigate(`/AdChart/${i}`);
    
//   };

//   const handleTargetedLocationClick = (item) => {
//     const queryParams = new URLSearchParams();
//     queryParams.append('itemName', JSON.stringify(item)); // Convert item to JSON string
//     navigate(`/map?${queryParams.toString()}`);
//   };

//   return (
//     <Table
//       aria-label="Example table with client side pagination"
//       bottomContent={
//         <div className="flex w-full justify-center">
//           <Pagination
//             isCompact
//             showControls
//             showShadow
//             color="secondary"
//             page={page}
//             total={pages}
//             onChange={(page) => setPage(page)}
//           />
//         </div>
//       }
//       classNames={{
//         wrapper: "min-h-[222px]",
//       }}
//     >
//       <TableHeader>
//         <TableColumn key="name">Compaign Name</TableColumn>
//         <TableColumn key="Creation_Time">Creation Time</TableColumn>
//         <TableColumn key="status">Ad Status</TableColumn>
//       </TableHeader>
//       <TableBody items={items}>
//         {(item) => (
//           <TableRow key={item.name}>
//             {(columnKey) => (
//               <TableCell
//                 style={{
//                   cursor:
//                     columnKey === "name" || columnKey === "status" ? "pointer" : "default",
//                 }}
//                 onClick={() => {
//                   if (columnKey === "name") {
//                     handleProductNameClick(getKeyValue(item, columnKey));
//                   } else if (columnKey === "status") {
//                     handleTargetedLocationClick(getKeyValue(item, "name"));
//                   }
//                 }}
//               >
//                 {getKeyValue(item, columnKey)}
//               </TableCell>
//             )}
//           </TableRow>
//         )}
//       </TableBody>
//     </Table>
//   );
// }
import { Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTextareaContext } from './TextareaProvider'; // Assuming you have defined this context

export default function AdsTable() {
  const { userEmail } = useTextareaContext();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const rowsPerPage = 7;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = { userEmail: userEmail };
      const url = 'http://localhost:9000/receive-user-email';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        if (Array.isArray(result)) {
          setUsers(result.users);
        } else {
          console.error('Unexpected response format:', result);
          setUsers(result.users);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [userEmail]);

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return users.slice(start, end);
  }, [page, users]);

  const handleProductNameClick = (i) => {
    navigate(`/AdChart/${i}`);
  };

  const handleTargetedLocationClick = (item) => {
    const queryParams = new URLSearchParams();
    queryParams.append('itemName', JSON.stringify(item)); // Convert item to JSON string
    navigate(`/map?${queryParams.toString()}`);
  };

  return (
    <Table
      aria-label="Example table with client side pagination"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader>
        <TableColumn key="name">Campaign Name</TableColumn>
        <TableColumn key="Creation_Time">Creation Time</TableColumn>
        <TableColumn key="status">Ad Status</TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.name}>
            {(columnKey) => (
              <TableCell
                style={{
                  cursor:
                    columnKey === "name" || columnKey === "status" ? "pointer" : "default",
                }}
                onClick={() => {
                  if (columnKey === "name") {
                    handleProductNameClick(getKeyValue(item, columnKey));
                  } else if (columnKey === "status") {
                    handleTargetedLocationClick(getKeyValue(item, "name"));
                  }
                }}
              >
                {getKeyValue(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
