import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./HomeDash";
import JobSeekerSignup from "./JobSeekerSignup";
import JobSeekerLogin from "./JobSeekerLogin";
import JobProviderSignup from "./JobProviderSignup";
import JobProviderLogin from "./JobProviderLogin";
import OTP from "./Otp";
import JobSeekerDashboard from "./JobSeekerDashboard";
import JobProviderDashboard from "./JobProviderDashboard";
import ManageJob from "./ManageJob";
import PostJob from "./PostJob";
import Applicants from "./Applicants";
import JobSeekerProfile from "./JobSeekerProfile";
import AppliedJobs from "./AppliedJobs";
import SavedJobs from "./SavedJobs";
import Jobapply from "./Jobapply";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobseekersignup" element={<JobSeekerSignup />} />
      <Route path="/jobseekerlogin" element={<JobSeekerLogin />} /> 
      <Route path="/jobseekerdashboard" element={<JobSeekerDashboard />} />
      <Route path="/jobprovidersignup" element={<JobProviderSignup />} />
      <Route path="/jobproviderlogin" element={<JobProviderLogin />} />
      <Route path="/jobproviderdashboard" element={<JobProviderDashboard />} />
      <Route path="/otp" element={<OTP />} />
      <Route path="/managejob" element={<ManageJob />}></Route>
      <Route path="/postjob" element={<PostJob />}></Route>
      <Route path="/applicants" element={<Applicants />}></Route>
      <Route path="/jobproviderdashboard" element={<JobProviderDashboard />}></Route>
      <Route path="/jobseekerprofile" element={<JobSeekerProfile />}></Route>
      <Route path="/appliedjobs" element={<AppliedJobs />}></Route>
      <Route path="/savedjobs" element={<SavedJobs />}></Route>
      <Route path="/jobapply" element={<Jobapply />}></Route>
    </Routes>
  );
}

export default App;