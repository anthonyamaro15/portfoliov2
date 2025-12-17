import { Badge } from "@/components/ui/badge";

interface TagsComponentProps {
  size?: "sm" | "md" | "lg";
  data: string[];
}

const sizeClasses = {
  sm: "text-[10px] px-1.5 py-0.5",
  md: "text-xs",
  lg: "text-sm px-3 py-1",
};

const TagsComponent = ({ size = "md", data }: TagsComponentProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {data?.map((tag, i) => (
        <Badge key={i} variant="secondary" className={sizeClasses[size]}>
          {tag}
        </Badge>
      ))}
    </div>
  );
};

export default TagsComponent;
