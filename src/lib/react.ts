import { REACT_TEXT } from "./const";
declare module _JSX {
  export interface Props {
    className: string;
    children: JSX[] | string;
    style:Record<string,any>
  }

  export interface JSX {
    type: string;
    key?: any;
    ref?: any;
    props: Props;
    _owner?: any;
    _store: any;
  }
}

export function createElement(type: string, config: { __self: any; __source: any; }, ...children: _JSX.JSX[]) {
  // 删除不必要的属性，简化代码
  if (config) {
    delete config.__self;
    delete config.__source;
  }
  return {
    type,
    props: {
      ...config,
      children: children.map((child) => {
        return typeof child === 'object' ? child : {
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

const React = {createElement}

export default React
