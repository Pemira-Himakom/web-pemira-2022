import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className='border-b-4 border-choco flex justify-end bg-whiteWeak font-semibold'>
      <Link to='/admin/summary'>
        <div className='border-l-4 border-choco py-2 px-8'>Summary</div>
      </Link>
      <Link to='/admin/assign'>
        <div className='border-l-4 border-choco py-2 px-8'>Identification</div>
      </Link>
      <Link to='/admin/detect'>
        <div className='border-l-4 border-choco py-2 px-8'>Detect Validity</div>
      </Link>
      <button className='border-l-4 border-choco py-2 px-8'>Logout</button>
    </nav>
  );
}

export default Navigation;
