const LoadingSpinner = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "40vh",
        width: "100%",
        position: "relative",
        zIndex: 10,
        background: "transparent",
      }}
    >
      <div
        className="spinner-border"
        role="status"
        style={{
          width: "4rem",
          height: "4rem",
          borderWidth: "0.6rem",
          borderColor: "#0dcaf0 #e9ecef #0dcaf0 #e9ecef",
          animation: "spin 1s linear infinite",
        }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}
      </style>
    </div>
  );
};

export default LoadingSpinner;
