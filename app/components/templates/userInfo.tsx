import UserInfoCard from '../parts/userInfoCard'

const UserInfo = (): JSX.Element => {
  return (
    <>
      <div className="stats shadow">
        <UserInfoCard />
        <UserInfoCard />
        <UserInfoCard />
        <UserInfoCard />
      </div>
    </>
  )
}

export default UserInfo
