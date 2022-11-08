import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className='border-b-4 border-choco flex justify-end bg-whiteWeak font-semibold'>
      <Link to='/summary'>
        <div className='border-l-4 border-choco py-2 px-8'>Summary</div>
      </Link>
      <Link to='/assign'>
        <div className='border-l-4 border-choco py-2 px-8'>Identification</div>
      </Link>
      <Link to='/validator'>
        <div className='border-l-4 border-choco py-2 px-8'>Detect Validity</div>
      </Link>
    </nav>
  );
}

export default Navigation;
