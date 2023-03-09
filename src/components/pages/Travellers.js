import React, { useState, useEffect } from "react";
import { Theme } from "../Theme";
import { apiGetCall } from "../../network/apiCalls";
import { ROUTES } from "../../network/url";

export const Travellers = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await apiGetCall(ROUTES.TRAVELLERS);
    setClients(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Theme>
      <div className="px-4 sm:px-6 lg:px-8 pt-32">
        <div className="flow-root">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Name
                    </th>

                    <th
                      scope="col"
                      className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Destination
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Travellers
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Budget(USD)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {loading ? (
                    <tr>
                      <td className="py-4 px-3">Loading...</td>
                    </tr>
                  ) : (
                    clients?.map((client) => {
                      return (
                        <tr key={client._id}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 capitalize">
                            {client.name}
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            {client.email}
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500 capitalize">
                            {client.destination}
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            {client.travellers}
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            {client.budget}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Theme>
  );
};
