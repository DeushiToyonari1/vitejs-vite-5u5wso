import './App.css';
import { UserCard } from './components/UserCard';
import { useAllUsers } from './hooks/useAllUsers';

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers(); // 修正: getUers -> getUsers, UserProfile -> userProfiles

  const onClickFetchUser = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: 'red' }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map(
            (
              user // 修正: userProfile -> userProfiles
            ) => (
              <UserCard key={user.id} user={user} />
            )
          )}
        </>
      )}
    </div>
  );
}
