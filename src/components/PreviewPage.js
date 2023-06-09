import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { fetchDataRequested } from "../redux/action/checkoutAction";

import { useSelector } from "react-redux";

const Previewpage = () => {
  const dispatch = useDispatch();
  const { checkoutData, isLoading } = useSelector((state) => state.checkout);
  const error = useSelector((state) => state.error);

  return (
    <>
      {checkoutData !== null ? (
        <div className="container w-50 p-2">
          <h2 style={{ textAlign: "center", fontSize: 60 }}>Preview Page</h2>
          <div>
          <table class="table table-bordered">
            <thead class="thead-light">
              <tr>
                <th
                  scope="col"
                  style={{
                    padding: "15px",
                    marginLeft: "100px",
                    paddingLeft:"2%",
                    fontSize: 30,
                  }}
                >
                  Billing Address
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <p
                    style={{
                      paddingTop: "25px",
                      marginLeft: "100px",
                      fontSize: 20,
                    }}
                  >
                    First Name: {checkoutData.fname}
                  </p>
                </th>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <th scope="row">
                  <p
                    style={{
                      paddingTop: "25px",
                      marginLeft: "100px",
                      fontSize: 20,
                    }}
                  >
                    Last Name: {checkoutData.lname}
                  </p>
                </th>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <th scope="row">
                  <p
                    style={{
                      paddingTop: "25px",
                      marginLeft: "100px",
                      fontSize: 20,
                    }}
                  >
                    Email: {checkoutData.email}
                  </p>
                </th>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <th scope="row">
            <p
              style={{
                paddingTop: "25px",
                marginLeft: "100px",
                fontSize: 20,
              }}
            >
              Address: {checkoutData.address}
            </p>
            </th>
            </tr>
            </tbody>

          </table>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Previewpage;
