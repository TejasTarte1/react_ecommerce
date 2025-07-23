
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [profile, setProfile] = useState([]); 

  useEffect(() => {
    const          obj = { "token": localStorage.getItem("user_token") };

    axios.post("https://a2zithub.org/dairy/abi/user_profile", obj)
      .then((res) => {
        console.log("Profile API Response:", res.data);
         if (res.data.status === success) {
        setProfile(res.data.data); 
         }
         else{
          console.log("Invalid Details");
         }
      })
      .catch((err) => {
        console.error("Error fetching profile:", err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2>User Profile</h2>
        {profile ? (
          <table className="table table-bordered w-50">
            <tbody>
              <tr>
                <th>User ID</th>
                <td>{profile.token}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{profile.user_name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{profile.user_email}</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>{profile.user_mobile}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Loading profile...</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Profile;
