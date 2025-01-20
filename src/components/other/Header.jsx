import React from 'react';
import { setLocalStorage } from '../../utils/localStorage';

const Header = ({ data }) => {

  // const [username, setUsername] = useState('')
  // if (!data) {
  //   setUsername('Admin')
  // } else {
  //   setUsername(data.name)
  // }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', "")
    window.location.reload()
  }
  console.log(data)

  return (
    <header className="bg-black p-4 flex justify-between items-center">
        <span className="text-2xl font-semibold text-white">Hello {data.name}</span>
          <div className="flex items-center font-semibold space-x-4 ml-auto">
            <button onClick={logOutUser} className="bg-red-700 text-white py-2 px-4 rounded-sm hover:bg-red-600">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;