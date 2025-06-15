import React from 'react';
import Navbar from '../home/Navbar';
import PojectCount from '../dashboard/PojectCount';
import ProjectInv from '../Project/ProjectInv';
import Teams from '../Team/Teams';

const Layout = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div style={{ width: '300px', minHeight: '100vh', position: 'sticky', top: 0 }}>
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-2">
        <PojectCount />
        <div className="d-flex flex-wrap">
          <div className="mr-3 mb-3" style={{ flex: '1 1 300px' }}>
            <ProjectInv />
          </div>
          <div className="mb-3" style={{ flex: '1 1 300px' }}>
            <Teams />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
