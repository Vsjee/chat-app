import { Logout } from '@/components';
import { Outlet } from 'react-router-dom';
import { ContactsList } from './ContactsList';
import DashboardWrapper from './DashboardWrapper.css';
import { CiUser } from 'react-icons/ci';

function Dashboard() {
  return (
    <DashboardWrapper>
      <article className="contactList">
        <nav className="contactList__nav">
          <button>
            <CiUser className="contactList__nav__profile" />
          </button>
          <Logout />
        </nav>
        <ContactsList />
      </article>
      <article className="outlet">
        <Outlet />
      </article>
    </DashboardWrapper>
  );
}

export default Dashboard;
