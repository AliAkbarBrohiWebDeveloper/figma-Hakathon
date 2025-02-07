
import { Rule } from "@sanity/types";

const ReviewSection = {
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required().min(3).max(100),
    },
    {
      name: "comment",
      title: "Comment",
      type: "text",
      validation: (Rule: Rule) => Rule.required().min(10).max(500),
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule: Rule) => Rule.required().min(1).max(5),
      description: "Rating (1-5 stars)",
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "product",
      title: "Product",
      type: "reference",
      to: [{ type: "product" }],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "comment",
      media: "product.image",
      rating: "rating", 
    },
    prepare(selection: { title: string; subtitle: string; media: string; rating: number }) {
      const { title, subtitle, media, rating } = selection;
      const stars = rating ? '★'.repeat(rating) : 'No Rating';
      return {
        title,
        subtitle: `${subtitle} - ${stars}`,
        media,
      };
    },
  },
};

export default ReviewSection;

