const Pagination = ({
  page,
  setPage,
}: {
  page: number;
  setPage: (page: number) => void;
}) => {
  return (
    <div className="flex justify-between mt-4">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 bg-gray-200 rounded"
      >
        Previous
      </button>
      <p>Page {page}</p>
      <button
        onClick={() => setPage(page + 1)}
        className="px-4 py-2 bg-gray-200 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
