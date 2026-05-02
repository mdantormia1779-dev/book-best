"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { data, isPending } = authClient.useSession();
  const router = useRouter();

  const user = data?.user;

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setImage(user.image || "");
    }
  }, [user]);

  //  redirect
  useEffect(() => {
    if (!isPending && !user) {
      router.push("/login");
    }
  }, [user, isPending, router]);

  //  loading
  if (isPending) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) return null;

  //  update handler
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      //  better-auth update (if supported)
      const { error } = await authClient.updateUser({
        name,
        image,
      });

      if (error) {
        toast.error("Update failed ");
        return;
      }

      toast.success("Profile updated successfully ");

      // close modal
      document.getElementById("my_modal_5").close();

      router.refresh();

    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 md:p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">

        {/* 👤 Left */}
        <div className="col-span-12 md:col-span-3 bg-white p-6 rounded-2xl shadow text-center">
          <Image
            src={user.image || "/user.png"}
            alt="profile"
            width={96}
            height={96}
            className="rounded-full mx-auto"
          />

          <h1 className="font-bold mt-4">{user.name}</h1>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>

        {/*  Middle */}
        <div className="col-span-12 md:col-span-6 bg-white p-6 rounded-2xl shadow">

          <h1 className="text-xl font-bold mb-4">Profile Information</h1>
          <hr className="mb-4" />

          <div className="space-y-4">
            <p><b>ID:</b> {user.id}</p>
            <p><b>Name:</b> {user.name}</p>
            <p><b>Email:</b> {user.email}</p>
            <p>
              <b>Member Since:</b>{" "}
              {user.createdAt
                ? new Date(user.createdAt).toDateString()
                : "N/A"}
            </p>
          </div>

          {/*  OPEN MODAL BUTTON */}
          <button
            className="mt-6 w-full py-2 bg-blue-500 text-white rounded-xl"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Update Information
          </button>

          {/*  MODAL */}
          <dialog id="my_modal_5" className="modal">
            <div className="modal-box">

              <h3 className="font-bold text-lg mb-4">
                Update Profile
              </h3>

              <form onSubmit={handleUpdate} className="space-y-4">

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="input input-bordered w-full"
                />

                <input
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="Image URL"
                  className="input input-bordered w-full"
                />

                <button className="btn btn-primary w-full">
                  Save Changes
                </button>
              </form>

              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>

            </div>
          </dialog>

        </div>

        {/*  Right */}
        <div className="col-span-12 md:col-span-3 bg-white p-6 rounded-2xl shadow">
          <h1 className="font-bold mb-4">Borrowed Books</h1>
          <p className="text-sm text-gray-500">
            No data connected yet
          </p>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;