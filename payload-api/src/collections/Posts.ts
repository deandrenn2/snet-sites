import { slateEditor } from "@payloadcms/richtext-slate";
import { CollectionConfig, FieldHook } from "payload/types";
// import Media from "./Media";

// 'value' is this field's specific incoming value
// 'data' is all of the incoming values for the document
const formatSlug: FieldHook = async ({ value, data }) => {
  // return formatted version of title if exists, else return unmodified value
  return data?.titulo?.replace(/ /g, '-').toLowerCase() ?? value;
};

const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "titulo",
  },
  access: {
    read: () => true,
    create: () => true
  },

  fields: [
    {
      name: "titulo",
      type: "text",
      required: true,
    },
    {
      name: "extracto",
      type: "textarea",
      required: false,
      maxLength: 200
    },
    {
      name: "contenido",
      editor:  slateEditor({
        admin: {
          elements: ['textAlign',"h1","h2","h3","h4","h5","h6","indent","link","ol","ul", "relationship", "upload"],
          leaves: ["bold", "code", "italic", "strikethrough", "underline"],
          upload: {
            collections: {
              ["media"]: {
                fields: [        {
                  name: 'alt',
                  type: 'text',
                },
        ]
              }
            }
          }
        }
      }),
      type: "richText",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: false,
      admin: {
        position: 'sidebar',
        readOnly: true
      },
      hooks: {
        beforeChange: [
          formatSlug,
        ],
      }
    },
    {
      name: 'imagen',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'categories',
      admin: {
        position: 'sidebar',
      },
      hasMany: true,
      relationTo: 'categories',
      type: 'relationship',
    }
  ],
};

export default Posts;