type TransactionTableProps = {
  transactions: Array<{
    code: string;
    customer: string;
    product: string;
    stage: string;
    commission: string;
  }>;
};

export function TransactionTable({ transactions }: TransactionTableProps) {
  return (
    <div className="transaction-table" role="table" aria-label="Danh sách giao dịch">
      <div className="table-row table-head" role="row">
        <span>Mã giao dịch</span>
        <span>Khách hàng</span>
        <span>Sản phẩm</span>
        <span>Trạng thái</span>
        <span>Hoa hồng</span>
      </div>
      {transactions.map((transaction) => (
        <div className="table-row" role="row" key={transaction.code}>
          <span>{transaction.code}</span>
          <span>{transaction.customer}</span>
          <span>{transaction.product}</span>
          <span>{transaction.stage}</span>
          <strong>{transaction.commission}</strong>
        </div>
      ))}
    </div>
  );
}
