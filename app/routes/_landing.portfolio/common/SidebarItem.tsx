import { useNavigate } from "@remix-run/react";

interface SidebarItemProps {
  title: string;
  children?: SidebarItemProps[];
  level?: number;
  open?: boolean;
  expandAll?: boolean;
  active?: boolean;
  onClick?: () => void;
  hash?: string;
}

export const SidebarItem = ({
  title,
  children = [],
  level = 0,
  expandAll,
  open,
  onClick,
  active,
  hash,
}: SidebarItemProps) => {
  const hasChildren = children.length > 0;
  const navigate = useNavigate();

  return (
    <li className="list-none">
      <button
        className={`line-clamp-1 cursor-pointer text-ellipsis text-left text-sm ${level === 0 ? "font-semibold" : "font-normal"} ${active ? "text-primary" : "text-white"} hover:text-primary`}
        onClick={() => {
          onClick && onClick();
          !onClick && hash && navigate(`#${hash}`);
        }}
      >
        {title}
      </button>
      {open && hasChildren && (
        <ul className="ml-2 mt-1 flex flex-col gap-1">
          {children.map((child, i) => (
            <SidebarItem key={i} {...child} level={level + 1} open={expandAll} />
          ))}
        </ul>
      )}
    </li>
  );
};
