import React from "react";
import styles from "./OrderTracker.module.css";
import { CheckCircle, Clock, XCircle } from "lucide-react";

const steps = [
  { label: "Ordenado", value: "ordered" },
  { label: "En Camino", value: "in_transit" },
  { label: "Entregado", value: "delivered" },
];

const getStatusIndex = (estado) => {
  switch (estado.toLowerCase()) {
    case "cancelado":
      return -1;
    case "pendiente":
      return 0;
    case "en camino":
      return 1;
    case "entregada":
      return 2;
    default:
      return -1;
  }
};

const OrderTracker = ({ estado }) => {
  const currentStep = getStatusIndex(estado);

  return (
    <div className={styles["tracker-container"]}>
      {steps.map((step, index) => {
        const isCompleted = index <= currentStep;
        const isLast = index === steps.length - 1;

        return (
          <div className={styles["step-wrapper"]} key={step.value}>
            <div
              className={
            currentStep === -1
              ? `${styles.circle} ${styles.cancelled}`
              : isCompleted
              ? `${styles.circle} ${styles.active}`
              : styles.circle
              }
            >
              {currentStep === -1 ? (
            <XCircle size={20} />
              ) : isCompleted ? (
            <CheckCircle size={20} />
              ) : (
            <Clock size={20} />
              )}
            </div>
            <p className={styles["step-label"]}>{step.label}</p>
            {!isLast && (
              <div
            className={
              currentStep === -1
                ? `${styles.line} ${styles.cancelled}`
                : index < currentStep
                ? `${styles.line} ${styles.active}`
                : styles.line
            }
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default OrderTracker;