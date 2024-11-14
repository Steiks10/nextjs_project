import User from '@/components/User';

function Users({users}) {
  return (
    <ul>
      {users.map(user => (
        <User user={user} key={user.id}/>
      ))}
    </ul>
  )
}

export default Users