const SummaryCard = ({
  title,
  amount,
  icon: Icon,
  percentage,
  trend,
}) => {
  return (
    <div className="summary-card">
      <div className="summary-card-content">
        <div className="summary-card-info">
          <p className="summary-card-title">{title}</p>
          <h2 className="summary-card-amount">{amount}</h2>

          <span className={`summary-card-trend ${trend}`}>
            {percentage}
          </span>
        </div>

        <div className="summary-card-icon">
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
