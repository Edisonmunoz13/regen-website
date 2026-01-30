"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface WaitlistUser {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  state: string | null;
  ageRange: string | null;
  createdAt: string;
}

export default function AdminUsers() {
  const [users, setUsers] = useState<WaitlistUser[]>([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/admin/users");
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      const data = await res.json();
      if (res.ok) {
        setUsers(data.users);
        setCount(data.count);
      } else {
        setError(data.error || "Failed to fetch users");
      }
    } catch (err) {
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.push("/admin/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{
        background: "linear-gradient(180deg, #0B1410 0%, #13241B 50%, #0B1410 100%)",
        backgroundAttachment: "fixed",
      }}>
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4" style={{
      background: "linear-gradient(180deg, #0B1410 0%, #13241B 50%, #0B1410 100%)",
      backgroundAttachment: "fixed",
    }}>
      <div className="container-page max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Waitlist Users</h1>
            <p className="text-zinc-400">All registered users</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="rounded-xl bg-black border border-zinc-800 p-6 shadow-2xl">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg" style={{
              background: "linear-gradient(135deg, #183731 0%, #85EFAC 140%)",
            }}>
              <span className="text-2xl font-bold text-white">{count}</span>
              <span className="text-white">Total Users</span>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-4 rounded-lg bg-red-900/20 border border-red-800 text-red-400">
              {error}
            </div>
          )}

          {users.length === 0 ? (
            <p className="text-zinc-400 text-center py-8">No users found</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-300">Email</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-300">Name</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-300">Phone</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-300">State</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-300">Age Range</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-300">Registered</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-zinc-800/50 hover:bg-zinc-900/50">
                      <td className="py-3 px-4 text-sm text-white">{user.email}</td>
                      <td className="py-3 px-4 text-sm text-zinc-300">
                        {user.firstName || user.lastName
                          ? `${user.firstName || ""} ${user.lastName || ""}`.trim()
                          : "-"}
                      </td>
                      <td className="py-3 px-4 text-sm text-zinc-300">{user.phone || "-"}</td>
                      <td className="py-3 px-4 text-sm text-zinc-300">{user.state || "-"}</td>
                      <td className="py-3 px-4 text-sm text-zinc-300">{user.ageRange || "-"}</td>
                      <td className="py-3 px-4 text-sm text-zinc-300">
                        {new Date(user.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
