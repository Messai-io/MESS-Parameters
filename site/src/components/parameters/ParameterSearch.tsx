interface ParameterSearchProps {
  value: string;
  onChange: (value: string) => void;
  resultCount: number;
}

export function ParameterSearch({ value, onChange, resultCount }: ParameterSearchProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1 relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search parameters by name, description, or unit..."
          className="w-full h-10 px-4 text-sm bg-white border border-gray-300 text-mes-text-primary placeholder:text-mes-text-muted focus:outline-none focus:border-mes-bakelite transition-colors"
        />
      </div>
      <span className="text-xs text-mes-text-muted whitespace-nowrap">
        {resultCount} results
      </span>
    </div>
  );
}
