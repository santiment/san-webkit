export const INITIAL_CONTENT = [
  {
    id: 'b6e310cd-438e-414a-bc4f-906cfca95168',
    type: 'paragraph',
    props: { textColor: 'default', backgroundColor: 'default', textAlignment: 'left' },
    content: [{ type: 'text', text: 'Welcome to this demo!', styles: {} }],
    children: [],
  },

  {
    type: 'alert',
    //content: 'This is an example alert',
  },

  {
    id: '42d35dbe-eadb-4299-95f2-7c5f759e121a',
    type: 'heading',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
      level: 1,
    },
    content: [
      {
        type: 'text',
        text: 'This is a heading block',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: '8e6ffe3f-ea5c-4736-b8d6-528e67c56d78',
    type: 'paragraph',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: 'This is a paragraph block',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: '45606696-6bf7-4239-adc4-839e829f1c79',
    type: 'paragraph',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [],
    children: [],
  },
]
