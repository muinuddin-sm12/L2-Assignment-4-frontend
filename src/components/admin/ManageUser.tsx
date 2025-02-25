/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { FaUserLock } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { UpdateUserRoleModal } from "../modal/userManagement/UpdateUserRoleModal";
import { UpdateAccountStatusModal } from "../modal/userManagement/UpdateAccountStatusModal";

const ManageUser = () => {
  const { data } = useGetAllUsersQuery(undefined);
  const [isUpdateUserRoleModalOpen, setIsUpdateUserRoleModalOpen] =
    useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [isUpdateAccountStatusModalOpen, setIsUpdateAccountStatusModalOpen] =
    useState(false);
  const [selectedAccountUserId, setSelectedAccountUserId] = useState<
    string | null
  >(null);
  // console.log(data.data);

  const handleUpdateRoleOpenModal = (productId: string) => {
    setSelectedUserId(productId); // Set the ID of the selected product
    setIsUpdateUserRoleModalOpen(true); // Open the modal
  };

  const handleDeleteCloseModal = () => {
    setIsUpdateUserRoleModalOpen(false); // Close the modal
    setSelectedUserId(null); // Reset the product ID
  };

  const handleUpdateAccountOpenModal = (productId: string) => {
    setSelectedAccountUserId(productId); // Set the ID of the selected product
    setIsUpdateAccountStatusModalOpen(true); // Open the modal
  };

  const handleUpdateAccountCloseModal = () => {
    setIsUpdateAccountStatusModalOpen(false); // Close the modal
    setSelectedAccountUserId(null); // Reset the product ID
  };
  return (
    <div>
      <div className="py-3 rounded-lg bg-gray-300 px-4">
        <p className="text-sm">All Users</p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Index</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-right">Deactivate User</TableHead>
            <TableHead className="text-right">Update Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((singleData: { email: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; role: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; _id: string; deactivate: any; }, index: number) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{singleData?.email}</TableCell>
              <TableCell className="flex items-center gap-1">
                {singleData?.role}{" "}
                <span>
                  {singleData?.role === "admin" && (
                    <FaCrown className="text-lg text-yellow-500" />
                  )}
                </span>
              </TableCell>
              <TableCell className="text-right text-lg">
                <button
                  onClick={() => handleUpdateAccountOpenModal(singleData._id)}
                >
                  <FaUserLock
                    className={`${singleData.deactivate && "text-[#D32F2F]"}`}
                  />
                </button>
                {isUpdateAccountStatusModalOpen && selectedAccountUserId && (
                  <UpdateAccountStatusModal
                    id={selectedAccountUserId}
                    onClose={handleUpdateAccountCloseModal}
                  />
                )}
              </TableCell>
              <TableCell className="text-right text-lg">
                <button
                  onClick={() => handleUpdateRoleOpenModal(singleData._id)}
                >
                  <MdOutlinePublishedWithChanges />
                </button>
                {isUpdateUserRoleModalOpen && selectedUserId && (
                  <UpdateUserRoleModal
                    id={selectedUserId}
                    onClose={handleDeleteCloseModal}
                  />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageUser;
