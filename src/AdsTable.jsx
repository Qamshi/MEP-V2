

import { Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from "@nextui-org/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { users } from "./data2";

export default function AdsTable() {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 7;
  const navigate = useNavigate();

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);

  const handleProductNameClick = (item) => {
    navigate(`/AdChart/${item.id}`);
  };

  const handleTargetedLocationClick = (item) => {
    navigate(`/map`);
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
        <TableColumn key="name">Compaign Name</TableColumn>
        <TableColumn key="role">Creation Time</TableColumn>
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
                    handleProductNameClick(item);
                  } else if (columnKey === "status") {
                    handleTargetedLocationClick(item);
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



// import { Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from "@nextui-org/react";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function AdsTable() {
//   const [page, setPage] = useState(1);
//   const [users, setUsers] = useState([]); // Initialize an empty array for users
//   const rowsPerPage = 7;
//   const navigate = useNavigate();

//   // Fetch data from the JSON file when the component is mounted
//   useEffect(() => {
//     fetch('./Back-end/insights_data.json')  // Path to the JSON file in the public folder
//     .then((response) => response.json())
//       .then((data) => {
//         setUsers(data); // Set the fetched data to the state
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []); // Empty dependency array ensures it runs once on component mount

//   const pages = Math.ceil(users.length / rowsPerPage);

//   const items = React.useMemo(() => {
//     const start = (page - 1) * rowsPerPage;
//     const end = start + rowsPerPage;

//     return users.slice(start, end);
//   }, [page, users]);

//   const handleProductNameClick = (item) => {
//     navigate(`/AdChart/${item.id}`); // Example navigation logic
//   };

//   const handleTargetedLocationClick = (item) => {
//     navigate(`/map`); // Example navigation logic
//   };

//   return (
//     <Table
//       aria-label="Example table with client-side pagination"
//       bottomContent={
//         <div className="flex w-full justify-center">
//           <Pagination
//             isCompact
//             showControls
//             showShadow
//             color="secondary"
//             page={page}
//             total={pages}
//             onChange={(newPage) => setPage(newPage)}
//           />
//         </div>
//       }
//       classNames={{
//         wrapper: "min-h-[222px]",
//       }}
//     >
//       <TableHeader>
//         <TableColumn key="name">Campaign Name</TableColumn>
//         <TableColumn key="role">Creation Time</TableColumn>
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
//                     handleProductNameClick(item); // Navigation logic
//                   } else if (columnKey === "status") {
//                     handleTargetedLocationClick(item); // Navigation logic
//                   }
//                 }}
//               >
//                 {getKeyValue(item, columnKey)} // Display the data in the table cell
//               </TableCell>
//             )}
//           </TableRow>
//         )}
//       </TableBody>
//     </Table>
//   );
// }
