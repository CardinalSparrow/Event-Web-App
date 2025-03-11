const Filters = ({
  petsAllowed,
  setPetsAllowed,
}: {
  petsAllowed: boolean;
  setPetsAllowed: (val: boolean) => void;
}) => {
  return (
    <label className="flex items-center gap-2">
      <input
        className=" h-8 w-8"
        type="checkbox"
        checked={petsAllowed}
        onChange={(e) => setPetsAllowed(e.target.checked)}
      />
      Show only pet-friendly events
    </label>
  );
};

export default Filters;
