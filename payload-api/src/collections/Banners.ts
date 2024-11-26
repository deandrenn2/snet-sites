import { CollectionConfig } from "payload/types";

const Banners: CollectionConfig = {
  slug: "banners",
  admin: {
    useAsTitle: "titulo",
  },
  access: {
    read: () => true,
    create: () => true,
  },

  fields: [
    {
      name: "titulo",
      type: "text",
      required: false,
      maxLength: 150
    },
    {
      name: "subtitulo",
      type: "textarea",
      required: false,
      maxLength: 200
    },
    {
      name: 'imagen',
      type: 'upload',
      relationTo: 'media',
    }
  ],
};

export default Banners;