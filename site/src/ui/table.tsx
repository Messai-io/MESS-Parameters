import { forwardRef, type HTMLAttributes, type TdHTMLAttributes, type ThHTMLAttributes } from 'react';
import { cn } from './utils';

export const Table = forwardRef<HTMLTableElement, HTMLAttributes<HTMLTableElement>>(
  ({ className, children, ...props }, ref) => (
    <div className="overflow-x-auto">
      <table ref={ref} className={cn('w-full border-collapse text-sm', className)} {...props}>
        {children}
      </table>
    </div>
  )
);
Table.displayName = 'Table';

export const TableHeader = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, children, ...props }, ref) => (
    <thead ref={ref} className={cn('bg-gray-50 border-b border-gray-200', className)} {...props}>
      {children}
    </thead>
  )
);
TableHeader.displayName = 'TableHeader';

export const TableBody = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, children, ...props }, ref) => (
    <tbody ref={ref} className={cn('divide-y divide-gray-200', className)} {...props}>
      {children}
    </tbody>
  )
);
TableBody.displayName = 'TableBody';

export const TableRow = forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement> & { selected?: boolean }>(
  ({ selected = false, className, children, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn('transition-colors hover:bg-gray-50', { 'bg-blue-50': selected }, className)}
      {...props}
    >
      {children}
    </tr>
  )
);
TableRow.displayName = 'TableRow';

export const TableHead = forwardRef<HTMLTableCellElement, ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, children, ...props }, ref) => (
    <th
      ref={ref}
      className={cn('px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider', className)}
      {...props}
    >
      {children}
    </th>
  )
);
TableHead.displayName = 'TableHead';

export const TableCell = forwardRef<HTMLTableCellElement, TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, children, ...props }, ref) => (
    <td ref={ref} className={cn('px-4 py-3 whitespace-nowrap text-sm text-gray-900', className)} {...props}>
      {children}
    </td>
  )
);
TableCell.displayName = 'TableCell';
