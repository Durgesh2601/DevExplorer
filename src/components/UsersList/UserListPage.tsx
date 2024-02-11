import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { UserList } from "../../types";
import { fetchAllUsers } from "../../api";
import UserItem from "./UserItem";

const UserListPage: React.FC = () => {
  const [users, setUsers] = useState<UserList[]>([]);

  const getAllUsers = async () => {
    try {
      const data = await fetchAllUsers();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <Grid
        container
        justifyContent="center"
        sx={{ marginTop: "1.5rem", gap: "1rem", padding: "1rem" }}
      >
        {users?.map((user) => (
          <React.Fragment key={user?.id}>
            <UserItem user={user} />
          </React.Fragment>
        ))}
      </Grid>
    </>
  );
};

export default UserListPage;
