import { useUser } from "../context/UserContext";
import { useTheme } from "../context/ThemeContext";

const UserProfile = () => {
  const { user } = useUser();
  const { theme } = useTheme();

  return (
    <div className={`user-profile ${theme}`}>
      <h2>Profil Pengguna</h2>

      <div className="profile-info">
        <div className="avatar">👤</div>

        <div className="details">
          <p><strong>Nama:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
