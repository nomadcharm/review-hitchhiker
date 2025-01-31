import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuth } from "../../context/UserProvider";

const Header = () => {
  const user = useAuth();

  console.log(user)

  return (
    <header className="pt-10 pb-10 bg-[#514b82]">
      <div className="mx-auto px-6 w-full max-w-[1360px]">
        <div className="flex items-center justify-end gap-1.5 text-[var(--clr-periwinkle)]" >
          <p>{user.user.username}</p>
          <AccountCircleIcon/>
        </div>
      </div>
    </header>
  )
}

export default Header;
