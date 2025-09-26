import logo from "../assets/logo-loading.png";

const LoadingScreen = ({ isVisible }) => {
  return (
    <div
      className={`fixed inset-0 bg-blue-dudaris flex items-center justify-center z-50 ${
        isVisible ? "loading-screen" : ""
      }`}
    >
      <div className="loading-container">
        <img
          src={logo}
          alt="logo"
          width={180}
          height={200}
          className="loading-logo"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
