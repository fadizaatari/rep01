import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Alert({ message, type, onClose }) {
  return (
    <div
      className={`alert alert-${type} alert-dismissible fade show`}
      role="alert"
    >
      {message}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
}

function MyComponent() {
  const [alerts, setAlerts] = useState([]);

  const handleShowAlert = (message, type = "primary") => {
    setAlerts([...alerts, { message, type, id: Date.now() }]); // Add alert with unique ID
  };

  const handleCloseAlert = (id) => {
    setAlerts(alerts.filter((alert) => alert.id !== id));
  };

  return (
    <div className="container mt-4">
      <button
        className="btn btn-primary me-2"
        onClick={() => handleShowAlert("Primary Alert")}
      >
        Primary
      </button>
      <button
        className="btn btn-success me-2"
        onClick={() => handleShowAlert("Success Alert", "success")}
      >
        Success
      </button>
      <button
        className="btn btn-danger me-2"
        onClick={() => handleShowAlert("Danger Alert", "danger")}
      >
        Danger
      </button>
      <button
        className="btn btn-warning"
        onClick={() => handleShowAlert("Warning Alert", "warning")}
      >
        Warning
      </button>

      <div className="mt-3">
        {" "}
        {/* Container for alerts */}
        {alerts.map((alert) => (
          <Alert
            key={alert.id}
            message={alert.message}
            type={alert.type}
            onClose={() => handleCloseAlert(alert.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default MyComponent;
