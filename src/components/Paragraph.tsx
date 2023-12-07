import { createClient } from "@/prismicio";
type ParagraphProps = {
  children: React.ReactNode;
  className: string;
  color: string;
};

export default async function Paragraph({
  children,
  className,
  color,
}: ParagraphProps) {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const { secondary_color } = settings.data;
  return (
    <p
      style={{ color: color || secondary_color || "#303030" }}
      className={className}
    >
      {children}
    </p>
  );
}
