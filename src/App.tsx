import "./styles.css";

const user = {
  name: "Diego PH",
  imageURL:
    "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=3308&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  imageSize: 200,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageURL}
        alt="Person holding a light bulb"
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}
