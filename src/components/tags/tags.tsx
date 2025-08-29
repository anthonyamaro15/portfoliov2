import "./tags.scss";

interface TagsComponentProps {
  size?: "sm" | "md" | "lg";
  data: string[];
}

const TagsComponent = ({ size = "md", data }: TagsComponentProps) => {
  return (
    <div className={`${size} tag-component`}> 
      {data?.map((tag, i) => (
        <span key={i} className="transition-colors">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagsComponent;
