import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { UserDialog } from "@/components/UserDialog";
import { UserTable } from "@/components/UserTable";
import { Button } from "@/components/ui/button";
import { PlusIcon, LogOutIcon } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export type User = {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "User";
};

const Index = () => {
  const [users, setUsers] = useState<User[]>([
    { id: "1", name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: "2", name: "Jane Smith", email: "jane@example.com", role: "User" },
  ]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const { toast } = useToast();
  const { logout } = useAuth();

  const handleAddUser = (user: Omit<User, "id">) => {
    const newUser = { ...user, id: Math.random().toString() };
    setUsers([...users, newUser]);
    toast({
      title: "User added successfully",
      description: `${user.name} has been added to the system.`,
    });
  };

  const handleUpdateUser = (updatedUser: User) => {
    setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
    toast({
      title: "User updated successfully",
      description: `${updatedUser.name}'s information has been updated.`,
    });
  };

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter((u) => u.id !== userId));
    toast({
      title: "User deleted successfully",
      description: "The user has been removed from the system.",
      variant: "destructive",
    });
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
          onSubmit={(user) => {
            if (selectedUser) {
              handleUpdateUser({ ...user, id: selectedUser.id } as User);
            } else {
              handleAddUser(user as Required<Omit<User, "id">>);
            }
            setDialogOpen(false);
          }}
        />
      </div>
    </div>
  );
};

export default Index;