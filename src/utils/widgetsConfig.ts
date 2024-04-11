import { v4 as uuid4 } from "uuid"

const widgetsConfigs = [
  {
    id: uuid4(),
    title: "容器",
    type: "container",
    items: [
      {
        id: uuid4(),
        name: "栅格",
        options: {
          groupName: "容器",
        },
      },
      {
        id: uuid4(),
        name: "表格",
        options: {
          groupName: "容器",
        },
      },
      {
        id: uuid4(),
        name: "页面段落",
        options: {
          groupName: "容器",
        },
      },
    ],
  },
  {
    id: uuid4(),
    title: "表单",
    type: "form",
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
