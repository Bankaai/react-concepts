import { useState, useEffect } from 'react';
import axios from 'axios';  // Import axios if not imported
import './App.css';

// Define the Userfunction component
function Userfunction() {
  const [users, setUsers] = useState([]);

  // Fetch data from the server when the component mounts
  useEffect(() => {
    async function backend() {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/user/bulk");
        const data = response.data.users; // Assuming response has a `data` object with `users` field
        
        // Set the state variable to the fetched data
        setUsers(data);
      } catch (error) {
        console.error("Error encountered", error);
      }
    }

    backend();
  }, []);  // Empty dependency array ensures this runs only once after the initial render

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {/* Map over the users array and render the list */}
        {users.map((user) => (
          <li key={user.id}>
            ID: {user.id}, Username: {user.username}, Password: {user.password}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <Userfunction />
    </div>
  );
}

export default App;
