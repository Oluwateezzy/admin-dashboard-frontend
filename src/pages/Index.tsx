import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { UserDialog } from "@/components/UserDialog";
import { UserTable } from "@/components/UserTable";
import { Button } from "@/components/ui/button";
import { PlusIcon, LogOutIcon } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { findManyUsers } from "@/service/users/findManyUsersService";
import { UpdateUserDTO, UserDTO } from "@/interface/interface";
import { createUser } from "@/service/users/createUserService";
import { updateUser } from "@/service/users/updateUserService";
import { deleteUser } from "@/service/users/deleteUserService";

const Index = () => {
  const [users, setUsers] = useState<UserDTO[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserDTO | null>(null);
  const { toast } = useToast();
  const { logout } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await findManyUsers({}, { limit: 10, page: 1 });
        setUsers(data);
      } catch (error) {
        toast({
          title: "Error loading users",
          description: error.message,
          variant: "destructive",
        });
      }
    };
    fetchUsers();
  }, [toast]);

  const handleAddUser = async (userData: Omit<UserDTO, "id">) => {
    try {
      const { data } = await createUser(userData);
      setUsers([data, ...users]);
      toast({
        title: "User added successfully",
        description: `${userData.name} has been added to the system.`,
      });
    } catch (error) {
      toast({
        title: "Error adding user",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleUpdateUser = async (userData: FormData & { id: string }) => {
    try {
      const { id, ...updateData } = userData;
      const { data } = await updateUser(id, updateData as UpdateUserDTO);
      setUsers(users.map((u) => (u.id === id ? { ...u, ...data } : u)));
      toast({
        title: "User updated successfully",
        description: `${data.username}'s information has been updated.`,
      });
    } catch (error) {
      toast({
        title: "Error updating user",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleDeleteUser = async (userId: string) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter((u) => u.id !== userId));
      toast({
        title: "User deleted successfully",
        description: "The user has been removed from the system.",
      });
    } catch (error) {
      toast({
        title: "Error deleting user",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background p-8 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">Users</h1>
            <p className="text-muted-foreground mt-2">
              Manage user accounts and permissions
            </p>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={() => {
                setSelectedUser(null);
                setDialogOpen(true);
              }}
              className="flex items-center gap-2"
            >
              <PlusIcon className="h-4 w-4" />
              Add User
            </Button>
            <Button
              variant="outline"
              onClick={logout}
              className="flex items-center gap-2"
            >
              <LogOutIcon className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>

        <UserTable
          users={users}
          onEdit={(user) => {
            setSelectedUser(user);
            setDialogOpen(true);
          }}
          onDelete={handleDeleteUser}
        />

        <UserDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          user={selectedUser}
          onSubmit={(formData) => {
            if (selectedUser) {
              handleUpdateUser({ ...formData, id: selectedUser.id });
            } else {
              handleAddUser(formData);
            }
            setDialogOpen(false);
          }}
        />
      </div>
    </div>
  );
};

export default Index;