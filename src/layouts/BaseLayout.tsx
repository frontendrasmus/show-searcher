import { Outlet } from 'react-router-dom';

function BaseLayout() {
  return (
    <div className="container">
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default BaseLayout;
