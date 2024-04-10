import { v4 as uuid4 } from "uuid"

const widgetsConfigs = [
  {
    id: uuid4(),
    title: "容器",
    type: 2,
    items: [
      {
        id: uuid4(),
        name: "",
        options: {
          groupName: "栅格",
        },
      },
    ],
  },
  {
    id: uuid4(),
    title: "表单",
    type: 2,
    items: [
      {
        id: uuid4(),
        name: "文本框",
        options: {
          groupName: "表单",
        },
      },
    ],
  },
]

export default widgetsConfigs
