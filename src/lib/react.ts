import { REACT_TEXT } from "./const";

export function createElement(type: any,config: { __self: any; __source: any; }, ...children: any[]){
  // 删除不必要的属性，简化代码
  if (config) {
    delete config.__self;
    delete config.__source;
  }
  return {
      type,
      props: {
          ...config,
          children:children.map((child) => {
              return typeof child === 'object'? child: {
                  type: REACT_TEXT,
                  props: {
                      content: child,
                      children: []
                  }
              }
          })
      }
  }
}
