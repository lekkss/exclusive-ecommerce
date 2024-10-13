// Breadcrumb.tsx
import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

type BreadcrumbItem = {
  label: string;
  href?: string; // Optional href if you want to make the breadcrumb item clickable
};

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex flex-wrap list-none p-0">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <Link to={item.href} className="text-grey2">
                {item.label}
              </Link>
            ) : (
              <span className="text-black">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="mx-2 text-grey2">/</span> // Separator between breadcrumb items
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
