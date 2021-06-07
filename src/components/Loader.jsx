export default function Loader() {
  const style = {
    display: "flex",
    zIndex: "100",
    height: "100vh",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    background: "gray",
    opacity: "0.5",
    position: "fixed",
    top: "0",
    left: "0",
  };

  return (
    <div style={style}>
      <div style={{ zIndex: "200" }} className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
