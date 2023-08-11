import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import UseAdmin from '../Hooks/UseAdmin';

const Dashboard = () => {
  const [isAdmin] = UseAdmin()
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {
            isAdmin ?
              <>
                <li><Link to="/dashboard/users">All User</Link></li>
                <li><Link to="/dashboard/manageClass">Manage Class</Link></li>
                <li><Link to='/'>Home</Link></li>
              </>
              :
              <>
                <li><Link to="/dashboard/myselect">My Course</Link></li>
                <li><Link to='/'>Home</Link></li>
              </>

          }

        </ul>

      </div>
    </div>
  );
};

export default Dashboard;